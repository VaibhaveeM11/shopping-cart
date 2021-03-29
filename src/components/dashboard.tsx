import React from 'react';
import Header from '../components/header/Header'
import Cart from './productCard/ProductCard'
import Products from './product/Products';
 const Dashboard = () => {
  return (
    <div>
        <Header/>
        <Cart/>
        <Products/>
    </div>
  );
}

export default Dashboard;
