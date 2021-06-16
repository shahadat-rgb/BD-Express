import React, { useState } from 'react';
import firebase from "firebase/app"
import "firebase/auth";
import firebaseConfig from './firebase.config';
import google from '../../photo/google.png'
import vector1 from "../../svgpricture/vector2.jpg"
import { useHistory, useLocation } from 'react-router-dom';
import { CartContext } from '../../App';
import { useContext } from 'react';
import facebook from "../../photo/facebook.png"
import './Login.css'
import { FormGroup } from '@material-ui/core';
const Login = () => {

// all useState hooks of login page

const [loggedInUser,setLoggedInUser]= useContext(CartContext);
const [haveAccount, setHaveAccount]=useState(false)
const [user,setUser]=useState({})
const [submiter, setSubmiter]=useState("")
const [emailChecker,setEmailChecker]=useState(true)

// login korar por user k kotai neye jaby setar pathname

const history =useHistory()
const location = useLocation()
let { from } = location.state || { from: { pathname: "/" } };


//  ekany firebase k initialization korci.

if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
 }else{
     firebase.app()
 }

  
//  Google sign in handler

    const handleGoogleSignIn =()=>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider).then(function(result) {
             const {displayName,email,photoURL} =result.user;
             const googleUser={username:displayName,email,photoURL}
                 setLoggedInUser(googleUser);
                 history.replace(from);
                 
      })
    }

//   Facebook sign in Handler

    const handleFacebookSignIn=()=>{
        const fbProvider= new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider).then(function(result) {
           const {displayName,email} =result.user;
           const fbUser={username:displayName,email}
               setLoggedInUser(fbUser);
               history.replace(from)
               console.log("user info", result.user)
               
    })

}

    
//  all input er name aksaty user korar jonno ai method.

            const submitHandler=(event)=>{
                setSubmiter(event.target.name)
            }
        
// onsumbit use korci ai form er moddy jaty form er moddy email,password,name,etc liky submit korty pari.

    const formHandler=(event)=>{

        event.preventDefault()
        const emailCheck=RegExp(/\S+@\S+\.\S+/).test(user.email) 
            setEmailChecker(emailCheck)


 // user porby sign up kory pelly then sign er korar jonno ai method use korci.

               if(submiter=="signin" && emailCheck){
                          firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                        .then(res=>{
                              const newUserInfo={...user}
                               newUserInfo.error='';
                               newUserInfo.success=true;
                               setUser(newUserInfo)
                               setLoggedInUser(newUserInfo);
                               console.log( "update user name",  res.user);
                               history.replace(from)
                        })
                        .catch(error => {
                          const newUserInfo={ ...user}
                           newUserInfo.error=error.message;
                           newUserInfo.success=false;
                            setUser(newUserInfo)
                        
                        })
                }
    
//  user jodi noton hoi taholy sign up korar jonno ai method

                if(submiter=="signup" && emailCheck ){
                    if(user.password==user.confirmPassword){
                        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                        .then(res=>{
                             const newUserInfo={ ...user} 
                               newUserInfo.error='';
                               newUserInfo.success=true;
                               setUser(newUserInfo)
                               updateName(user.username)
                              
                            })
                             .catch(error => {
                              const newUserInfo={ ...user}
                               newUserInfo.error=error.message;
                               newUserInfo.success=false;
                                setUser(newUserInfo)
                            
                            })
                            setHaveAccount(true)
                     }else{
                         setUser({...user,passConfError:"doesn't match password"})
                     }
                    }
              
            }

// user er name update korar jonno ai method 

    const updateName = name =>{
        const user = firebase.auth().currentUser;

            user.updateProfile({
            displayName: name
            }).then(() => {
         console.log("user name updated successfully");
            // ...
            }).catch((error) => {
            // An error occurred
            // ...
            });  
    }
  
return (
            
<div className='container'>
   <div className="row align-items-center">
         <div className="col-md-5 form_style">

            <form  onSubmit={formHandler}>
               <h4 className='mb-4 text-center'>Registration form</h4>

                <FormGroup style={{width:"100%"}}>
                        {
                            haveAccount ? ""
                                :<input type="text" className="inputbox" onBlur={(event)=>setUser({...user,username:event.target.value})} placeholder="Enter user name" />
                            
                        } <br/> 

                        {
                            emailChecker ? <input type="email" className="inputbox" onBlur={(event)=>setUser({...user,email:event.target.value})} placeholder="Enter email address" required/>
            
                            : <input type="email" className="inputbox" style={{border:"1px solid red", borderRadius:"5px"}} onBlur={(event)=>setUser({...user,email:event.target.value})} onClick={()=>setEmailChecker(true)} placeholder="Enter email address" required/>
                        } <br /> 
            
            
                        {
                            <input type="password" className="inputbox" onBlur={(event)=>setUser({...user,password:event.target.value})}  placeholder="Enter user password" required/>
                        
                        }
                        
                        <br />
                        { 
                            haveAccount ? ""
                                :<input type="password" className="inputbox" onBlur={(event)=>setUser({...user,confirmPassword:event.target.value})} onClick={(event)=>setUser({...user,passConfError:""})} placeholder="Confirm your password" required/>
                            
                        } <br />

                        {
                            user.passConfError && <p style={{color:"red", textAlign:"center"}}>{user.passConfError}</p>
                        }
                        
                        {
                            haveAccount ? <input onClick={submitHandler} className='btn btn-warning login' name="signin" type="submit" value="Signin"/>
                            : <input onClick={submitHandler} name="signup" className='btn btn-warning login' type="submit"  value="Signup"/>
                        } 
            
                        {
                            haveAccount ? <p onClick={()=>setHaveAccount(false)} style={{color:"#DC143C", cursor:"pointer",marginTop:"20px", textAlign:"center"}}>Don't have any account</p>
            
                            : <p onClick={()=>setHaveAccount(true)} style={{color:"#DC143C",cursor:"pointer",marginTop:"20px", textAlign:"center"}}>Already have an account</p>
                        }

                        <p style={{ color: "red" }}>{user.error}</p>
                        {user.success && <p style={{ color: "green",textAlign:"center" }}> User created successfully,please click the sign in btn</p>}
          
            </FormGroup>
       </form> 
                <div className="text-center"> 
                  
                       <button  onClick={handleGoogleSignIn} class="btn btn-danger  mr-2">
                                <img style={{height:"40px" }} src={google} alt="" />
                                <span>Sign in Google</span>
                       </button>
                        <button  onClick={handleFacebookSignIn} class="btn btn-primary">
                                <img style={{height:"40px" }} src={facebook} alt="" />
                                <span>Sign in facebook </span>
                        </button>
                   </div>
              </div>

                <div className="col-md-7">
                    <img style={{width:"100%"}} src={vector1} alt="" />
              
               </div>
            </div>
         </div>


    );
};

export default Login;






        