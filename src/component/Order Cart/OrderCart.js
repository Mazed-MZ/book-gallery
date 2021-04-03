import React from 'react';

const OrderCart = (props) => {

    const {name, writter, price} = props.orderCart;
    return (
        <div>
            <h1>{name}</h1>
            <h1>{price}</h1>
        </div>
    );
};

export default OrderCart;