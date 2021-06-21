import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {imageUrlBase} from '../config';
export default function ProductCard(props) {
    let name=props.name;
    name=name.slice(0,20)
    return (
        <div className='product-card'>
             <img width={50}  src={imageUrlBase+props.imgurl} alt={props.urlKey}/>
             <p>{name}</p>
             <h5>Rs.{props.price}</h5>
             <button><AiOutlineShoppingCart/> Add</button>
        </div>
    )
}
