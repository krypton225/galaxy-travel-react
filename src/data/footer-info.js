import GenerateID from "../utils/generateID";

import { FaSearchLocation, FaMailBulk } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const sizeIcon = 19;

const footerInfo = [
    {
        linkURL: "https://goo.gl/maps/g4xNmxedAozcSLUbA",
        linkTitle: "See address in Google Maps",
        relation: "noreferrer noopener",
        className: "first-top",
        target: true,
        iconName: <FaSearchLocation size={sizeIcon} />,
        moreInfo: {
            classNameInfo: "first-top-address",
            textAppeared: {
                first: "123 acme st.",
                second: "houston, TX",
            }
        }
    },
    {
        linkURL: "tel:+1234-00-1234",
        linkTitle: "Call us now",
        relation: "noreferrer noopener",
        className: "first-middle",
        target: false,
        iconName: <BsFillTelephoneFill size={sizeIcon} />,
        moreInfo: {
            classNameInfo: "first-middle-telephone",
            textAppeared: {
                first: "+1234-00-1234"
            }
        }
    },
    {
        linkURL: "mailto:trips@galaxy.com",
        linkTitle: "Mail us now",
        relation: "noreferrer noopener",
        className: "first-bottom",
        target: false,
        iconName: <FaMailBulk size={sizeIcon} />,
        moreInfo: {
            classNameInfo: "first-bottom-mail",
            textAppeared: {
                first: "trips@galaxy.com"
            }
        }
    },
];

(() => GenerateID(footerInfo))();

export default footerInfo;