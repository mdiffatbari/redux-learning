import React from 'react';

const Product = (props) => {
    const { addToCart, product } = props;
    return (
        <div style = {{border: '1px solid gray', padding: '10px', margin: '20px'}}>
            <h1>{ product.name }</h1>
            <button onClick={() => addToCart(product.id)}>Add Item</button>
        </div>
    );
};

export default Product;