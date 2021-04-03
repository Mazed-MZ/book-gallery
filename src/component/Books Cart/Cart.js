import React from 'react';
import { useState, useEffect } from 'react';
import fakeData from '../../fakeData.json';
import Book from '../Books Container/books';
import './Cart.css';

const Cart = () => {

    const [book, setBooks] = useState([]);

    useEffect(()=>{
        fetch(`https://api.mocki.io/v1/f00d5e98`)
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

        
    // const bookName = book.map(title => title.name);
    // const bookWritter = book.map(person => person.writter);
    // const bookPrice = book.map(item => item.price);
    // const bookImage = book.map(img => img.image);
        
    
    const handleAddProduct = () => {
        fetch(`http://localhost:5000/addItems`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })}
        

    return (
        <div>
            {
                book.map(bookData => <Book bookInfo = {bookData}></Book>)
            }
            
        </div>
    );
};

export default Cart;