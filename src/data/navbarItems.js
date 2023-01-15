import GenerateID from "../utils/generateID";

import { Contact, Landing, Pricing, Training } from "../components";

const navbarItems = [
    { linkText: "home", pathLinkRoute: "/", routeComponent: <Landing />, sendTo: "/" },
    { linkText: "pricing", pathLinkRoute: "/pricing", routeComponent: <Pricing />, sendTo: "/pricing" },
    { linkText: "training", pathLinkRoute: "/training", routeComponent: <Training />, sendTo: "/training" },
    { linkText: "contact", pathLinkRoute: "/contact", routeComponent: <Contact />, sendTo: "/contact" },
];

(() => GenerateID(navbarItems))();

export default navbarItems;