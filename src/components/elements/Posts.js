import { Link } from "react-router-dom";

export const SmallPost = (props) => {

    const { img, date, name, className, key, to } = props;

    return (
        <div key={key} className={`small-post bg-lightgrey bor-1 p-4 d-flex align-items-center justify-content-start ${className}`}>
            
            <img src={img} alt="Post Image" className="small-post-img rounded small-img-3 me-3"/>
            
            <div className="small-post-container"> 
                <p className="small-post-date text-1 txt-darkgrey mb-2">{date}</p>
                <Link to={to} className="small-post-title text-btn bigger-font bigger-line-height txt-black">{name}</Link>
            </div>
            
        </div>
    )

}

export const Post = (props) => {

    const { img, date, name, className, key, to, adminName, adminImg, type, imgClassName, adminTo, text } = props;

    return (
        <div className={`post position-relative grow-child-img-on-hover black-child-img-on-hover overflow-hidden ${className}`}>
            
            <div className="post-type layer-2 d-inline-block position-absolute top-1 start-1 text-1 px-3 py-1 rounded bg-darkblue">{type}</div>

            <div className={`post-img-container rounded mb-4 ${imgClassName}`} >
                <img src={img} alt="Post Image" className="post-img grow-on-hover black-on-hover" />
            </div>

            <Link to={to} className="post-title text-btn txt-black bigger-font fw-bold">
                {name}
            </Link>

            <div className="post-bottom-list mt-4 d-flex justify-content-start align-items-center">

                <img src={adminImg} alt="Admin Image" className="post-admin-img small-img-2 me-3 rounded-pill" />
                
                <Link className="post-admin-name text-1 ms-0 me-3 txt-darkblue" to={adminTo}>
                    By {adminName}
                </Link>

                <div className="post-circle circle-1 me-3 bg-darkblue"></div>

                <p className="post-date text-1 txt-darkblue mx-0">{date}</p>

            </div>

            { text && <p className="post-text mt-4 text-1 txt-black">{text}</p> }

        </div>
    )

}

