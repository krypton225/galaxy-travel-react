import GenerateID from "../utils/generateID";

const pricing = [
    {
        typeOfPricing: "basic",
        bitCoinValue: "1",
        features: {
            days: 3,
            views: 24482,
            numberFeatures: 43,
            isPrivate: true,
        }
    },
    {
        typeOfPricing: "suite",
        bitCoinValue: "3",
        features: {
            days: 7,
            views: 99292,
            numberFeatures: 270,
            isPrivate: false,
        }
    },
    {
        typeOfPricing: "executive",
        bitCoinValue: "5",
        features: {
            days: 20,
            views: 82832,
            numberFeatures: 300,
            isPrivate: true,
        }
    },
];

(() => GenerateID(pricing))();

export default pricing;