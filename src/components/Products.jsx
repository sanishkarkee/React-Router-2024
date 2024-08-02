import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Products() {
  return (
    <>
      <h2>This is Product.jsx</h2>
      <input type='search' placeholder='Search products' />
      <nav>
        <Link to='featured'>Featured</Link>
        <Link to='new'>New</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Products;
