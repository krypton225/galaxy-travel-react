import GenerateID from "../utils/generateID";

const navbarItems = [
    { linkText: "home", routeLink: "/" },
    { linkText: "pricing", routeLink: "/pricing" },
    { linkText: "training", routeLink: "/training" },
    { linkText: "contact", routeLink: "/contact" },
];

(() => GenerateID(navbarItems))();

export default navbarItems;