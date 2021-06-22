import React from "react";
import * as S from "./styles";
import Button from "../Button";
import theme from "../../styles/theme";

export type Props = {
  onCancel(): void;
  onContinue(): void;
  onContinueBackgroundColor?: string;
  onCancelBackgroundColor?: string;
  onContinueText?: string;
  onCancelText?: string;
  onContinueDisabled?: boolean;
  hideOnCancel?: boolean;
};

function FooterNavigationButtons({
  onCancel,
  onContinue,
  onContinueBackgroundColor = theme.colors.ribonBlue,
  onCancelBackgroundColor = theme.colors.darkGray,
  onContinueText = "Continue",
  onCancelText = "Cancel",
  onContinueDisabled = false,
  hideOnCancel = false,
}: Props): JSX.Element {
  return (
    <S.ButtonContainer>
      {!hideOnCancel && (
        <S.CancelButton>
          <Button
            onClick={onCancel}
            backgroundColor={onCancelBackgroundColor}
            text={onCancelText}
          />
        </S.CancelButton>
      )}
      <Button
        onClick={onContinue}
        backgroundColor={
          onContinueDisabled
            ? theme.colors.lightGray
            : onContinueBackgroundColor
        }
        text={onContinueText}
        disabled={onContinueDisabled}
      />
    </S.ButtonContainer>
  );
}

export default FooterNavigationButtons;
