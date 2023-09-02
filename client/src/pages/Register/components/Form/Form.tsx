import { FormEvent, SyntheticEvent } from 'react';
import * as Styled from './Form.styled';
import images from 'assets/images';

type data = {
  title: string;
  label: string;
  placeholder?: string;
  value: string;
  type: string;
  isValid: boolean;
  showErrorMsg?: boolean;
  errorMsgText?: string;
  suggestionText?: string;
};

type Props = {
  submitRegisterForm: (e: FormEvent) => void;
  nameData: data;
  emailData: data;
  passwordData: data;
  confirmPasswordData: data;
  registerNameValidation: (e: SyntheticEvent) => void;
  registerEmailValidation: (e: SyntheticEvent) => void;
  registerPasswordValidation: (e: SyntheticEvent) => void;
  registerConfirmPasswordValidation: (e: SyntheticEvent) => void;
};

export function Form({
  submitRegisterForm,
  nameData,
  emailData,
  passwordData,
  confirmPasswordData,
  registerNameValidation,
  registerEmailValidation,
  registerPasswordValidation,
  registerConfirmPasswordValidation,
}: Props) {
  const createFormInput = (data: data, handler: (e: SyntheticEvent) => void) => {
    return (
      <div>
        <label htmlFor={data.title} className="label">
          {data.label}
        </label>
        <div className="input-container">
          <input
            type={data.type}
            name={data.title}
            placeholder={data.placeholder}
            className="input"
            value={data.value}
            onChange={handler}
          />
          {data.isValid && <img src={images.checkCircleGreen} className="input-icon" alt="valid input" />}
        </div>
      </div>
    );
  };

  return (
    <Styled.Component onSubmit={submitRegisterForm}>
      {createFormInput(nameData, registerNameValidation)}
      {createFormInput(emailData, registerEmailValidation)}
      {createFormInput(passwordData, registerPasswordValidation)}
      {createFormInput(confirmPasswordData, registerConfirmPasswordValidation)}

      <button type="submit" className="signin-btn">
        Register
      </button>
    </Styled.Component>
  );
}
