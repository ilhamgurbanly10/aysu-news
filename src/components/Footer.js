import { Languages } from "./elements/Dropdowns";
import {useTranslation} from "react-i18next";
import Images from "./Images";
import { Link } from "react-router-dom";
import {ImportantLinks, BrowseTags, SocialMedia} from './elements/Lists'

const Footer = () => {

    const {t, i18n} = useTranslation('footer');

    return (
        <footer className='footer mt-5'>      

            <div className="footer-container bg-black-2 container-1 py-6 row w-100 gx-0 justify-content-center justify-content-lg-between align-items-start">

                <div className="footer-inner-container col-12 col-lg-3">

                    <img src={Images.logo2} alt="Brand Image" className="brand-img" />

                    <p className="footer-text text-1 mt-4">
                        {t('texts.text01')}
                    </p>

                </div>

                <ImportantLinks/>

                <BrowseTags/>

                <SocialMedia/>

            </div>

            <div className="footer-bottom-container bg-black-3 container-1 py-4 py-lg-3 d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center">

                <p className="footer-copyright text-1 text-center text-lg-start m-0 small-font-2">
                    {t('texts.copyright') }
                </p>

                <div className="w-100 mt-4 d-lg-none"></div>

                <Languages placement="top" />

            </div>

        </footer>
    );
}
  
export default Footer;