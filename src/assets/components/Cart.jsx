import React, { useContext } from 'react';
import { myContext } from '../../App';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    const [cartItems, setCartItems] = useContext(myContext);
    const updateQuantity = (itemId, newQuantity) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });

        setCartItems(updatedCart);
    };

    const removeItem = (itemId) => {
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCart);
    };
    const totalPrice = cartItems.reduce((total, item) => {
        return total + item.price * (item.quantity || 1);
    }, 0);

    const totalQuantity = cartItems.reduce((total, item) => {
        return total + (item.quantity || 1);
    }, 0);

    return (
        <div className="cart-container">
            <div className="left-card">
                {cartItems.map((item, index) => (
                    <div key={index} className="cart-item">
                        <img src={item.image} className="item-image" alt={item.title} />
                        <div className="item-details">
                            <h5 className="item-title">{item.title}</h5>
                            <p className="item-price">${item.price}</p>
                            <label htmlFor={`dropdown-${index}`}></label>
                            <select
                                id={`dropdown-${index}`}
                                value={item.quantity || 1}
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                            >
                                {[1, 2, 3, 4, 5].map(option => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                            <button onClick={() => removeItem(item.id)}><FontAwesomeIcon icon={faTrash} /></button> </div>
                    </div>
                ))}
            </div>

            
            <div className="right-card">
                <div className="price-details">
                    <h5>Price Details</h5>
                    <p>Price [{totalQuantity} item(s)];</p>
                    <p>Subtotal: ${totalPrice}.00</p>
                    <p>Discount: - $100.00</p>
                </div>
                <hr />
                <div className="final-amount">
                    <p>Final Amount: ${totalPrice - 100} </p>
                </div>
            </div>
        </div>
    );
};

export default Cart;
