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
        const  productItem = product.filter(currentProduct=> currentProduct.catagori === "product");
         setManiProduct(productItem)
    
        setShowLaptop(false);
        setManiShowProduct(true);
        setShowMobile(false);
      }
     
    const handleLaptop = () => {
        const  laptop = product.filter(currentLaptop => currentLaptop.catagori === "laptop");
        setLaptop(laptop)
    
        setShowLaptop(true);
        setManiShowProduct(false);
        setShowMobile(false);
      }

      const handleMobile = () => {
        const mobile= product.filter(currentMobile =>  currentMobile.catagori === "mobile");
        setMobile(mobile)

        setShowLaptop(false);
        setManiShowProduct(false);
        setShowMobile(true);
      }

      const inputBox ={
        margin:"0 auto",
        border:"2px solid gray",
      }
   const [searchItem,setSearchItem] = useState("")
    return (
   <>
       
       <div className="ml-3 mt-5 mb-5 text-center">
             <button className='btn btn-outline-success' onClick={handleProduct}><b>Other</b></button> <button className='btn btn-outline-primary'  onClick={handleLaptop}><b>Laptop</b></button>   <button className='btn btn-outline-danger'  onClick={handleMobile}><b>Mobile</b></button> 
           <br />  
           <input type="search" onChange={(event)=>{setSearchItem(event.target.value)}} className='mt-3 w-75 p-2 input-box form-control' style={inputBox} placeholder="search your product name" name="" id="" />
         </div>
    
             {
                 mainProduct.length > 0 ?
                <div id="card-header">
                 {
                   mainShowProduct &&
                   mainProduct.filter((val) =>
                      {
                            if (searchItem ==='') {
                                   return val;
                            }else if(val.name.toLowerCase().includes(searchItem.toLowerCase())){
                                   return val;
                            }
                            
                            
                      }
                   ).map(pd=> <ProductCart  product={pd} key={pd.id}></ProductCart>)
                 } 
                  </div>
                 : <   img src={reload} alt="" />
                
               }
               
      
                 <div id="card-header">
                 {
                       showLaptop &&
                      laptop.filter((val) =>
                       {
                            if (searchItem ==='') {
                                   return val;
                            }else if(val.name.toLowerCase().includes(searchItem.toLowerCase())){
                                   return val;
                            }
                        
                            
                      }
                   ).map(lpt => <LaptopCart laptop={lpt} key={lpt.id}></LaptopCart>)
                 }
                 </div>
               
               
               <div id="card-header">
               {    
                     showMobile &&
                     mobile.filter((val) =>
                     {
                           if (searchItem ==='') {
                                  return val;
                           }else if(val.name.toLowerCase().includes(searchItem.toLowerCase())){
                                  return val;
                           }
                           
                     }
                  ).map(mb=> <MobileCart mobile={mb} key={mb.id}></MobileCart>)
               }
               </div>
        
        </>
    );
};

export default Product;