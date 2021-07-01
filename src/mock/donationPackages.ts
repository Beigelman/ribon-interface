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
      whiteLogoUrl: "",
      logoUrl:
        "https://storage.googleapis.com/non-profits/evidence-action/logo.png",
      backgroundImageUrl: "",
      colorCode: "#7FBB46",
      willDonateImageUrl:
        "https://storage.googleapis.com/non-profits/evidence-action/will-donate.jpg",
      link: "",
      cardBackgroundImage:
        "https://storage.googleapis.com/non-profits/evidence-action/donation-card.jpg",
      willDonateImage:
        "https://storage.googleapis.com/business-ribon/Ongs/FAS/Will%20donate%20image%20URL%20-%20CAUSA.png",
      donationDoneImage: "",
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
    impactDays: 2,
    impactDescription: "days of basic health",
    ngo: {
      id: 1,
      name: "Living Goods",
      impactIconBackgroundColor: "#EF5350",
      impactDescription: "days of basic health",
      cause: "Basic health",
      whiteLogoUrl:
        "https://storage.googleapis.com/ribon-api_activestorage/Dara.png",
      logoUrl:
        "https://storage.googleapis.com/non-profits/living-goods/logo.png",
      backgroundImageUrl:
        "https://storage.googleapis.com/business-ribon/Ongs/Dara/Crian%C3%A7as.jpg",
      colorCode: "#3F51B5",
      willDonateImageUrl:
        "https://storage.googleapis.com/ribon-api_activestorage/A3cR49f6H74cGyF45FV26Brx?GoogleAccessId=ribon-api-active-storage%40ribon-api.iam.gserviceaccount.com&Expires=1624287178&Signature=e5vYC8ppFOXUk9Pss56VgKirBvz5XZnQ3aW6Io47P1RPhWcH991XWNhNwnM7e7%2BNe%2BCr3ay99JY3LQ4V55WWEGqucjKSNL1M5WIvt5LvyAhFWhQjnsyDhw7xMg6keFjmqN4TTldDKOUfW%2Bj86aHDLJp44xneBwg24cpSzQZgPANAB%2BZkZptALxdTUJ844ToaFtRfjRDPhg1l%2BLxmCawbb41Ik2EIzUYddqLCqkwSkXMmGoPrAma41xga6Ec2dGzfRih4cc2wJLm9pIc4saqNHJ86Au7bxhXYuh3fXrsz0%2F6Y6%2B6j8dmp2GbkBEkMQ3I7HSimx%2Bwlsy%2FQDkn61GkB1Q%3D%3D&response-content-disposition=inline%3B+filename%3D%22saudecrianca-willdonate.jpeg%22%3B+filename%2A%3DUTF-8%27%27saudecrianca-willdonate.jpeg&response-content-type=image%2Fjpeg",
      link: "https://www.saudecrianca.org.br/",
      sliderImages: [],
      cardBackgroundImage:
        "https://storage.googleapis.com/non-profits/living-goods/donation-card.jpg",
      willDonateImage:
        "https://storage.googleapis.com/non-profits/living-goods/will-donate.jpg",
      donationDoneImage:
        "https://storage.googleapis.com/ribon-api_activestorage/u9FZhb37H3kUDfyjjojirJbH?GoogleAccessId=ribon-api-active-storage%40ribon-api.iam.gserviceaccount.com&Expires=1624287505&Signature=jYYby78iMDByssmGxQa9ntXirmTzCMLx8q5aRYrg7tYUHW1oLG3CRFKq3vlrzkz3iRM%2Bi8pTQbYVmbw9xNPAZo0I%2FzOPnnMsh4Fgza%2BEkKT6QjCHdTLNAGMzpbhDjyOFybGurdYizpDBYWjSDVhnjQzh1QIddcyqwRqznL9Wv%2BwxslLCS9QDMfb6sIrR6vIQ0wzrWECCAUBD8RtIKQ%2F3aRDDE5NmI9JlT%2BGJhK4tjYYscalahfsv%2B2tMkBVpDPd6EEr18GI8jFB1Z%2BkAws5eWs8x7ASdjoCAp%2F67PrNju9gIOFnwmNgHJU2VtpFt6rRIhNG7CgGk3zgxmuAd3reUTg%3D%3D&response-content-disposition=inline%3B+filename%3D%22saudecrianca-donationdone.jpeg%22%3B+filename%2A%3DUTF-8%27%27saudecrianca-donationdone.jpeg&response-content-type=image%2Fjpeg",
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
