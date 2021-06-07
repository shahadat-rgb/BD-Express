import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { addToDatabaseCart } from '../../utilities/databaseManager';
// import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { fakeData } from '../FakeData/FakeData';
import './ProductDetails.css'
const ProductDetails = () => {
    // const {setCartAmount} = props;
    const {productId} = useParams();
    const [products,setProducts] =useState({});
    const {img,name,price} = products
       useEffect(() => {
        const selectedProduct = fakeData.find((productDetails) => productDetails.id == productId );
        setProducts(selectedProduct);
      }, [productId]);
     
  
      const [cart,setCart] = useState([])

      const handleCart = (cartProduct) => {
          const newCart =[...cart,cartProduct]
          setCart(newCart)
          const sameProduct = newCart.filter(pd=> pd.id === parseInt(cartProduct.id))
          const count = sameProduct.length;
          addToDatabaseCart(cartProduct.id,count)
      }

      

    return (
         <div className="container">
            <div className="row align-items-center mb-4">
                <div className="col-md-5">
                  <h1>{name}</h1>
                   <p className='text-justify' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, aspernatur asperiores odit eligendi explicabo aliquid? Vitae, repellat animi quisquam cupiditate dolorem nisi fugiat maxime vel temporibus eaque mollitia, nesciunt ipsam.</p>
                  <h4 className='text-secondary text-white'>${price}</h4>
                  <button onClick={()=>handleCart(products)} className="addToCart"><FontAwesomeIcon icon={faShoppingCart} /> <span>Add To Cart</span></button>
                </div>
                <div className="col-md-7">
                    <img style={{width:"100%"}}  src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;