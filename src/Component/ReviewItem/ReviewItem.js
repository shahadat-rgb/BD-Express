import React from 'react';

const ReviewItem = (props) => {
    const {img,name,price,quantity,id}  = props.product
    const removeCart = props.removeCart
    const borderStyle={
        borderBottom:"1px solid gray",
        borderRight:"1px solid gray",
    }
    return (
        <div className='container'>
           <div style={borderStyle} className="row align-items-center">
               <div className="col-md-5">
                  <img style={{width:"100%",padding:"10px"}} src={img} alt="" />
               </div>
               <div className="col-md-7 text-center">
                  <h1 className='mb-3'>{name}</h1>
                   <p>Quantity : {quantity}</p>
                   <h5>${price}</h5>
                   <button onClick={()=>removeCart(id)} className="mb-4 mt-2 addToCart">Remove</button>
               </div>
           </div>
        </div>
    );
};

export default ReviewItem;