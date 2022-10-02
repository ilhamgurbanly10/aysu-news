import { NavLink } from "react-router-dom";
import {useTranslation} from "react-i18next";

const NavbarNav = (props) => {

    const {t, i18n} = useTranslation('header');

    return (
        <ul className="navbar-nav align-items-lg-center py-2 p-lg-0 align-content-lg-center">

            <button type="button" onClick={() => props.toggler.click() } className="iconic-btn-2 navbar-closer ms-auto mb-4 d-lg-none">
                <i className="fa fa-times"></i>
            </button>

            <li className="nav-item">
                <NavLink className={isActive => "nav-link btn-1 btn-overline " + (isActive.isActive ? "active" : "") } to="/">
                    {t('menu.item1')}
                </NavLink>
            </li>

            <li className="nav-item dropdown fl-dropdown-lg-hover fl-md-dropdown fl-not-dropdown-arrow">

                <a className="nav-link dropdown-toggle btn-1 btn-overline" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {t('menu.item2')}
                </a>
                
                <ul className="dropdown-menu dropdown-1">
                
                <li>
                    <NavLink className="dropdown-item btn-2 btn-underline-from-left" to="/">
                        {t('subMenu1.item1')}
                    </NavLink>
                </li>

                <li>
                    <NavLink className="dropdown-item btn-2 btn-underline-from-left" to="/">
                        {t('subMenu1.item2')}
                    </NavLink>
                </li>

                <li>
                    <NavLink className="dropdown-item btn-2 btn-underline-from-left" to="/">
                        {t('subMenu1.item3')}
                    </NavLink>
                </li>

                <li>
                    <NavLink className="dropdown-item btn-2 btn-underline-from-left" to="/">
                        {t('subMenu1.item4')}
                    </NavLink>
                </li>

                <li>
                    <NavLink className="dropdown-item btn-2 btn-underline-from-left" to="/">
                        {t('subMenu1.item5')}
                    </NavLink>
                </li>

                <li>
                    <NavLink className="dropdown-item btn-2 btn-underline-from-left" to="/">
                        {t('subMenu1.item6')}
                    </NavLink>
                </li>

                <li>
                    <NavLink className="dropdown-item btn-2 btn-underline-from-left" to="/">
                        {t('subMenu1.item7')}
                    </NavLink>
                </li>

                <li>
                    <NavLink className="dropdown-item btn-2 btn-underline-from-left" to="/">
                        {t('subMenu1.item8')}
                    </NavLink>
                </li>

                <li>
                    <NavLink className="dropdown-item btn-2 btn-underline-from-left" to="/">
                        {t('subMenu1.item9')}
                    </NavLink>
                </li>

                </ul>

            </li>

            <li className="nav-item">
                <NavLink className={isActive => "nav-link btn-1 btn-overline " + (isActive.isActive ? "active" : "") } to="/lifestyle">
                {t('menu.item3')}
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink className={isActive => "nav-link btn-1 btn-overline " + (isActive.isActive ? "active" : "") } to="/foods">
                {t('menu.item4')}
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink className={isActive => "nav-link btn-1 btn-overline " + (isActive.isActive ? "active" : "") } to="/business">
                {t('menu.item5')}
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink className={isActive => "nav-link btn-1 btn-overline " + (isActive.isActive ? "active" : "") } to="/travel">
                {t('menu.item6')}
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink className={isActive => "nav-link btn-1 btn-overline " + (isActive.isActive ? "active" : "") } to="/about-us">
                {t('menu.item7')}
                </NavLink>
            </li>

        </ul> 
    )

}

export default NavbarNav;