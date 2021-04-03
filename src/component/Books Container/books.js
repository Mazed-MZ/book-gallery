import React from 'react';
import {useState} from 'react';
import './books.css';
import { Link } from 'react-router-dom';

const books = (props) => {

    const {name, writter, image, price} = props.bookInfo;
    

    return (
        <div className='cart'>
            <img src={image} alt=""/>
           <div className='cart-div'>
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{writter}</p>
                <h2>${price}</h2>
                <Link to="/order" class="btn btn-primary">Buy Now</Link>
           </div>
        </div>
    );
};

export default books;