 import React,{createContext, useState } from 'react';
 export const ProductContext = createContext([]);
 const ProductsContextProvider = ({childern}) => {
    const url = 'https://fakestoreapi.com/products',
         fetchProductData = async (url:string) => {
            return await fetch(url)
            .then(response => response)
            .then(response => response.json())
     }    
     const [Product] =  useState(fetchProductData(url))
  return (<ProductContext.Provider value={{Product}}>
        {childern}    
  </ProductContext.Provider>)
 }

export default ProductsContextProvider;
