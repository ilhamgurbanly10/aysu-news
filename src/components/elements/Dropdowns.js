import { Link } from "react-router-dom";
import { Text1 } from './Texts';

export function Languages(props) {

    const { className, btnClass, linkClass } = props;

    return (

        <div className={`languages d-flex justify-content-start align-items-center ${className}`}>

            <Text1 className="color-darkgrey fw-bold me-3">Language: </Text1>

            <div className="btn-group dropup-center dropup">

                <button type="button" className={`dropdown-toggle ${btnClass}`} data-bs-toggle="dropdown" aria-expanded="false">
                    EN
                </button>

                <ul className="dropdown-menu dropdown-3">
                    <Link to="/" className="btn-5 d-block">RU</Link>
                    <Link to="/" className="btn-5 d-block">AZ</Link>
                </ul>

            </div>

        </div>            
    );
}

