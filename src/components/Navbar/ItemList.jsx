import { Link } from "react-router-dom";

const ItemList = ({ pathLinkRoute, linkText, closeAfterClickItem }) => {
    return (
        <li>
            <Link to={pathLinkRoute} onClick={closeAfterClickItem}>
                {linkText}
            </Link>
        </li>
    )
}

export default ItemList;