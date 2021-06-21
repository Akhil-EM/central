import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

import ProductCard from './ProductCard';
export default function HotDealBanner(props) {
    console.log(props)
    var itemList=props.list;
    console.log(itemList)

    return (
        <OwlCarousel  className={`owl-theme `} center={true} loop={false} nav={false} items={5} dots={false}>
             {
                 itemList.map((item,key)=>(
                    <ProductCard className='item' key={key} price={item.unitPrice} name={item.prName} imgurl={item.imageUrl} alt={item.urlKey} key={key}/>
                  ))
             }
        </OwlCarousel>
       
    )
}

