import React, { useContext, useEffect} from 'react';
import { CartContext } from '../../App';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import { fakeData } from '../FakeData/FakeData';
import PriceSection from '../PriceSection/PriceSection';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = (props) => {    
  const {cartCount,setCartCount}= props;
  const [loggedInUser,setLoggedInUser] = useContext(CartContext)

    const removeCart = (productKey)=>{
        const confermRemoveItem = window.confirm('Do you want to delete this product?')
        if (confermRemoveItem) {
            const newCart = cartCount.filter(pd=> pd.id !== parseInt(productKey))
            setCartCount(newCart)
            removeFromDatabaseCart(productKey)
        }
       
    }

    useEffect(()=>{
        const saveCard = getDatabaseCart();
        const productKeys =Object.keys(saveCard)
        const cartProduct = productKeys.map(id => {
            const product = fakeData.find(pd =>pd.id === parseInt(id))
            product.quantity= saveCard[id];
            return product;  
        })
        setCartCount(cartProduct)
        
    },[]) 
    return (
        <div className='container'>
            <h3 className='text-center mb-3'>welcome back || <span className='text-warning'>{loggedInUser.username}</span></h3>

           {
               cartCount.length >0 ?
               <div className="row">
               <div className="col-md-9">
               {
                cartCount.map(pd=> <ReviewItem removeCart={removeCart} product={pd} key={pd.id}></ReviewItem>)
            }
               </div>
               <div className="col-md-3 mt-3 mb-3">
                   <PriceSection cart={cartCount}></PriceSection>
               </div>
             </div>
             :
             <h1 className='text-center text-danger mt-5'>Your cart is impty ! please go to the home page then click the your favorite product. </h1>
           }
          </div>
    );
};

export default Review;