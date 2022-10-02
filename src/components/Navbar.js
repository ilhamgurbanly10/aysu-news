import { logo } from './Images';
import {useEffect, useRef} from 'react';
import { NavLink } from "react-router-dom";
import closeNavbarNav from './navbar/Navbar';
import {useTranslation} from "react-i18next";
import NavbarNav from './NavbarNav';
import {HeaderOffCanvas} from './canvases/HeaderOffCanvas';
import SearchForm from './forms/SearchForm';

const Navbar = () => {

    const {t, i18n} = useTranslation('header');
    
    const toggler = useRef();

    useEffect(() => {
      const toggler = document.querySelector('.navbar-toggler');
      let buttons = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
      const dropdownButtons = document.querySelectorAll('.nav-item .dropdown-item');
      buttons = [...buttons,...dropdownButtons];
      closeNavbarNav(toggler, buttons);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg flex-wrap m-0 py-4 p-lg-0">

          <div className="container-1 d-flex flex-wrap justify-content-between align-items-center align-content-center">

            <button className="navbar-toggler blue-navbar-toggler" ref={toggler} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-line"></span>
            </button>

            <NavLink className="navbar-brand ms-auto me-auto ms-lg-0 d-lg-block" to="/">
              <img src={logo} alt="Navbar Brand" className="brand-img" />
            </NavLink>

            <div className="collapse navbar-collapse mobile-navbar-collapse flex-grow-0 mx-auto"  id="navbarSupportedContent">
              <NavbarNav toggler={toggler.current}/>     
            </div>

            <SearchForm/>

            <HeaderOffCanvas pos="end" name="" key="1" />

          </div>

        </nav>
    )
}

export default Navbar;