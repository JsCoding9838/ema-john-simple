import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handleAddToCart = (product) =>{
        // console.log(product);
        // cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    // const myfuncion = (previuse, current) => previuse + parseInt(current.price)
    const totalPrice = cart.reduce((previuse, current) => previuse + parseInt(current.price) ,0);
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => 
                        <Product product={product}
                        key={product.id} handleAddToCart={handleAddToCart} ></Product>
                    )
                }
            </div>
            <div className="cart-container">
                <h1><FontAwesomeIcon icon={faSackDollar}></FontAwesomeIcon> <sup>{totalPrice}</sup></h1>
                <h2>Cart Container</h2>
                <p>Selected items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;