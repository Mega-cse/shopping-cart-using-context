// ProductList.js
import React from 'react';
import ProductCard from './ProductCard';
const ProductList = ({ products, addToCart, removeFromCart }) => {
  return (
    <div className="container">
       <div className="row row-cols-1 row-cols-md-4 g-4">
      {products.map((product) => (
        <div key={product.id} className="col-mb-4">
          <ProductCard
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </div>
     ))}
    </div>
    </div>
  );
};

export default ProductList;
