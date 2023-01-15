const ItemList = ({ routeLink, linkText, closeAfterClickItem }) => {
    return (
        <li>
            <a href={routeLink} onClick={closeAfterClickItem}>{linkText}</a>
        </li>
    )
}

export default ItemList;