import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
const Navbar = ({cartItems}) => {
    return (
        <div>
            <nav class="navbar ">
                <div class="container-fluid">
                   <h1>Add to cart using Router</h1>
                    <form className="form-inline my-2 my-lg-0">
                    <Link to='/cart'class="btn btn-outline-success cart-box"><FaCartShopping />&nbsp;  {cartItems.length}</Link>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;