import React from 'react';
import './ProductCart.css'
const ProductCart = (props) => {
    const {img,name,price,status} =props.product;
    return (
        <div className='container mb-5'>
            <div className="card">
                <img style={{width:"100%",height:"200px"}} src={img} alt="" />
                <div className="card-body text-center">
                  <h3>{name}</h3>
                  <h6 className="text-secondary">{price}</h6>
                 </div>
                <button className="addToCart">Add To Cart</button>
               {status==="hot" ? <div className="hot"> hot </div> : ''}
               {status==="new" ? <div className="new"> new </div> : ''}
            </div>
        </div>
    );
};

export default ProductCart;