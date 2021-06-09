import React, { useEffect } from 'react';
import { useState } from 'react';
import { fakeData } from '../FakeData/FakeData';
import LaptopCart from '../LaptopCart/LaptopCart';
import MobileCart from '../MobileCart/MobileCart';
import ProductCart from '../ProductCart/ProductCart';
import reload from "../../photo/reload.gif"
const Product = () => { 
    const [product,setProduct] = useState([])


 
    const [mainProduct,setManiProduct] = useState([]);
    const [laptop,setLaptop] = useState([]);
    const [mobile,setMobile] = useState([]);
  
    const [mainShowProduct,setManiShowProduct] = useState(true);
    const  [showLaptop,setShowLaptop]  = useState(false);
    const [showMobile,setShowMobile] = useState(false);

    useEffect(()=>{
            const showProductItem = fakeData.filter(pdCurrentElement =>
                pdCurrentElement.catagori === "product");
                setManiProduct(showProductItem)
                setProduct(fakeData)
    },[])

    const handleProduct = () => {
        const  productItem = fakeData.filter(currentProduct=> currentProduct.catagori === "product");
         setManiProduct(productItem)
    
        setShowLaptop(false);
        setManiShowProduct(true);
        setShowMobile(false);
      }
     
    const handleLaptop = () => {
        const  laptop = fakeData.filter(currentLaptop => currentLaptop.catagori === "laptop");
        setLaptop(laptop)
    
        setShowLaptop(true);
        setManiShowProduct(false);
        setShowMobile(false);
      }

      const handleMobile = () => {
        const mobile= fakeData.filter(currentMobile =>  currentMobile.catagori === "mobile");
        setMobile(mobile)

        setShowLaptop(false);
        setManiShowProduct(false);
        setShowMobile(true);
      }
   
   
    return (
   <>
       
       <div className="ml-3 mt-5 mb-5 text-center">
          <h1 style={{color:"#1f2235",textAlign:"center",marginTop:"20px",marginBottom:"30px"}}> <span className='text-warning'>Our</span> Product</h1>
             <button className='btn btn-outline-success' onClick={handleProduct}><b>Other</b></button> <button className='btn btn-outline-primary'  onClick={handleLaptop}><b>Laptop</b></button>   <button className='btn btn-outline-danger'  onClick={handleMobile}><b>Mobile</b></button> 
         </div>
    
             {
                 mainProduct.length > 0 ?
                <div id="card-header">
                 {
                   mainShowProduct &&
                   mainProduct.map(pd=> <ProductCart  product={pd} key={pd.id}></ProductCart>)
                 } 
                  </div>
                 : <img src={reload} alt="" />
                
               }
               <div id="card-header">
               {
                     showLaptop &&
                    laptop.map(lpt => <LaptopCart laptop={lpt} key={lpt.id}></LaptopCart>)
               }
               </div>
               
               <div id="card-header">
               {    
                     showMobile &&
                     mobile.map(mb=> <MobileCart mobile={mb} key={mb.id}></MobileCart>)
               }
               </div>
        
        </>
    );
};

export default Product;