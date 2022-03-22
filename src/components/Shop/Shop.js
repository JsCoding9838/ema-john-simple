import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react';
import CartDetails from '../CartDetails/CartDetails';
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
                <h2>Cart Summary</h2>
                <p>Selected items: {cart.length}</p>
                <div>
                    <h2>Cart Details</h2>
                    {
                        cart.map(product => <CartDetails product= {product} key={product.id}></CartDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;