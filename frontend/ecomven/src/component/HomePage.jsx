import React from 'react'
import image from "../assets/Blog_image.jpeg"
import { useNavigate } from 'react-router-dom'
import {useGlobalContext} from "../context";
import img from "../assets/blog.png"
import "./Home.css"
import NavBar from './NavBar'

function HomePage() {

  const navigate = useNavigate();
  const {user,getdata}=useGlobalContext();


  return (
    <>
    <NavBar/>
    <div className='gradient-background'>
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src={image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img>
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Ecommerce</h1>
          <p className="lead">Online marketplace connecting buyers and sellers, offering a wide range of products for convenient shopping from anywhere.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={() => { navigate("/register") }}>Sign up</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={() => { navigate("/login") }}>Log in</button>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div className="container px-4 py-5" id="featured-3">

    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="feature col">
      <div>
        <img src={img} className="icon-square d-inline-flex align-items-center justify-content-center fs-2 mb-3" alt=""></img>
          <svg className="bi" width="1em" height="1em"></svg>
        </div>
        <h3 className="fs-2 text-body-emphasis">User-Friendly Interface</h3>
        <p>Ensure an intuitive and easy-to-navigate vendor page for sellers to manage their products, orders, and settings efficiently.</p>
      </div>
      <div className="feature col">
        <div>
        <img src={img} className="icon-square d-inline-flex align-items-center justify-content-center fs-2 mb-3" alt=""></img>
          <svg className="bi" width="1em" height="1em"></svg>
        </div>
        <h3 className="fs-2 text-body-emphasis">Robust Analytics</h3>
        <p>Provide sellers with in-depth insights into their performance, sales, and customer data to make informed decisions.</p>
      </div>
      <div className="feature col">
        <div>
        <img src={img} className="icon-square d-inline-flex align-items-center justify-content-center fs-2 mb-3" alt=""></img>
          <svg className="bi" width="1em" height="1em"></svg>
        </div>
        <h3 className="fs-2 text-body-emphasis">Inventory Management</h3>
        <p>Implement a comprehensive inventory management system that allows vendors to track stock levels, update product availability, and receive low-stock alerts.</p>
      </div>
    </div>
  </div>


  <div className="container">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p className="col-md-4 mb-0 text-body-secondary">© 2023 Company, Inc</p>

      <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use xlink: href="#bootstrap"></use></svg>
      </a>

      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
      </ul>
    </footer>
  </div>
    </>
  )
}

export default HomePage