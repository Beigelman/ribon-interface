import React, { Dispatch, SetStateAction } from "react";
import Lottie from "react-lottie";
import Button, { onClickType } from "../Button";
import theme from "../../styles/theme";
import * as S from "./styles";
import FormInput from "../FormInput";
import animationData from "../../assets/animations/spinner.json";

const animationOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export type InputValueDispatcher = Dispatch<SetStateAction<string>>;

export type Props = {
  visible?: boolean;
  position?: "center" | "start" | "end";
  overlayBackgroundColor?: "rgba(0, 68, 89, 0.4)" | "transparent";
  overlayJustifyContent?: "center" | "flex-end";
  modalBorder?: string;
  marginTop?: number;
  icon?: string | null;
  title?: string | null;
  titleColor?: string;
  body?: string | null;
  primaryButtonText?: string;
  primaryButtonLeftIcon?: string | undefined;
  primaryButtonTextColor?: string;
  primaryButtonColor?: string;
  primaryButtonBorderColor?: string;
  primaryButtonCallback?: onClickType;
  secondaryButtonText?: string;
  secondaryButtonLeftIcon?: string | undefined;
  secondaryButtonTextColor?: string;
  secondaryButtonColor?: string;
  secondaryButtonBorderColor?: string;
  secondaryButtonCallback?: onClickType;
  contentLabel?: string;
  onClose?: () => void;
  inputType: string;
  inputLabel?: string;
  inputValue: string;
  inputLength: number;
  setInputValue: InputValueDispatcher;
  onSubmit?: () => void;
  isLoading?: boolean;
  highlightedText?: string;
  zIndex?: number;
};

function FormModal({
  visible = false,
  position = "center",
  overlayBackgroundColor = "rgba(0, 68, 89, 0.4)",
  overlayJustifyContent = "center",
  modalBorder = "",
  marginTop = 0,
  icon = null,
  title = null,
  titleColor,
  body = null,
  primaryButtonText = "",
  primaryButtonLeftIcon = undefined,
  primaryButtonTextColor = "white",
  primaryButtonColor = theme.colors.ribonBlue,
  primaryButtonBorderColor,
  secondaryButtonText = "",
  secondaryButtonLeftIcon = undefined,
  secondaryButtonTextColor = theme.colors.darkGray,
  secondaryButtonBorderColor,
  secondaryButtonColor = "white",
  // TODO: discuss with de team to modify linter's rules
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  primaryButtonCallback = () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  secondaryButtonCallback = () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose = () => {},
  inputLabel = "",
  inputType = "text",
  inputValue = "",
  inputLength = 0,
  setInputValue,
  onSubmit = () => {},
  isLoading = false,
  contentLabel,
  highlightedText,
  zIndex = 3,
}: Props): JSX.Element {
  const customStyles = {
    overlay: {
      backgroundColor: overlayBackgroundColor,
      display: "flex",
      alignItems: position,
      justifyContent: overlayJustifyContent,
      zIndex,
    },
    content: {
      border: modalBorder,
      marginTop,
    },
  };

  function renderPrimaryButton() {
    if (isLoading) {
      return <Lottie options={animationOptions} width={64} height={60} />;
    }

    return (
      <Button
        type="submit"
        leftIcon={primaryButtonLeftIcon}
        text={primaryButtonText}
        textColor={primaryButtonTextColor}
        backgroundColor={primaryButtonColor}
        borderColor={primaryButtonBorderColor}
        onClick={primaryButtonCallback}
      />
    );
  }

  function renderSecondaryButton() {
    return (
      <Button
        leftIcon={secondaryButtonLeftIcon}
        text={secondaryButtonText}
        textColor={secondaryButtonTextColor}
        backgroundColor={secondaryButtonColor}
        onClick={secondaryButtonCallback}
        borderColor={secondaryButtonBorderColor}
      />
    );
  }

  function renderForm() {
    return (
      <S.FormContainer>
        <S.FormSection onSubmit={onSubmit}>
          <FormInput
            name="title"
            label={inputLabel}
            type={inputType}
            value={inputValue}
            setValue={setInputValue}
            inputLength={inputLength}
          />

          {renderPrimaryButton()}
          {renderSecondaryButton()}
        </S.FormSection>
      </S.FormContainer>
    );
  }

  return (
    <S.ModalWithIcon
      isOpen={visible}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel={contentLabel}
      ariaHideApp={false}
    >
      {icon && <S.Icon src={icon} />}
      {title && <S.Title color={titleColor}>{title}</S.Title>}
      {body && (
        <S.Body>
          {body}
          {highlightedText && (
            <S.HighlightedText>{highlightedText}</S.HighlightedText>
          )}
        </S.Body>
      )}

      {renderForm()}
    </S.ModalWithIcon>
  );
}

export default FormModal;
