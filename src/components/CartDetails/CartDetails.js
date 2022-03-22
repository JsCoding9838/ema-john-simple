import React from 'react';

const CartDetails = (props) => {
    // console.log(props.product);
    const {name} = props.product;
    return (
        <div>
            
            <p>{name}</p>
        
        </div>
    );
};

export default CartDetails;