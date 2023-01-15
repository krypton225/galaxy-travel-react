const ItemList = ({ routeLink, linkText }) => {
    return (
        <li>
            <a href={routeLink}>{linkText}</a>
        </li>
    )
}

export default ItemList;