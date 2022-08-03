import React, {useEffect, useState} from 'react'
import './Home.css'
import Product from './Product'

function Home({cartItems}) {

    return (
        <div className="Home">
            <div className="Home-container">
                <div 
                    className="Home-banner" 
                    style={{backgroundImage: "url(https://cdn.technadu.com/wp-content/uploads/2018/07/Amazon-Prime-Day-2018-Featured-Banner.jpg)"}}>

                </div>

                <div className="Home-content">
                    <div className="Home-row">
                        {
                            cartItems.map((product)=>(
                                <Product
                                    name={product.name}
                                    key={product.id}
                                    price={product.price}
                                    available={product.available}
                                    vendor={product.vendor}
                                    category={product.category}
                                    image={product.image}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Home
