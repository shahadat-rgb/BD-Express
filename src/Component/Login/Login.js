import React, { useState } from 'react';
import firebase from "firebase/app"
import "firebase/auth";
import firebaseConfig from './firebase.config';
import google from '../../photo/google.png'
import vector1 from "../../svgpricture/vector2.jpg"
import { useHistory, useLocation } from 'react-router-dom';
import { CartContext } from '../../App';
import { useContext } from 'react';
import './Login.css'
import { FormGroup } from '@material-ui/core';
firebase.initializeApp(firebaseConfig);


const Login = () => {

    const [newUser,setNewUser]= useState(false)
    // const [confirmPasswordError,setConfirmPasswordError]=useState(false)

    const [user, setUser] = useState({
      isSignedIn: false,
      name: "",
      email: "",
      photoURL: "",
      error:"",
      success:false,
    })

    const [loggedInUser,setLoggedInUser]= useContext(CartContext);
    const history =useHistory()
    const location = useLocation()
  
  let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
   
    const handleGoogleSignIn =()=>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider).then(function(result) {
             const {displayName,email} =result.user;
             const signInUser={name:displayName,email}
                 setLoggedInUser(signInUser);
                 history.replace(from);
                 
      }).catch(function(error) {
        //    var errorCode = error.code;
        //    var errorMessage = error.message;
       });

    }

     const [haveAccount, setHaveAccount]=useState(false)
    // const [user,setUser]=useState({})
    const [submiter, setSubmiter]=useState("")
    const [emailChecker,setEmailChecker]=useState(true)

    
 
            const submitHandler=(event)=>{
                setSubmiter(event.target.name)
            }
        

            const formHandler=(event)=>{

                event.preventDefault()
                const emailCheck=RegExp(/\S+@\S+\.\S+/).test(user.email)
                
              setEmailChecker(emailCheck)
    
                        if(submiter=="signin" && emailCheck){
                        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                        .then(res=>{
                              const newUserInfo={ ...user}
                               newUserInfo.error='';
                               newUserInfo.success=true;
                               setUser(newUserInfo)
                               setLoggedInUser(newUserInfo);
                               history.replace(from)
                        })
                        .catch(error => {
                          const newUserInfo={ ...user}
                           newUserInfo.error=error.message;
                           newUserInfo.success=false;
                            setUser(newUserInfo)
                        
                        })
                }
    
    
                if(submiter=="signup" && emailCheck){
                    if(user.password==user.confirmPassword){
                        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                        .then(res=>{
                             const newUserInfo={ ...user} 
                               newUserInfo.error='';
                               newUserInfo.success=true;
                               setUser(newUserInfo)
                              
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
  
  
   return (
            <div className='container '>
                <div className="row align-items-center text-center">
         <div className="col-md-5 form_style">
            <form className="" onSubmit={formHandler}>
            <h4 className='mb-4'>Registration form</h4>

                <FormGroup style={{width:"100%"}}>
                 
                {
                    haveAccount ? ""
                        :<input type="text" className="inputbox " onBlur={(event)=>setUser({...user,username:event.target.value})} placeholder="Enter user name" />
                      
                } <br /> 

                {
                    emailChecker ? <input type="email" className="inputbox" onBlur={(event)=>setUser({...user,email:event.target.value})} placeholder="Enter email address" required/>
    
                    : <input type="email" className="inputbox" style={{border:"1px solid red", borderRadius:"5px"}} onBlur={(event)=>setUser({...user,email:event.target.value})} onClick={()=>setEmailChecker(true)} placeholder="Enter email address" required/>
                } <br /> 
    
    
                    <input type="password" className="inputbox" onBlur={(event)=>setUser({...user,password:event.target.value})} onClick={(event)=>setUser({...user,passValid:""})} placeholder="Enter user password" required/>
                   
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

                <div className="text-center">
                  
                  <button  onClick={handleGoogleSignIn} class="btn btn-primary w-100">
                            <img style={{ height: "40px", width: "40px", }} src={google} alt="" />
                            <span>Sign in Google</span>
                  </button>
                </div>
            
            </form> 

                 </div>
                 <div className="col-md-7">
                    <img style={{width:"100%"}} src={vector1} alt="" />
                 </div>
                </div>
                
           </div>


    );
};

export default Login;






        