const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51J2XWDKliSXJZLsm8MsEEMooDmih1dP5ZCIyxL4x8onQ7Qor2kOESDfIDeoZpeWq4Scua99xa9gjxWtmTny21y5H00h3qtcALo");
const {v4: uuidv4} = require("uuid")
const app =express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res) => {
    res.send("welcome into react shop project")
});

app.post("/checkout", async (req,res) =>{
       let error; 
       let status;
       try {
           const {product,token} = req.body;
           const customer = await stripe.customers.create({
                email:token.email,
                source: token.id
           })
           const key = uuidv4();
           const charge = await stripe.charges.create({
             
               amount: product.price * 100,
               currency :"usd",
               customer : customer.id,
               receipt_email: token.email,
               description: "All Products Description",
               shipping :{
                   name: token.card.name,
                   address :{
                       line1 : token.card.address_line1,
                       line2 : token.card.address_line2,
                       city : token.card.address_city,
                       country : token.card.address_country,
                       postal_code : token.card.address_zip,
                   }

               }
            

           },

           {idempotencyKey:key});
           status ="success";

       } catch (error) {
        status =  "error";
        console.log(error);
        
       }
       res.json({error,status})
} )

app.listen(8000)