import React from 'react';

const PriceSection = (props) => {
    const cart = props.cart
    const totalPrice = cart.reduce((total,product)=> total + product.price, 0)
    const quantity = cart.reduce((totalQuantity,quantity)=>  totalQuantity + quantity.quantity,0)
    return (
        <div>
             <div className="card">
                    {/* <div className="card-title bg-primary text-white"> */}
                          <h4 className='text-center card-title text-white bg-primary p-2'>Summary</h4>
                    {/* </div> */}
                      <div className="card-body bg-warning  ">
                          <p><b>Order Item : <strong className='float-right'> {cart.length}</strong> </b></p>
                          <p><b>Product Quantity : <strong className='float-right'> {quantity}</strong> </b></p>

                          <p><b>Total Price : <strong className='float-right'>{(totalPrice).toFixed(2)}</strong> </b></p>
                          <button className='btn btn-white w-100'>Checkout</button>
                      </div>
                  </div>
        </div>
    );
};

export default PriceSection;