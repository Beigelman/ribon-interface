import DonationPackage from "../types/DonationPackage";

export const DonationPackages: Array<DonationPackage> = [
  {
    id: 0,
    wallet: "0xAD92c59858F3690DFfACfC18E3Bc5714cb4b02Ca",
    colorCode: "00B5BF",
    impactDays: 2,
    impactDescription: "days of safe water",
    ngo: {
      id: 1,
      name: "Evidence Action",
      impactIconBackgroundColor: "#00B5BF",
      impactDescription: "days of safe water",
      cause: "Safe water",
      description:
        "Recommended by givewell, the life you can save, and impactmatters, dispensers for safe water provides over 4 million people with free and reliable access to safe water, reducing preventable diseases such as diarrhea and saving children’s lives.",
      whiteLogoUrl: "",
      logoUrl:
        "https://storage.googleapis.com/non-profits/evidence-action/logo.png",
      impactCardImage:
        "https://storage.googleapis.com/non-profits/evidence-action/impact-card.jpg",
      colorCode: "#7FBB46",
      link: "https://www.evidenceaction.org/",
      cardBackgroundImage:
        "https://storage.googleapis.com/non-profits/evidence-action/donation-card.jpg",
      willDonateImage:
        "https://storage.googleapis.com/non-profits/evidence-action/will-donate.jpg",
      sliderImages: [],
      ribonsAmountToOneImpactUnit: 7200,
      activated: true,
      donationImpactMessage:
        "I just helped someone by making a donation without spending anything through the Ribon app! Too good to be true right? Learn more and help too.",
      shareImage: "string",
    },
    ngoId: 1,
    positionOrder: 1,
    requiredRibons: 100,
    shortDescription:
      "Installs chlorine dispensers and delivery safe water to millions",
    exclusiveForSubscriber: false,
    donationImpactMessage: "You helped with your donation",
  },
  {
    id: 1,
    wallet: "0xB6221a7b81AC2b706D3bd40A7Bb12482D05C5544",
    colorCode: "#EF5350",
    impactDays: 1,
    impactDescription: "days of basic health",
    ngo: {
      id: 1,
      name: "Living Goods",
      impactIconBackgroundColor: "#EF5350",
      impactDescription: "days of basic health",
      cause: "Basic health",
      description:
        "Effectively trained, supported, supervised and equipped community health workers are at the heart of everything we do, and we work to ensure that they have the resources they need to effectively serve neighbors in need.",
      whiteLogoUrl: "",
      logoUrl:
        "https://storage.googleapis.com/non-profits/living-goods/logo.png",
      impactCardImage:
        "https://storage.googleapis.com/non-profits/living-goods/impact-card.jpg",
      colorCode: "#3F51B5",
      link: "https://livinggoods.org/",
      sliderImages: [],
      cardBackgroundImage:
        "https://storage.googleapis.com/non-profits/living-goods/donation-card.jpg",
      willDonateImage:
        "https://storage.googleapis.com/non-profits/living-goods/will-donate.jpg",
      ribonsAmountToOneImpactUnit: 1000,
      activated: true,
      donationImpactMessage: "$IMPACT days of medication for one person.",
      shareImage: "string",
    },
    ngoId: 1,
    positionOrder: 2,
    requiredRibons: 100,
    shortDescription:
      "Community health workers deliver high-quality health care services.",
    exclusiveForSubscriber: false,
    donationImpactMessage: "string",
  },
];

export default DonationPackages;
