import React from 'react';
import { useState } from 'react';
import { fakeData } from '../FakeData/FakeData';
import ProductCart from '../ProductCart/ProductCart';

const Product = () => {
    const [product,setProduct] = useState(fakeData)
    return (
        <div id="card-header">
             {
                 product.map(pd=> <ProductCart product={pd} key={pd.id}></ProductCart>)
             }
        </div>
    );
};

export default Product;