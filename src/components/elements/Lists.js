import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import Images from "../Images";

export const SiderBtnList = (props) => {

    const lan = i18next.language;

    const {className, siderLinks, title} = props;

    return (
        <div className={`sider-btn-list p-6 bor-2 mt-4 ${className}`}>
            
            <h3 className="sider-btn-list-title title-3 title-underline-2 mb-3">
                {title}
            </h3>

            { siderLinks.map((btn , i)=>(

                <Link key={i} to={btn.to}  className="sider-btn-list-btn btn-3">
                    <i className="fa fa-chevron-right"></i>
                    {btn[`content_${lan}`]}
                    <span className="sider-btn-list-len">({btn.len})</span>
                </Link>

            ))}

        </div>
    )

}


export const SiderPostList = (props) => {

    const lan = i18next.language;

    const {className, siderPosts, title} = props;

    return (
        <div className={`sider-post-list p-6 bor-2 mt-4 ${className}`}>
            
            <h3 className="sider-post-list-title title-3 title-underline-2 mb-3">
                {title}
            </h3>

            { siderPosts.map((post , i)=>(
                
                <div key={i} className={`sider-post d-flex justify-content-start align-items-start mt-4 ${className}`}>
                    
                    <img src={post.img} alt="Post Image" className="sider-post-img small-img-1 rounded me-4"/>

                    <div className="sider-post-box">

                        <p className="sider-post-date m-0 small-text-1 txt-darkgrey mb-2">{post.date}</p>
                        
                        <Link className="sider-post-title text-btn bigger-font bigger-line-height mt-3 txt-black" to="/">
                            {post[`title_${lan}`]}
                        </Link>

                    </div>
                
                </div>

            ))}

        </div>
    )

}

export const ImportantLinks = () => {

    const {t, i18n} = useTranslation('footer');

    return (
        <div className="footer-inner-container mt-5 mt-lg-0 col-12 col-lg-2 ms-lg-auto">

            <h4 className="footer-title title-4">
                {t('titles.title01')}
            </h4>

            <div className="footer-link-container mt-4">
                <Link to="/" className="text-btn-2 footer-link">
                    {t('links.link01')}
                </Link>
            </div>

            <div className="footer-link-container mt-3">
                <Link to="/" className="text-btn-2 footer-link">
                    {t('links.link02')}
                </Link>
            </div>

            <div className="footer-link-container mt-3">
                <Link to="/" className="text-btn-2 footer-link">
                    {t('links.link03')}
                </Link>
            </div>

            <div className="footer-link-container mt-3">
                <Link to="/" className="text-btn-2 footer-link">
                    {t('links.link04')}
                </Link>
            </div>

            <div className="footer-link-container mt-3">
                <Link to="/" className="text-btn-2 footer-link">
                    {t('links.link05')}
                </Link>
            </div>
            
        </div>
    )

}

export const BrowseTags = () => {

    const {t, i18n} = useTranslation('footer');

    return (
        <div className="footer-inner-container mt-5 mt-lg-0 col-12 col-lg-4">

            <h4 className="footer-title title-4">
                {t('titles.title02')}
            </h4>

            <div className="footer-inner-list d-flex flex-wrap mt-2 justify-content-start align-items-start">

                <div className="footer-link-container mt-2 mb-1 me-2 ms-1">
                    <Link to="/" className="btn-5 footer-link">
                        {t('links.link06')}
                    </Link>
                </div>

                <div className="footer-link-container mt-2 mb-1 me-2 ms-1">
                    <Link to="/" className="btn-5 footer-link">
                        {t('links.link07')}
                    </Link>
                </div>

                <div className="footer-link-container mt-2 mb-1 me-2 ms-1">
                    <Link to="/" className="btn-5 footer-link">
                        {t('links.link08')}
                    </Link>
                </div>

                <div className="footer-link-container mt-2 mb-1 me-2 ms-1">
                    <Link to="/" className="btn-5 footer-link">
                        {t('links.link09')}
                    </Link>
                </div>

                <div className="footer-link-container mt-2 mb-1 me-2 ms-1">
                    <Link to="/" className="btn-5 footer-link">
                        {t('links.link10')}
                    </Link>
                </div>

                <div className="footer-link-container mt-2 mb-1 me-2 ms-1">
                    <Link to="/" className="btn-5 footer-link">
                        {t('links.link11')}
                    </Link>
                </div>

                <div className="footer-link-container mt-2 mb-1 me-2 ms-1">
                    <Link to="/" className="btn-5 footer-link">
                        {t('links.link12')}
                    </Link>
                </div>

                <div className="footer-link-container mt-2 mb-1 ms-1">
                    <Link to="/" className="btn-5 footer-link">
                        {t('links.link13')}
                    </Link>
                </div>

            </div>

        </div>
    )
    
}


export const SocialMedia = () => {

    const {t, i18n} = useTranslation('footer');

    return (
        <div className="footer-inner-container mt-5 mt-lg-0 col-12 col-lg-2">

            <h4 className="footer-title title-4">
                {t('titles.title03')}
            </h4>

            <div className="footer-link-container mt-4">
                <Link to="/" className="text-btn-2 footer-link">
                    <img src={Images.facebook} alt="Facebook Icon" className="me-2"/> Facebook
                </Link>
            </div>

            <div className="footer-link-container mt-2">
                <Link to="/" className="text-btn-2 footer-link">
                    <img src={Images.twitter} alt="Facebook Icon" className="me-2"/> Twitter
                </Link>
            </div>

            <div className="footer-link-container mt-2">
                <Link to="/" className="text-btn-2 footer-link">
                    <img src={Images.instagram} alt="Facebook Icon" className="me-2"/> Instagram
                </Link>
            </div>

            <div className="footer-link-container mt-2">
                <Link to="/" className="text-btn-2 footer-link">
                    <img src={Images.youtube} alt="Facebook Icon" className="me-2"/> Youtube
                </Link>
            </div>


            
        </div>
    )
    
}