import React from 'react';
// import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const PriceSection = (props) => {
    const history = useHistory()
    const cart = props.cart
    const totalPrice = cart.reduce((total,product)=> total + product.price, 0)
    const quantity = cart.reduce((totalQuantity,quantity)=>  totalQuantity + quantity.quantity,0)

    const handleToken = async (token) =>{
          const product = {name :"All Products", price: totalPrice}
          const response = await axios.post("http://localhost:8000/checkout", {
                product,
                token
          });
         const {status} =response.data;
         if (status === "success" ) {
             history.push("/checkout")
         }
    }


    return (
        <div>
             <div className="card">
                          <h4 className='text-center card-title text-white bg-primary p-2'>Summary</h4>
                      <div className="card-body bg-warning  ">
                          <p><b>Order Item : <strong className='float-right'> {cart.length}</strong> </b></p>
                          <p><b>Product Quantity : <strong className='float-right'> {quantity}</strong> </b></p>

                          <p><b>Total Price : <strong className='float-right'>{(totalPrice).toFixed(2)}</strong> </b></p>
                        
                            <div className="stripe_section text-center">
                                <StripeCheckout
                                     stripeKey= "pk_test_51J2XWDKliSXJZLsmJUmAgKfDOY5JdEo8xDx28pdy5w2ZFqFnGq0KeVk3NQt83xt7WJU2cpuhdNh6tEipEfUUVxJI00MBZeSy9I"
                                     token = {handleToken}
                                     billingAddress
                                     shippingAddress
                                     amount={totalPrice * 100}
                                     name="All Products"

                                >
                                    
                                </StripeCheckout>
                            </div>
                      </div>
                  </div>
        </div>
    );
};

export default PriceSection;