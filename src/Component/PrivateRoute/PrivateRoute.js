import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CartContext} from '../../App';
 
 const PrivateRoute = ({children,...rest}) => {
     const [loggedInUser,setLoggedInUser]=useContext(CartContext);
 return(  
    <Route
      {...rest}
         render={({ location }) =>
            loggedInUser.email  ? (
              children
       ) : (
                <Redirect
                   to={{
                       pathname: "/login",
                       state: { from: location }
                    }}
                />
             )
          }
       /> 
     );
 };
 
 export default PrivateRoute;

