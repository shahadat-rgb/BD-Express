import React from 'react';
import { Link } from 'react-router-dom';
import notFound from "../../photo/notFound.png"
const NotFound = () => {
    return (
        <div className="container text-center">
            <img style={{width:"80%"}} src={notFound} alt="" />
            <Link to='/'>
               <button className='btn btn-info'>go back</button>
            </Link>
        </div>
    );
};

export default NotFound;