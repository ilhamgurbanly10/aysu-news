
import React from "react";
import { NavLink } from "react-router-dom";
import { logo } from './Images';
import {useEffect} from 'react';
import closeNavbarNav from './navbar/Navbar';
import { wrapLogo } from './navbar/Navbar';
import { Title1 } from './elements/Titles';
import { Text1 } from './elements/Texts';
import SearchForm from './forms/SearchForm';
import TopSearches from './forms/TopSearches';


const Header = () => {

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

        <nav className="navbar navbar-expand-lg border-bottom-1 flex-wrap position-fixed start-0 top-0 w-100 py-3">

          <div className="container-1 d-flex flex-wrap justify-content-between align-items-center align-content-center">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-line"></span>
            </button>

            <NavLink className="navbar-brand ms-auto me-auto ms-lg-0 d-lg-block" to="/">
              <img src={logo} alt="Navbar Brand" className="brand-img" />
            </NavLink>

            <div className="collapse navbar-collapse flex-grow-0 mt-4 mt-lg-0"  id="navbarSupportedContent">

              <ul className="navbar-nav align-items-lg-center py-2 p-lg-0 align-content-lg-center">

                <NavLink className="nav-link d-lg-none mb-2"  to="/">
                  <img src={logo} alt="Navbar Brand" className="brand-img" />
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

        <div className="navbar-search-container text-center mt-6 container-2">

            <Title1>
              Use Domain Finder to find unique domains!
            </Title1>

            <Text1 className="mt-3">
              Millions of people are searching for companies, domains, meta tags, 
              company names and etc., on Domain Finder.Try today! <strong>1 000 000</strong> data
              for your search.
            </Text1>

            <SearchForm className="mt-5" id="searchForm" inputClass="input" btnClass="btn-1" dropdownClass="dropdown" listClass="dropdown-2" linkClass="text-btn btn-underline" allLinkClass="text-btn-2" checkboxClass="checkbox-container"/>
            <TopSearches className="mt-2" itemClass="" linkClass="btn-3 grow-on-hover"/>

        </div>  

      </header>  

    </>
  )
};

export default Header;