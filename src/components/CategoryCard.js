import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

import {imageUrlBase,appBaseUrl} from '../config'
export default function CategoryCard(props) {
    console.log(props)
    var itemList=props.list;
    console.log(itemList)
    
    return (
        <OwlCarousel  className={`owl-theme `} center={true} loop={false} nav={false} items={5} dots={false}>
             {
                 itemList.map((item,key)=>(
                   <div className='category-card item'>
                        <img width={150} height={150} src={imageUrlBase+item.imageUrl} alt={item.alt} />
                        <br/>
                        <a href={appBaseUrl+item.catName}>{item.catName}</a>
                   </div>
                  ))
             }
        </OwlCarousel>
       
    )
}
