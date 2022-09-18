import {useEffect} from 'react';
import { Link } from "react-router-dom";

const SearchForm = (props) => {
    
    const {className, id, inputClass, checkboxClass, togglerClass, togglerContent, values} = props;

    useEffect(() => {
        
    }, []);

    function toggleForm(event) {
        event.target.nextSibling.classList.toggle('show');
        event.target.classList.toggle('active');
    }

    return (
        <form className={`side-form w-100 ${className}`} id={id} action="results">
            
            <button type="button" className={`side-form-toggler active d-flex justify-content-between align-items-center ${togglerClass}`} onClick={toggleForm}>
                {togglerContent}
                <i className="fa fa-chevron-down"></i>
            </button>

            <div className="side-form-container mt-4 show">

                <div className="side-form-input-container position-relative">
                    <input type="text" className={"side-form-input " + inputClass} name="sideSearchText" id="sideSearchText" placeholder="Search sector" />
                    
                    <button type="submit" className="side-form-btn side-form-submit iconic-btn-2 rotate-icon"  name="sideSearchSubmit">
                        <i className="fa fa-search"></i>
                    </button>
                </div>    

                <div className="side-form-input-container position-relative">

                    <div className="side-form-line"></div>

                    <div className={"form-check mt-3 " + checkboxClass}>
                        <input className="form-check-input" type="checkbox" value="" id={values[0]} name={values[0]}/>
                        <label className="form-check-label" for={values[0]}>
                            {values[0]}
                        </label>
                    </div>

                    <div className={"form-check mt-3 " + checkboxClass}>
                        <input className="form-check-input" type="checkbox" value="" id={values[1]} name={values[1]}/>
                        <label className="form-check-label" for={values[1]}>
                            {values[1]}
                        </label>
                    </div>

                    <div className={"form-check mt-3 " + checkboxClass}>
                        <input className="form-check-input" type="checkbox" value="" id={values[2]} name={values[2]}/>
                        <label className="form-check-label" for={values[2]}>
                            {values[2]}
                        </label>
                    </div>

                    <div className={"form-check mt-3 " + checkboxClass}>
                        <input className="form-check-input" type="checkbox" value="" id={values[3]} name={values[3]}/>
                        <label className="form-check-label" for={values[3]}>
                            {values[3]}
                        </label>
                    </div>

                    <div className={"form-check mt-3 " + checkboxClass}>
                        <input className="form-check-input" type="checkbox" value="" id={values[4]} name={values[4]}/>
                        <label className="form-check-label" for={values[4]}>
                            {values[4]}
                        </label>
                    </div>

                </div>    

            </div>

        </form>       
    );

}

export default SearchForm;