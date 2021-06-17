import React from "react";
import { CloseOutline as CloseIcon } from "@styled-icons/evaicons-outline";
import * as S from "./styles";
import theme from "../../styles/theme";
import DonationHeader from "../../components/DonationHeader";
import DonationTimeline from "../../components/DonationTimeline";
import useBreakpoint from "../../hooks/useBreakpoint";
import DesktopSidebar from "../../components/DesktopSidebar";
import Button from "../../components/Button";

export type HeaderProps = {
  color: string;
  onClose(): void;
  hide?: boolean;
};

export type DesktopSidebarProps = {
  image: string;
  disabledSponsorClick?: boolean;
};

export type FooterButtonsProps = {
  onSecondaryButtonClick?(): void;
  onPrimaryButtonClick(): void;
  secondaryButtonText?: string;
  primaryButtonText: string;
  primaryButtonDisabled?: boolean;
};

export type Props = {
  children: JSX.Element;
  headerProps: HeaderProps;
  currentStep: number;
  desktopSidebarProps: DesktopSidebarProps;
  footerButtonProps: FooterButtonsProps;
  timelineSteps: string[];
};

function DonationLayout({
  children,
  headerProps: { color, onClose, hide = false },
  currentStep,
  desktopSidebarProps: { image, disabledSponsorClick = false },
  footerButtonProps: {
    onSecondaryButtonClick,
    onPrimaryButtonClick,
    primaryButtonText,
    secondaryButtonText,
    primaryButtonDisabled = false,
  },
  timelineSteps,
}: Props): JSX.Element {
  const { isMobile, isPad, isDesktop } = useBreakpoint();

  return (
    <S.Container>
      {!hide && (
        <DonationHeader
          color={color}
          icon={
            <CloseIcon
              aria-label="Close icon"
              onClick={onClose}
              height={30}
              width={30}
              color={theme.colors.ribonBlue}
            />
          }
        />
      )}
      {(isMobile || isPad) && (
        <DonationTimeline steps={timelineSteps} currentStep={currentStep} />
      )}
      <S.GridContainer>
        <S.LeftContainer>
          <DesktopSidebar
            mainImage={image}
            disabledSponsorClick={disabledSponsorClick}
          />
        </S.LeftContainer>
        <S.BodyContainer>
          {isDesktop && (
            <DonationTimeline steps={timelineSteps} currentStep={currentStep} />
          )}
          <S.ContentContainer>{children}</S.ContentContainer>
          <S.Footer>
            <S.ButtonContainer>
              {secondaryButtonText && onSecondaryButtonClick && (
                <S.CancelButton>
                  <Button
                    onClick={onSecondaryButtonClick}
                    backgroundColor={theme.colors.darkGray}
                    text={secondaryButtonText}
                  />
                </S.CancelButton>
              )}
              <S.ButtonCell>
                <S.FinishButton
                  onClick={onPrimaryButtonClick}
                  backgroundColor={
                    primaryButtonDisabled
                      ? theme.colors.lightGray
                      : theme.colors.ribonBlue
                  }
                  text={primaryButtonText}
                  disabled={primaryButtonDisabled}
                />
              </S.ButtonCell>
            </S.ButtonContainer>
          </S.Footer>
        </S.BodyContainer>
      </S.GridContainer>
    </S.Container>
  );
}

export default DonationLayout;
