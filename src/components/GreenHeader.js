
import React from "react";
import { NavLink } from "react-router-dom";
import { logoWhite } from './Images';
import {useEffect} from 'react';
import closeNavbarNav from './navbar/Navbar';
import { wrapLogo } from './navbar/Navbar';
import SearchForm from './forms/SearchForm';


const GreenHeader = () => {

  useEffect(() => {
    const nav = document.querySelector('.navbar');
    const brand = document.querySelector('.navbar-brand');
    const toggler = document.querySelector('.navbar-toggler');
    const buttons = document.querySelectorAll('.nav-link');
    closeNavbarNav(toggler, buttons, brand);
    wrapLogo(toggler, brand);
  }, []);

  return (
    <>
      <header className="header">
       
        <nav className="navbar navbar-expand-lg green-navbar flex-wrap w-100 pt-3 pb-6 bg-green">

          <div className="container-1 d-flex flex-wrap justify-content-between align-items-center align-content-center">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-line"></span>
            </button>

            <NavLink className="navbar-brand ms-auto me-auto ms-lg-0 d-lg-block" to="/">
              <img src={logoWhite} alt="Navbar Brand" className="brand-img" />
            </NavLink>

            <div className="navbar-search-container text-center flex-grow-1 ms-lg-5 me-lg-5 w-100 w-lg-initial">
                <SearchForm className="mt-4 mt-lg-0" id="searchForm" inputClass="input-2" btnClass="btn-6" dropdownClass="dropdown-4" listClass="dropdown-4" linkClass="text-btn btn-underline" allLinkClass="text-btn fw-normal" checkboxClass="checkbox-container checkbox-container-2"/>
            </div> 
    
            <div className="collapse navbar-collapse flex-grow-0 mt-4 mt-lg-0"  id="navbarSupportedContent">

              <ul className="navbar-nav align-items-lg-center py-2 p-lg-0 align-content-lg-center">

                <NavLink className="nav-link d-lg-none mb-2"  to="/">
                  <img src={logoWhite} alt="Navbar Brand" className="brand-img" />
                </NavLink>

                <li className="nav-item me-lg-4 mt-3 mt-lg-0 d-lg-none">
                  <NavLink className={isActive => "nav-link text-btn btn-underline " + (isActive.isActive ? "active" : "") } to="/">Main</NavLink>
                </li>

                <li className="nav-item me-lg-4 mt-3 mt-lg-0">
                  <NavLink className={isActive => "nav-link text-btn btn-underline " + (isActive.isActive ? "active" : "") } to="/about">About us</NavLink>
                </li>

                <li className="nav-item me-lg-4 mt-3 mt-lg-0">
                  <NavLink className={isActive => "nav-link text-btn btn-underline " + (isActive.isActive ? "active" : "") } to="/developers">For Developers</NavLink>
                </li>

                <li className="nav-item me-lg-4 mt-3 mt-lg-0 d-lg-none">
                  <NavLink className={isActive => "nav-link text-btn btn-underline " + (isActive.isActive ? "active" : "") } to="/">Terms of Service</NavLink>
                </li>

                <li className="nav-item me-lg-4 mt-3 mt-lg-0 d-lg-none">
                  <NavLink className={isActive => "nav-link text-btn btn-underline " + (isActive.isActive ? "active" : "") } to="/">Privacy Policy</NavLink>
                </li>

                <li className="nav-item me-lg-4 mt-3 mt-lg-0 d-lg-none">
                  <NavLink className={isActive => "nav-link text-btn btn-underline " + (isActive.isActive ? "active" : "") } to="/">Trust & Safety</NavLink>
                </li>

              </ul> 

            </div>

          </div>

        </nav> 

      </header>  

    </>
  )
};

export default GreenHeader;