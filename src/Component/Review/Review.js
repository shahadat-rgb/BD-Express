import React, { useEffect} from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import { fakeData } from '../FakeData/FakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = (props) => {
    const {cart,setCart} = props;
    const removeCart = (productKey)=>{
        const newCart = cart.filter(pd=> pd.id !== parseInt(productKey))
        setCart(newCart)
        removeFromDatabaseCart(productKey)
    }

    useEffect(()=>{
        const saveCard = getDatabaseCart();
        const productKeys =Object.keys(saveCard)
        const cartProduct = productKeys.map(id => {
            const product = fakeData.find(pd =>pd.id === parseInt(id))
            product.quantity= saveCard[id];
            return product;  
        })
        setCart(cartProduct)
        
    },[]) 
    return (
        <div>
             <div className="row">
               <div className="col-md-8">
               {
                cart.map(pd=> <ReviewItem removeCart={removeCart} product={pd} key={pd.id}></ReviewItem>)
            }
               </div>
               <div className="col-md-4">
                   <h3 className="text-center">Pyment history</h3>
               </div>
             </div>
          </div>
    );
};

export default Review;