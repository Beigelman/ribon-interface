export default interface Ngo {
  id: number;
  name: string;
  impactIconBackgroundColor: string;
  impactDescription: string;
  cause: string;
  whiteLogoUrl: string;
  logoUrl: string;
  backgroundImageUrl: string;
  colorCode: string;
  willDonateImageUrl: string;
  link: string;
  sliderImages: Array<Record<any, string>>;
  cardBackgroundImage: string;
  willDonateImage: string;
  donationDoneImage: string;
  ribonsAmountToOneImpactUnit: number;
  activated?: boolean;
  donationImpactMessage?: string;
  shareImage: string;
}
