import { Link } from 'react-router-dom';
import images from 'assets/images';
import './Register.page.scss';
import { RegisterForm } from './components/RegisterForm/RegisterForm';
import { RegisterFooter } from './components/RegisterFooter/RegisterFooter';
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

    if (
      nameData.isValid &&
      emailData.isValid &&
      passwordData.isValid &&
      confirmPasswordData.isValid
    ) {
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
    <main className="register">
      <Link to="/">
        <img src={images.logoDark} alt="logo" className="register__logo" />
      </Link>

      <div className="register__form-container">
        <h1 className="register__heading">Create Account</h1>
        <RegisterForm
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

        <RegisterFooter />
      </div>
    </main>
  );
}
