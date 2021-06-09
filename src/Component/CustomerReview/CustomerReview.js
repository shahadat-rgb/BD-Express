import React from 'react';
import './CustomerReview.css'
import customer1 from "../../customer/customer1.jpg"
import customer2 from "../../customer/customer2.jpg"
import customer3 from "../../customer/customer3.jpg"
import customer4 from "../../customer/customer4.jpg"
import customer5 from "../../customer/cusotmer5.jpg"
import customer6 from "../../customer/customer6.jpg"
import customer7 from "../../customer/customer7.jpg"
import customer8 from "../../customer/cusotmer8.jpg"

const CustomerReview = () => {

    
    return (
      <div className="container">
        <h1 style={{marginTop:"60px",marginBottom:"50px",textAlign:"center"}}>What our <span className="text-warning"> Customer Says</span></h1>
        <div className="row mb-5">
          <div className="col-md-3">
            <div className="card customerItem">
              <div className="d-flex align-items-center bg-warning text-white p-2">
                <img className="mx-3" src={customer1} alt="" />
                <div>
                  <h6 className=""><b>Willeam benoport</b></h6>
                  <p className="m-0">20-6-2021</p>
                </div>
              </div>
              <div className="card-body">
                  {/* <h5>Mackbook</h5> */}
                 <p className="text-secondary mt-2 text-justify">Lorem ipsum dolor sit amet but a consectetu adipisicing elit. Ipsa nulla provident eligendi error architecto suscipit?</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
          <div className="card customerItem">
              <div className="d-flex align-items-center bg-warning text-white p-2">
                <img className="mx-3" src={customer2} alt="" />
                <div>
                  <h6 className=""><b>Monalis Begum </b></h6>
                  <p className="m-0">13-7-2021</p>
                </div>
              </div>
              <div className="card-body">
                  {/* <h5>Mackbook</h5> */}
                 <p className="text-secondary mt-2 text-justify">Lorem ipsum dolor sit amet but a consectetu adipisicing elit. Ipsa nulla provident eligendi error architecto suscipit?</p>
              </div>
            </div>
          </div>


          <div className="col-md-3">
          <div className="card customerItem">
              <div className="d-flex align-items-center bg-warning text-white p-2">
                <img className="mx-3" src={customer3} alt="" />
                <div>
                  <h6 className=""><b>David hoccy</b></h6>
                  <p className="m-0">25-6-2021</p>
                </div>
              </div>
              <div className="card-body">
                  {/* <h5>Mackbook</h5> */}
                 <p className="text-secondary mt-2 text-justify">Lorem ipsum dolor sit amet but a consectetu adipisicing elit. Ipsa nulla provident eligendi error architecto suscipit?</p>
              </div>
            </div>
          </div>


          <div className="col-md-3">
          <div className="card customerItem">
              <div className="d-flex align-items-center bg-warning text-white p-2">
                <img className="mx-3" src={customer4} alt="" />
                <div>
                  <h6 className=""><b>henry gai</b></h6>
                  <p className="m-0">18-4-2021</p>
                </div>
              </div>
              <div className="card-body">
                  {/* <h5>Mackbook</h5> */}
                 <p className="text-secondary mt-2 text-justify">Lorem ipsum dolor sit amet but a consectetu adipisicing elit. Ipsa nulla provident eligendi error architecto suscipit?</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-3">
            <div className="card customerItem">
              <div className="d-flex align-items-center bg-danger text-white p-2">
                <img className="mx-3" src={customer5} alt="" />
                <div>
                  <h6 className=""><b>Nafisa Tabassom</b></h6>
                  <p className="m-0">30-5-2021</p>
                </div>
              </div>
              <div className="card-body">
                  {/* <h5>Mackbook</h5> */}
                 <p className="text-secondary mt-2 text-justify">Lorem ipsum dolor sit amet but a consectetu adipisicing elit. Ipsa nulla provident eligendi error architecto suscipit?</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
          <div className="card customerItem">
              <div className="d-flex align-items-center bg-danger text-white p-2">
                <img className="mx-3" src={customer6} alt="" />
                <div>
                  <h6 className=""><b>Monalisa Begume </b></h6>
                  <p className="m-0">28-5-2021</p>
                </div>
              </div>
              <div className="card-body">
                  {/* <h5>Mackbook</h5> */}
                 <p className="text-secondary mt-2 text-justify">Lorem ipsum dolor sit amet but a consectetu adipisicing elit. Ipsa nulla provident eligendi error architecto suscipit?</p>
              </div>
            </div>
          </div>


          <div className="col-md-3">
          <div className="card customerItem">
              <div className="d-flex align-items-center bg-danger text-white p-2">
                <img className="mx-3" src={customer7} alt="" />
                <div>
                  <h6 className=""><b>Montahara mim</b></h6>
                  <p className="m-0">27-6-2021</p>
                </div>
              </div>
              <div className="card-body">
                  {/* <h5>Mackbook</h5> */}
                 <p className="text-secondary mt-2 text-justify">Lorem ipsum dolor sit amet but a consectetu adipisicing elit. Ipsa nulla provident eligendi error architecto suscipit?</p>
              </div>
            </div>
          </div>


          <div className="col-md-3">
          <div className="card customerItem">
              <div className="d-flex align-items-center bg-danger text-white p-2">
                <img className="mx-3" src={customer8} alt="" />
                <div>
                  <h6 className=""><b>jhnana geli</b></h6>
                  <p className="m-0">18-4-2021</p>
                </div>
              </div>
              <div className="card-body">
                  {/* <h5>Mackbook</h5> */}
                 <p className="text-secondary mt-2 text-justify">Lorem ipsum dolor sit amet but a consectetu adipisicing elit. Ipsa nulla provident eligendi error architecto suscipit?</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    );
};

export default CustomerReview;