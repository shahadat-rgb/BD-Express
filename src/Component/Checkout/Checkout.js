import { Link } from '@material-ui/core';
import React from 'react';
import wow from "../../delivary/wow.jpg"
const Checkout = () => {

    return (
        <div className='container mt-5 mb-5'>
          <div className="row align-items-center">
            <div className="col-md-7">
        
                 <img style={{width:"100%"}} src={wow} alt="" />
            
              </div>
                <div className="col-md-5 mt-3 text-center">
                    <h4 className='text-justify text-success'><span className="text-danger"> WOW ! you have payment successfully .</span><br /> <br /> Now you can continue your shopping. And finally thank you so much for buying of my company product.Best of luck. Have a good day.</h4>
                 </div>
            </div>
           
        </div>
    );
};

export default Checkout;