import React from 'react'
import { useState } from 'react'
import './Product.css'

function Product(props) {
    var [count, funCount] = useState(props.available);
    function increase(){
        funCount(count+1);
    }
    function decrease(){
        if(count==0){
            funCount(0);
        }
        else{
            funCount(count-1);
        }
    }
    return (
        <div className="Product">
            <div className="capsule" style={{visibility: count ? "hidden" : "visible"}}>Out of Stock</div>
            <img style={{opacity: count ? 1 : 0.5}} src={props.image} />
            <div className="Product-description">
                <span className="Product-title">{props.name}</span>
                <span className="Product-title">Rs. {props.price} </span>
                <span className="Product-title"><button onClick={decrease} className='btn'>-</button> {count} <button onClick={increase} className='btn'>+</button></span>
                <span className="Product-price">{props.vendor}</span>
                <span className="Product-rating">
                    <p>🌟</p><p>🌟</p><p>🌟</p><p>🌟</p><p>🌟</p>
                </span>
            </div>
            <button className='btn1'>Add to Cart</button>
        </div>
    )
}

export default Product
