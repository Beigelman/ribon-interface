import React from "react";
import { screen } from "@testing-library/react";
import DonationPackageCard, { Props } from ".";
import DonationPackage from "../../types/DonationPackage";
import donationPackageFactory from "../../config/testUtils/factories/donationPackageFactory";
import { renderWithRedux } from "../../config/testUtils";

describe("DonationPackageCard", () => {
  const donationPackage: DonationPackage = donationPackageFactory();

  const props: Props = {
    onDonateButtonPress: jest.fn(),
    color: donationPackage.colorCode,
    mainNgoImage: donationPackage.ngo.cardBackgroundImage,
    sliderImages: donationPackage.ngo.sliderImages,
    requiredRibons: donationPackage.requiredRibons,
    goalId: donationPackage?.currentGoal?.id,
    goalPercentageProgress: donationPackage?.currentGoal?.percentageProgress,
    goalStopDonations: donationPackage?.currentGoal?.stopDonations,
    goalAchieved: donationPackage?.currentGoal?.achieved,
    ngoLink: donationPackage.ngo.link,
    exclusiveForSubscriber: donationPackage.exclusiveForSubscriber,
    cardTitle: donationPackage?.impactDescription,
  };

  describe("when there is not a goal", () => {
    beforeEach(() => {
      renderWithRedux(<DonationPackageCard {...props} />);
    });

    it("renders donate button", () => {
      expect(screen.getByText("DOAR")).toBeInTheDocument();
    });
  });

  describe("when there is a goal", () => {
    const withGoalProps = {
      ...props,
      goalId: 1,
      goalPercentageProgress: "80%",
      goalValue: 1000000,
      goalStopDonations: false,
      goalDescription: "Lorem ipsum",
      goalAchieved: false,
    };

    beforeEach(() => {
      renderWithRedux(<DonationPackageCard {...withGoalProps} />);
    });

    describe("when the goal has not yet been achieved and has the property stop donations", () => {
      const withAchievedGoal = {
        ...props,
        goalPercentageProgress: "100%",
        goalAchieved: true,
        goalStopDonations: true,
      };

      beforeEach(() => {
        renderWithRedux(<DonationPackageCard {...withAchievedGoal} />);
      });

      it("renders achieved goal", () => {
        expect(screen.getByText("Meta Alcançada")).toBeInTheDocument();
      });

      it("disables the button", () => {
        expect(screen.getByText("Meta Alcançada")).toHaveAttribute("disabled");
      });
    });
  });

  describe("when the cause is exclusiveForSubscribers", () => {
    describe("when user isn't a subscriber", () => {
      it("expects to render the lock layer", () => {
        renderWithRedux(
          <DonationPackageCard {...props} exclusiveForSubscriber />,
          {
            initialState: {
              user: {
                isSubscriber: false,
              },
            },
          },
        );

        expect(screen.getByAltText("star-ngo")).toBeVisible();
      });
    });

    describe("when user is a subscriber", () => {
      it("expects not to render the lock layer", () => {
        renderWithRedux(
          <DonationPackageCard {...props} exclusiveForSubscriber />,
          {
            initialState: {
              user: {
                isSubscriber: true,
              },
            },
          },
        );
        expect(screen.queryByLabelText("lock-icon")).not.toBeInTheDocument();
      });
    });
  });
});
