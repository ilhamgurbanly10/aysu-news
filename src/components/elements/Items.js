import { Link } from "react-router-dom";


export function PostsItem(props) {

    const { date, name, img, to, className } = props;

    return (
        <div className={`posts-item d-flex justify-content-start align-items-center ${className}`}>
            
            <img src={img} alt="Post Image" className="posts-item-img small-img-1 rounded me-4"/>

            <div className="posts-item-box">

                <p className="post-item-date m-0 small-text-1 mb-2">{date}</p>
                
                <Link className="text-btn bigger-font bigger-line-height mt-3" to="/">
                    {name}
                </Link>

            </div>
        
        </div>
    )

}

export function MainPostsItem(props) {

    const { title, date, name, img, adminImg, adminName, adminTo, to, className, text, linkClassName } = props;

    return (
        <div className={`main-posts-item grow-img-on-hover position-relative d-flex flex-column align-items-start justify-content-end rounded-1 overflow-hidden ${className}`}>
            
            <img src={img} alt="Post Image" className="main-posts-item-img position-absolute top-0 start-0 d-block w-100 h-auto min-h-100 layer-n-1"/>

            <div className="overlay-1 layer-n-1"></div>

            <div className="main-posts-item-box p-4 d-flex flex-column align-items-start justify-content-start">

                <div className="main-posts-title txt-verydarkblue rounded title-1 mx-0 py-0 px-3 bg-opacitied-grey">
                    {title}
                </div>
                
                <Link className={`main-posts-link text-btn mt-3 pe-5 txt-white-on-hover ${linkClassName}`} to={to}>
                    {name}
                </Link>

                { text && 
                    <p className="main-posts-text mt-3 text-1">
                        {text}
                    </p> 
                }

                <div className="main-posts-bottom-list mt-4 d-flex justify-content-start align-items-center">

                    { adminImg && <img src={adminImg} alt="Admin Image" className="main-posts-admin-img small-img-2 me-4 rounded-pill" />}
                    
                    <Link className="main-posts-link text-1 me-3" to={adminTo}>
                        {adminName}
                    </Link>

                    <div className="circle-1 me-3"></div>

                    <p className="main-posts-date text-1">{date}</p>

                </div>

            </div>
        
        </div>
    )

}



