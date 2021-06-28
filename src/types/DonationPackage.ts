import Ngo from "./Ngo";

export default interface DonationPackage {
  id: number;
  wallet: string;
  colorCode: string;
  impactDays: number;
  impactDescription: string;
  longDescription: string;
  ngo: Ngo;
  ngoId: number;
  positionOrder: number;
  requiredRibons: number;
  shortDescription: string;
  exclusiveForSubscriber: boolean;
  donationImpactMessage: string;
}
