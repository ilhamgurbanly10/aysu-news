import { Link } from "react-router-dom";
import {useEffect} from 'react';

export function orangeLink(props) {
    return (
        <Link className="btn-1 mt-4" to={props.to}>
            <span>{props.HTML}</span>
        </Link>            
    );
}

export function Twitter(props) {

    const { className, to } = props;
    
    return (
        <Link className={`rounded-btn twitter-btn ${className}`} to={to}>
            <i className="fa fa-twitter"></i>
        </Link>            
    );

}

export function Facebook(props) {

    const { className, to } = props;

    return (
        <Link className={`rounded-btn facebook-btn ${className}`} to={to}>
            <i className="fa fa-facebook"></i>
        </Link>            
    );

}

export function Linkedin(props) {

    const { className, to } = props;
    
    return (
        <Link className={`rounded-btn linkedin-btn ${className}`} to={to}>
            <i className="fa fa-linkedin"></i>
        </Link>            
    );

}

export function GreyLink(props) {

    const { className, to } = props;
    
    return (
        <Link className={`text-btn-3 ${className}`} to={to}>
            {props.children}
        </Link>            
    );

}

export const BackToTopBtn = () => {

    useEffect(() => {

        const backtoTopBtn = document.querySelector('.back-to-top-btn');
        document.body.style.setProperty('scoll-behaviour','smooth');

        const show = () => document.documentElement.scrollTop > 20 ? backtoTopBtn.classList.add('show') : hide();
        const hide = () =>  backtoTopBtn.classList.remove('show'); 
        const toTop = () => document.documentElement.scrollTop = 0; 
    
        backtoTopBtn.addEventListener('click', hide);
        backtoTopBtn.addEventListener('click', toTop);
        window.addEventListener('scroll', show);
        show();
    
    }, []);

    return <button className="back-to-top-btn rotate-icon"><i className="fa fa-chevron-up"></i></button>   
}

export default orangeLink;
  
