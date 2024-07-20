import { createContext, useState,useEffect } from 'react'
import ProductList from './assets/components/ProductList';
import Navbar from './assets/components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './assets/components/Cart';
import axios from 'axios';
import './App.css'


export const myContext = createContext("");
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  const addToCart = (product) => {
    if (!cartItems.find((item) => item.id === product.id)) {
      setCartItems([...cartItems, product]);
    }
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <>


      <BrowserRouter>
        <myContext.Provider value={[cartItems, setCartItems]}>
          <div>
            <Navbar cartItems={cartItems} /></div>
          <Routes>
            <Route path='/cart' element={<Cart />} />
            <Route path='/' element=
            {<ProductList
              products={products}
              addToCart={addToCart}
              removeFromCart={removeFromCart} />}
            />
      
          </Routes>
        </myContext.Provider>
      </BrowserRouter>



    </>
  )
}

export default App
