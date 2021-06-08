import React, { createContext, useState } from 'react';
import './App.css'
import Footer from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import ProductDetails from './Component/ProductDetails/ProductDetails';
import Review from './Component/Review/Review';

export const CartContext = createContext();
function App() {
  const [cart,setCart]= useState([])
  return (
   <Router>
      <Navbar cart={cart}></Navbar>
     <Switch>
       <Route exact path ='/'>
          <Home></Home>
       </Route>

       <Route path ='/home'>
          <Home></Home>
       </Route>

       <Route path='/review'>
         <Review cart={cart} setCart={setCart}></Review>
        </Route>
       <Route path='/productDetails/:productId'>
           <ProductDetails ></ProductDetails>
       </Route>
       <Route path='*'>
          <NotFound></NotFound>
       </Route>
     </Switch>
     <Footer></Footer>
   </Router>
  );
}

export default App;                    





                                  