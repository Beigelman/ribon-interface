export default interface Ngo {
  id: number;
  name: string;
  impactIconBackgroundColor: string;
  impactDescription: string;
  cause: string;
  description: string;
  whiteLogoUrl: string;
  logoUrl: string;
  impactCardImage: string;
  colorCode: string;
  link: string;
  sliderImages: Array<Record<any, string>>;
  cardBackgroundImage: string;
  willDonateImage: string;
  ribonsAmountToOneImpactUnit: number;
  activated?: boolean;
  donationImpactMessage?: string;
  shareImage: string;
}
