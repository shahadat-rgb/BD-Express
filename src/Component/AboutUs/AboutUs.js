import React from 'react';
import about from "../../photo/about.jpeg"
import show from "../../photo/show.png"
import mobile from "../../photo/mobile.png"
import bag from "../../photo/bag3.png"
import laptop from "../../photo/laptop.png"
import './AboutUs.css'

const AboutUs = () => {
    return (
         <div className="container">
             <h1 style={{color:"#1f2235",textAlign:"center",marginTop:"40px",marginBottom:"40px"}}>About <span className='text-warning'>Us</span></h1>
              <div className="row mb-4 align-items-center">
               <div className="col-md-4">
                   <img style={{width:"100%",height:"400px"}} src={about} alt=""/>
               </div>
               <div className="col-md-8 ">
                   <h3 className='mb-3 text-warning mt-3'>What do we</h3>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolorem deleniti quia repellat fugiat, iure optio architecto fugit provident labore, laudantium, quos sed ad eum. Praesentium, ipsam? Sunt accusantium esse sint. Minima cupiditate ratione ullam fuga assumenda quaerat eveniet fugit.</p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eum, laboriosam iure quibusdam laborum enim recusandae qui eveniet vel incidunt. Tempore consequatur fugit corrupti quibusdam exercitationem voluptatem vel, asperiores tenetur.</p>
                    <div className="row" style={{marginTop:"50px"}}>
                       <div className="col-md-3">
                          <div className="card cardItem">
                             <img style={{height:"100px",margin:"0 auto"}} src={show} alt="" />
                          </div>
                      </div>

                        <div className="col-md-3">
                        <div className="card cardItem">
                              <img style={{height:"100px",margin:"0 auto",}} src={mobile} alt="" />
                          </div>
                        </div>

                        <div className="col-md-3">
                        <div className="card cardItem">
                              <img style={{height:"100px",margin:"0 auto"}}  src={bag} alt="" />
                          </div>
                        </div>

                        <div className="col-md-3">
                        <div className="card cardItem">
                              <img style={{height:"100px",margin:"0 auto"}}  src={laptop} alt="" />
                          </div>
                        </div>

                    </div>
                </div>
              </div>
          
        </div>
    );
};

export default AboutUs;