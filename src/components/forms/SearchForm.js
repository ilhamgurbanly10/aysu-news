import {useEffect} from 'react';
import {SearchResult} from '../flash/Functions';
import { Link } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';

const SearchForm = (props) => {
    
    const {className, id, inputClass, btnClass, dropdownClass, listClass, linkClass, allLinkClass, checkboxClass} = props;

    let [searchParams, setSearchParams] = useSearchParams();

    const writeToUrl = event => {
        let val = document.querySelector('#searchText').value;
        let checkbox1 = document.querySelector('#searchOnlyDomain').checked;
        let checkbox2 = document.querySelector('#searchOtherOptions').checked;
         
        setSearchParams(`name=${val}&only-domain=${checkbox1}&other-options=${checkbox2}`);
    }

    useEffect(() => {
        const form = document.querySelector(`#${id}`);
        SearchResult(form);
    }, []);

    return (
        <form className={`search-form w-100 ${className}`} id={id} action="results">
            
            <div className="search-form-container position-relative">

                <input type="text" onChange={writeToUrl} className={"search-form-input " + inputClass} name="searchText" id="searchText" placeholder="Search something..." />
                
                <div className="search-form-btn-list position-absolute end-0 top-0 h-100 pe-4 d-flex justify-content-center align-items-center">

                    <button type="reset" className="search-form-btn search-form-reset iconic-btn grey-iconic-btn me-4 rotate-icon">
                        <i className="fa fa-times"></i>
                    </button>

                    <button type="submit" className="search-form-btn  search-form-submit iconic-btn rotate-icon"  name="searchSubmit">
                        <i className="fa fa-search"></i>
                    </button>
                    
                </div>

                <div className="search-form-dropdown-container position-absolute top-0 start-0 h-100">

                    <button type="button" className={"search-form-dropdown-toggler h-100 " + btnClass}>
                        Resources  <i className="ms-3 fa fa-chevron-down"></i>
                    </button>

                    <div className={"search-form-dropdown w-100 " + dropdownClass}>
                    
                        <div className={"form-check-reverse " + checkboxClass}>
                            <input className="form-check-input" type="checkbox" onChange={writeToUrl} value="" id="searchOnlyDomain" name="searchOnlyDomain"/>
                            <label className="form-check-label" for="searchOnlyDomain">
                                Only domain
                            </label>
                        </div>

                        <div className={"form-check-reverse mt-3 " + checkboxClass}>
                            <input className="form-check-input" type="checkbox" onChange={writeToUrl} value="" id="searchOtherOptions" name="searchOtherOptions" />
                            <label className="form-check-label" for="searchOtherOptions">
                                Other options
                            </label>
                        </div>

                    </div>
                    
                </div>

                <ul className={"search-form-result-list " + listClass}>
                    
                    <li className="search-form-result-item">

                        <Link className={"search-form-result-link " + linkClass} to="/">
                            Adobe
                        </Link>

                    </li>

                    <li className="search-form-result-item">

                        <Link className={"search-form-result-link mt-3 " + linkClass} to="/">
                            Adobe Photoshop
                        </Link>

                    </li>

                    <li className="search-form-result-item">

                        <Link className={"search-form-result-link mt-3 " + linkClass} to="/">
                            Adobe Illustrator
                        </Link>

                    </li>

                    <li className="search-form-result-item">

                        <Link className={"search-form-result-link mt-3 " + linkClass} to="/">
                            Adobe XD
                        </Link>

                    </li>

                    <li className="search-form-result-item">

                        <Link className={"search-form-result-link mt-3 " + allLinkClass} to="/">
                            Show 599 finded domains
                        </Link>

                    </li>

                </ul>

            </div>

        </form>       
    );

}

export default SearchForm;