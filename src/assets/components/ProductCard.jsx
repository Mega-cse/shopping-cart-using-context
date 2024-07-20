import React, { useState } from 'react';

const ProductCard = ({ product, addToCart, removeFromCart }) => {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setInCart(true);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product);
    setInCart(false);
  };

  return (
    <div className="card mb-4" style={{
      maxWidth: '300px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <div className="card-image-container"
        style={{
          backgroundColor: 'white',
          padding: '40px',
          height: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            maxWidth: '80%',
            maxHeight: '80%',
            objectFit: 'contain',
          }}
        />
      </div>
      <div className="card-details" style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '10px',
        height: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
        <div style={{ textAlign: 'center' }}>
          <h6>{product.title}</h6>
          <p>${product.price}</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          {inCart ? (
            <button
              onClick={handleRemoveFromCart}
              className="btn btn-success cart-button"
            >
              Remove from Cart
            </button>
          ) : (
            <button
              onClick={handleAddToCart}
              className="btn btn-success cart-button"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
