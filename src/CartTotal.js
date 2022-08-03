import React from 'react'
import './CartTotal.css'
import { useState } from 'react';

function CartTotal(props) {

    const [visible, changevisible] = useState("hidden");
    const pop = () => {
        changevisible("visible");
    }

    const getCount = () => {
        let count = 0;
        props.cartItems.forEach(item => {
            count += parseInt(item.available)
        });
        return count;
    }

    const getTotalPrice = () => {
        let total = 0;
        props.cartItems.forEach((item) => {
            total += (item.price * item.available)
        })
        return total;
    }

    return (
        <div className="CartTotal">
            <h3>Subtotal({getCount()} items): Rs{getTotalPrice()} </h3>
            <button onClick={pop}>Proceed to checkout</button>
            <div style={{visibility: visible}} className='popup'>
                <button onClick={() => changevisible("hidden")} style={{width: "10%", position: "relative", left: "45%"}}>X</button>
                <div className='popText'><b>Congratulations! </b><br/>Your Order has been Successfully Placed<br/>Total Price: Rs {getTotalPrice()}
                </div>
            </div>
        </div>
    )
}

export default CartTotal
