import { Link } from 'react-router-dom';
import images from 'assets/images';
import { Component } from './RegisterPage.styled';
import { Form, Footer } from './components';
import { useRegisterForm } from './hooks/useRegisterForm';
import { useRegisterNewUser } from './hooks/useRegisterNewUser';

export default function RegisterPage() {
  const { mutate, isLoading, isError } = useRegisterNewUser();

  const {
    nameData,
    emailData,
    passwordData,
    confirmPasswordData,
    registerNameValidation,
    registerEmailValidation,
    registerPasswordValidation,
    registerConfirmPasswordValidation,
  } = useRegisterForm();

  function submitRegisterForm(e: React.FormEvent) {
    e.preventDefault();

    if (nameData.isValid && emailData.isValid && passwordData.isValid && confirmPasswordData.isValid) {
      const newUser = {
        name: nameData.value,
        email: emailData.value,
        password: passwordData.value,
      };

      console.log('newUser', newUser);
      mutate(newUser);
    }
    console.log('BAD INPUTS');
    return;
  }
  return (
    <Component>
      <Link to="/">
        <img src={images.logoDark} alt="logo" className="register__logo" />
      </Link>

      <div className="register__form-container">
        <h1 className="register__heading">Create Account</h1>
        <Form
          submitRegisterForm={submitRegisterForm}
          nameData={nameData}
          emailData={emailData}
          passwordData={passwordData}
          confirmPasswordData={confirmPasswordData}
          registerNameValidation={registerNameValidation}
          registerEmailValidation={registerEmailValidation}
          registerPasswordValidation={registerPasswordValidation}
          registerConfirmPasswordValidation={registerConfirmPasswordValidation}
        />

        <Footer />
      </div>
    </Component>
  );
}
