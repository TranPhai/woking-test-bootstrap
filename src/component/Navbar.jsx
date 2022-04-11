import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Navbar.css'
import {useSelector} from 'react-redux'

const Navbar = () => {
    const cartList = useSelector(state => state.handleCart.products)
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white py-3">
        <div className="container fs-4">
            <NavLink className="navbar-brand fw-bold fs-4" to="/">Shop</NavLink>
            <div className=" navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-responsive">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Trang chủ</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/products">Sản phẩm</NavLink>
                    </li>
                </ul>
                <div className="button">
                    <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                        <i className="fa fa-shopping-cart me-1"> Giỏ hàng({cartList.length}) </i>
                    </NavLink>
                </div>
            </div>
        </div>
        </nav>

    </div>
  )
}

export default Navbar