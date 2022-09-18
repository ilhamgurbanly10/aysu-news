import { NormalText, SmallerTitle } from "./Titles";
import { Link } from "react-router-dom";
import { Title2 } from './Titles';
import { Text1 } from './Texts';
import { adobe, a } from '../Images';
import { GreyLink } from "./Buttons";

export function Item(props) {

    const { num, className, arrow } = props;

    return (
        <div className={`item ${className}`}>
            
            <span className="item-num">{num}</span>
            <b>{props.children}</b>
            {arrow != "false" && <i className="item-arrow item-arrow-right fa fa-long-arrow-right"></i>}
            {arrow != "false" && <i className="item-arrow item-arrow-bottom fa fa-long-arrow-up"></i>}

        </div>
    )

}

export function Result(props) {

    const { className, name, bottomName, bottomText, linkClass, contents, localRating, globalRating } = props;

    return (
        <div className={`result-item p-4 border-2 ${className}`}>

                <div className="result-item-head d-flex flex-column flex-lg-row justify-content-between align-items-lg-center pb-4">

                    <div className="result-item-head-left">
                        <div className="d-inline-flex justify-content-start align-items-center">
                            <img src={adobe} alt="Adobe" /> 
                            <Title2 className="result-item-head-name ms-2">{name}</Title2>
                        </div>
                        <GreyLink className="w-100" to="/">https://www.adobe.com</GreyLink>
                    </div>

                    <div className="result-item-head-right mt-5 mt-lg-0 d-inline-flex justify-content-start align-items-center">

                        <img src={a} alt="A" />

                        <div className="ms-4">
                            <p className="color-green m-0 fw-bold text-start w-100">{localRating}</p>
                            <Text1 className="color-lightgrey">Local rating</Text1>
                        </div>

                        <div className="ms-4">
                            <p className="color-green m-0 fw-bold text-start w-100">{globalRating}</p>
                            <Text1 className="color-lightgrey">Global rating</Text1>
                        </div>

                    </div>

                </div>

                <div className="result-item-bottom border-top-2 pt-4">

                <Title2 className="result-item-name">{bottomName}</Title2>

                <Text1 className="result-item-text mt-2">{bottomText}</Text1>

                <div className="result-item-link-list mt-2">
                    {
                        contents.map((content) => 
                        <Link key={content} className={`result-item-link me-2 mt-3 ${linkClass}`} to="/">
                            {content}
                        </Link>)
                    }
                </div>

                </div>

        </div>
    )

}