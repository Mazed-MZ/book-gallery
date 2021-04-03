import React from 'react';
import { useEffect,useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import OrderCart from '../Order Cart/OrderCart';

const Order = () => {

    const [cart,setCart] = useState();
    const [book, setBooks] = useState([]);

    useEffect(()=>{
        fetch(`https://api.mocki.io/v1/f00d5e98`)
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = book.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        setCart(cartProducts);
    });

    console.log(cart)
    
    return (
            <div>
                <h1>Order page</h1>
            </div>
    );
};

export default Order;