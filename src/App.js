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
import Checkout from './Component/Checkout/Checkout';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

export const CartContext = createContext()
function App() {
  const [cartCount,setCartCount]= useState([])
  const [loggedInUser,setLoggedInUser] = useState({})
  return (
    <CartContext.Provider value={[loggedInUser,setLoggedInUser]}>
   <Router>
      <Navbar cartCount={cartCount}></Navbar>
     <Switch>
       <Route exact path ='/'>
          <Home></Home>
       </Route>

       <Route path ='/home'>
          <Home></Home>
       </Route>

       <Route path='/login'>
             <Login></Login>
        </Route>

       <PrivateRoute  path='/review'>
           <Review cartCount={cartCount} setCartCount={setCartCount}></Review>
       </PrivateRoute>

       <Route path='/productDetails/:productId'>
           <ProductDetails ></ProductDetails>
       </Route>

       <Route path='/checkout'>
               <Checkout></Checkout>
       </Route>

       <Route path='*'>
          <NotFound></NotFound>
       </Route>
     </Switch>
     <Footer></Footer>
   </Router>
</CartContext.Provider>
  );
}

export default App;                    





                                  