import React, { useState, useEffect } from 'react';
import axios from 'axios';

 const Cart = () => {
   const [products , setProducts] =  useState();
       useEffect(() => {
         const fetchProducts = async () => {
            const resp  = await axios.get('https://fakestoreapi.com/products')
              const data = await resp.data.json()
                setProducts(data)
  }
  fetchProducts()
  },[])
  return (
    <div>
      <h1>Shopping - cart</h1>
      {products}
    </div>
  );
}

export default Cart;
