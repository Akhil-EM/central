import React, { Component } from 'react'
import Badge from './Badge';
import { AiOutlineHeart } from 'react-icons/ai';
import {FiShoppingBag} from 'react-icons/fi'
import {FaRegUser} from 'react-icons/fa'
import '../assets/css/header.css';
class Header extends Component {
    render() {
        let  logoUrl=process.env.PUBLIC_URL+'/img/Centreal_Bazaar.png';
        return (
             <div className='app-base-bg p-2  d-flex justify-content-between'>
                <div className='d-flex '>
                   <img src={logoUrl} alt='logo' height={50}/>
                    <div className='d-none d-lg-block'>
                        <form className='search-container '>
                          <input className="search-input" type="search" placeholder="Search Inside 15,000 products....."/>
                          <button className="search-btn" type="submit">Search</button>
                        </form> 
                    </div>
                </div>
                <div className='d-flex align-items-center margin  justify-content-between width-250px'>
                    <Badge count={5} ><AiOutlineHeart className="icon "/></Badge>
                    <Badge count={2}><FiShoppingBag className="icon"/></Badge>
                    <button className="icon-btn text-light"><FaRegUser /></button>
                    <button className="icon-btn text-light"><h5 className="mt-3" >Login</h5></button>
                </div>
             </div>
        )
    }
}

export default  Header