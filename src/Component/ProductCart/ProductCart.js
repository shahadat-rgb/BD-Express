import React from 'react';
import {useHistory } from 'react-router-dom';
import './ProductCart.css'
const ProductCart = (props) => {
    const {img,name,price,status,id} =props.product;
    const history = useHistory()
    const handleClick=()=>{
        history.push(`/productDetails/${id}`)
    }
   
    return (
        <div className='container mb-5'>
            <div className="card">
                <img style={{width:"100%",height:"200px"}} src={img} alt="" />
                <div className="card-body text-center">
                  <h3>{name}</h3>
                  <h6 className="text-secondary">${price}</h6>
                 </div>
                   <button className="detailsBtn" onClick={handleClick} >More Details </button>
            
               {status==="hot" ? <div className="hot"> hot </div> : ''}
               {status==="new" ? <div className="new"> new </div> : ''}
            </div>
        </div>
    );
};

export default ProductCart;