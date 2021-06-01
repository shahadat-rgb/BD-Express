import React from 'react';
import './App.css'
import Footer from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Cart from './Component/Cart/Cart';
import NotFound from './Component/NotFound/NotFound';
function App() {
  return (
   <Router>
      <Navbar></Navbar>
     <Switch>
       <Route exact path ='/'>
          <Home></Home>
       </Route>
       <Route path='/cart'>
          <Cart></Cart>
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