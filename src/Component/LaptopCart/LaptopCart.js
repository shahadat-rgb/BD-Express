import React from 'react';
import { useHistory } from 'react-router';

const LaptopCart = (props) => {
    const {img,name,price,status,id} =props.laptop;
    const history = useHistory()
    const handleClick=()=>{
        history.push(`/productDetails/${id}`)
    }
   
    return (
        <div className='container mb-4'>
            <div className="card pd-img">
                <img onClick={handleClick} src={img} alt="" />
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

export default LaptopCart;