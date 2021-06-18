import DonationPackage from "../types/DonationPackage";

export const DonationPackages: Array<DonationPackage> = [
  {
    id: 1,
    colorCode: "red",
    impactDays: 2,
    impactDescription: "string",
    longDescription: "string",
    ngo: {
      id: 1,
      name: "string",
      impactIconBackgroundColor: "string",
      impactDescription: "string",
      cause: "string",
      whiteLogoUrl: "string",
      logoUrl: "string",
      backgroundImageUrl: "string",
      colorCode: "string",
      willDonateImageUrl: "string",
      link: "string",
      sliderImages: [],
      cardBackgroundImage: "string",
      willDonateImage: "string",
      donationDoneImage: "string",
      ribonsAmountToOneImpactUnit: 1000,
      activated: true,
      donationImpactMessage: "string",
      shareImage: "string",
    },
    ngoId: 1,
    positionOrder: 1,
    requiredRibons: 100,
    shortDescription: "string",
    exclusiveForSubscriber: false,
    donationImpactMessage: "string",
  },
  {
    id: 2,
    colorCode: "red",
    impactDays: 2,
    impactDescription: "string",
    longDescription: "string",
    ngo: {
      id: 1,
      name: "string",
      impactIconBackgroundColor: "string",
      impactDescription: "string",
      cause: "string",
      whiteLogoUrl: "string",
      logoUrl: "string",
      backgroundImageUrl: "string",
      colorCode: "string",
      willDonateImageUrl: "string",
      link: "string",
      sliderImages: [],
      cardBackgroundImage: "string",
      willDonateImage: "string",
      donationDoneImage: "string",
      ribonsAmountToOneImpactUnit: 1000,
      activated: true,
      donationImpactMessage: "string",
      shareImage: "string",
    },
    ngoId: 1,
    positionOrder: 2,
    requiredRibons: 100,
    shortDescription: "string",
    exclusiveForSubscriber: false,
    donationImpactMessage: "string",
  },
];

export default DonationPackages;
