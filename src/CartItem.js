import React from 'react'
import './CartItem.css'

function CartItem({ cartItem }) {

    return (
        <div className="CartItem">
            <div className="CartItem-image">
                <img src={cartItem.image} />
            </div>
            <div className="CartItem-info">
                <div className="CartItem-title">
                    Item : {cartItem.name}
                </div>
                <div className="CartItem-actions">
                    <div
                        className="CartItem-delete">
                        Delete
                    </div>
                </div>

            </div>
            <div className="CartItem-price">
                Price : Rs {cartItem.price}
            </div>
        </div>
    )
}

export default CartItem
