import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import delivary1 from "../../delivary/delivary1.png"
import delivary2 from "../../delivary/delivary2.png"
import delivary3 from "../../delivary/delivary3.png"
import './Delivary.css'
const Delivary = () => {
    return (
        <div className='container'>
            <h1 className='text-center' style={{marginTop:"50px",marginBottom:"50px"}}>Our <span className='text-warning'>Delivary</span>Man</h1>
            <div className="row mb-5">
                <div className="col-md-4 delivary">
                     <img style={{height:"300px"}} src={delivary1} alt="" />
                     <h3 className='text-warning'>DM. Najmul haq</h3>
                     <h5 className="text-success ml-3"> <FontAwesomeIcon icon={faPhoneAlt}> </FontAwesomeIcon>  +88704745454</h5>
                </div>
                <div className="col-md-4 delivary">
                <img style={{height:"300px"}} src={delivary2} alt="" />
                     <h3 className='text-warning'>DM. Sultan hanif</h3>
                     <h5 className="text-success ml-3"> <FontAwesomeIcon icon={faPhoneAlt}> </FontAwesomeIcon>  +88798577854</h5>
                </div>
                <div className="col-md-4 delivary">
                <img style={{height:"300px"}} src={delivary3} alt="" />
                     <h3 className='text-warning'>DM. Miycel patowary</h3>
                     <h5 className="text-success ml-3"> <FontAwesomeIcon icon={faPhoneAlt}> </FontAwesomeIcon>  +88458349058</h5>
                </div>
            </div>
        </div>
    );
};

export default Delivary;