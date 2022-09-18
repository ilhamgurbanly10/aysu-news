import { Facebook, Twitter, Linkedin, GreyLink } from "./elements/Buttons";
import { Languages } from "./elements/Dropdowns";

import { Link } from "react-router-dom";

function Footer() {

    return (
        <footer className='footer mt-7 py-5 border-top-1 container-1 d-flex justify-content-start align-items-center'>
           
           <div className="footer-social-networks-list ms-auto ms-lg-0">
                <Twitter to="/" className="grow-on-hover me-3"></Twitter>
                <Facebook to="/" className="grow-on-hover me-3"></Facebook> 
                <Linkedin to="/" className="grow-on-hover"></Linkedin>
           </div>

           <div className="footer-btn-list ms-5 ps-5 d-none d-lg-flex justify-content-start align-items-center">
                <GreyLink className="footer-btn btn-underline me-5" to="/">Terms of Service</GreyLink>
                <GreyLink className="footer-btn btn-underline me-5" to="/">Privacy Policy</GreyLink>
                <GreyLink className="footer-btn btn-underline" to="/">Trust & Safety</GreyLink>
           </div>

           <Languages className="ms-lg-auto order-first order-lg-last" btnClass="btn-4" linkClass="btn-5"/>

            
        </footer>
    );
}
  
export default Footer;