import React, { Dispatch, SetStateAction } from "react";
import * as S from "./styles";

export type ValueDispatcher = Dispatch<SetStateAction<string>>;

export type Props = {
  name: string;
  label: string;
  type: string;
  value: string;
  setValue: ValueDispatcher;
  inputLength?: number;
};

function FormInput({
  name,
  label,
  type,
  value,
  setValue,
  inputLength,
}: Props): JSX.Element {
  return (
    <S.Input type={type}>
      <label htmlFor={name}>{label}</label>
      {type === "textarea" ? (
        <textarea
          name={name}
          aria-label={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <input
          type={type}
          name={name}
          aria-label={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
      <span>{inputLength}/140</span>
    </S.Input>
  );
}

export default FormInput;
