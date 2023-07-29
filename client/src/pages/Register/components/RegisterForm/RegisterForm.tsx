import { FormEvent, SyntheticEvent } from 'react';
import './RegisterForm.scss';
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

export function RegisterForm({
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
        <label htmlFor={data.title} className="register-form__label">
          {data.label}
        </label>
        <div className="register-form__input-container">
          <input
            type={data.type}
            name={data.title}
            placeholder={data.placeholder}
            className="register-form__input"
            value={data.value}
            onChange={handler}
          />
          {data.isValid && (
            <img
              src={images.checkCircleGreen}
              className="register-form__input-icon"
              alt="valid input"
            />
          )}
        </div>
      </div>
    );
  };
  return (
    <form className="register-form" onSubmit={submitRegisterForm}>
      {createFormInput(nameData, registerNameValidation)}
      {createFormInput(emailData, registerEmailValidation)}
      {createFormInput(passwordData, registerPasswordValidation)}
      {createFormInput(confirmPasswordData, registerConfirmPasswordValidation)}

      <button type="submit" className="register-form__signin-btn">
        Register
      </button>
    </form>
  );
}
