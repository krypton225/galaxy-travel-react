import { Contact, Landing, Pricing, Training } from "../components";

import GenerateID from "../utils/generateID";

const routes = [
    { routeLink: <Landing />, path: "/" },
    { routeLink: <Pricing />, path: "/pricing" },
    { routeLink: <Training />, path: "/training" },
    { routeLink: <Contact />, path: "/contact" },
];

(() => GenerateID(routes))();

export default routes;