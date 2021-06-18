import DonationStats from "./DonationStats";

export default interface Donation {
  donationImpactMessage: string;
  donationStats: DonationStats;
  nextGoalMessage?: string;
}
