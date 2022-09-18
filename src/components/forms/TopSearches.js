import { Link } from "react-router-dom";
import { Text1 } from '../elements/Texts';

const TopSearches = (props) => {

    const {className, itemClass, linkClass} = props;
    return (
        <ul className={`top-searches-list list-style d-flex flex-wrap justify-content-center align-items-center ${className}`}>

            <li className={`top-searches-item me-4 mt-3 ${itemClass}`}>
                <Text1 className="fw-bold">Top Searches: </Text1>
            </li>

            <li className={`top-searches-item me-2 mt-3 ${itemClass}`}>
                <Link className={`top-searches-link ${linkClass}`} to="/">
                    development
                </Link>
            </li>

            <li className={`top-searches-item me-2 mt-3 ${itemClass}`}>
                <Link className={`top-searches-link ${linkClass}`} to="/">
                    agile
                </Link>
            </li>

            <li className={`top-searches-item me-2 mt-3 ${itemClass}`}>
                <Link className={`top-searches-link ${linkClass}`} to="/">
                    design
                </Link>
            </li>

            <li className={`top-searches-item me-2 mt-3 ${itemClass}`}>
                <Link className={`top-searches-link ${linkClass}`} to="/">
                    finance
                </Link>
            </li>

            <li className={`top-searches-item me-2 mt-3 ${itemClass}`}>
                <Link className={`top-searches-link ${linkClass}`} to="/">
                    startup
                </Link>
            </li>

            <li className={`top-searches-item mt-3 ${itemClass}`}>
                <Link className={`top-searches-link ${linkClass}`} to="/">
                    delivery
                </Link>
            </li>

        </ul>     
    );

}

export default TopSearches;