import { Link } from "react-router-dom";

const ItemList = ({ routeLink, linkText, closeAfterClickItem }) => {
    return (
        <li>
            <Link to={routeLink} onClick={closeAfterClickItem}>
                {linkText}
            </Link>
        </li>
    )
}

export default ItemList;