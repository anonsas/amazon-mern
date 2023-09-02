import { useReducer } from 'react';
import { StatementTypes, ActionTypes } from '../types/useRegister.types';
import { validateName, validateEmail, validatePassword } from 'app/utils';

const initialState = {
  name: {
    title: 'name',
    label: 'Your name',
    placeholder: 'First and last name',
    value: '',
    type: 'text',
    isValid: false,
    showErrorMsg: false,
    errorMsgText: 'Enter valid first and last name',
  },
  email: {
    title: 'email',
    label: 'Email',
    value: '',
    type: 'text',
    isValid: false,
    showErrorMsg: false,
    errorMsgText: 'Email already in use',
  },
  password: {
    title: 'password',
    label: 'Password',
    value: '',
    type: 'password',
    isValid: false,
    suggestionText: 'At least 8 characters in length: 1 uppercase letter, 1 special character',
  },
  confirmPassword: {
    title: 'confirmPassword',
    label: 'Re-enter password',
    value: '',
    type: 'password',
    isValid: false,
    showErrorMsg: false,
    errorMsgText: "Password doesn't match",
  },
};

const registerReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case 'SET_NAME_FIELD':
      return { ...state, name: { ...state.name, ...action.payload } };
    case 'SET_EMAIL_FIELD':
      return { ...state, email: { ...state.email, ...action.payload } };
    case 'SET_PASSWORD_FIELD':
      return { ...state, password: { ...state.password, ...action.payload } };
    case 'SET_CONFIRM_PASSWORD_FIELD':
      return { ...state, confirmPassword: { ...state.confirmPassword, ...action.payload } };
    case 'RESET_REGISTER_FORM':
      return initialState;
    default:
      return initialState;
  }
};

export function useRegisterForm() {
  const [state, dispatch] = useReducer(registerReducer, initialState);

  const statement = (inputValue: string, key: keyof StatementTypes) => {
    const statementList = {
      // name
      nameIsValid: validateName(inputValue),
      // email
      emailIsValid: validateEmail(inputValue),
      emailIsNotValid: !validateEmail(inputValue),
      emailShowsErrorMessage: state.email.showErrorMsg,
      // password
      passwordIsNotEmpty: state.password.value.length,
      passwordIsValid: validatePassword(inputValue),
      passwordIsNotValid: !validatePassword(inputValue),
      passwordEqualsConfirmPassword: inputValue === state.confirmPassword.value,
      passwordNotEqualsConfirmPassword: inputValue !== state.confirmPassword.value,
      passwordLengthLowerConfirmPassword: inputValue.length <= state.confirmPassword.value.length,
      passwordLengthHigherConfirmPassword: inputValue.length > state.confirmPassword.value.length,
      // confirm password
      confirmPasswordIsEmpty: !state.confirmPassword.value,
      confirmPasswordIsNotEmpty: state.confirmPassword.value.length,
      confirmPasswordIsValid: validatePassword(inputValue),
      confirmPasswordNotEqualsPassword: inputValue !== state.password.value,
      confirmPasswordLengthHigherPassword: inputValue.length >= state.password.value.length,
      confirmPasswordEqualsPassword: inputValue === state.password.value,
    };

    return statementList[key];
  };

  const registerNameValidation = (e: React.SyntheticEvent) => {
    const input = e.target as HTMLInputElement;
    const name = input.value;
    dispatch({ type: 'SET_NAME_FIELD', payload: { value: name.toLowerCase() } });

    if (statement(name, 'nameIsValid')) {
      dispatch({ type: 'SET_NAME_FIELD', payload: { isValid: true, showErrorMsg: false } });
    }
  };

  const registerEmailValidation = (e: React.SyntheticEvent) => {
    const input = e.target as HTMLInputElement;
    const email = input.value;
    dispatch({ type: 'SET_EMAIL_FIELD', payload: { value: email.toLowerCase() } });

    if (statement(email, 'emailIsValid') && statement(email, 'emailShowsErrorMessage')) {
      dispatch({ type: 'SET_EMAIL_FIELD', payload: { isValid: true, showErrorMsg: false } });
    } else if (statement(email, 'emailIsNotValid') && statement(email, 'emailShowsErrorMessage')) {
      dispatch({ type: 'SET_EMAIL_FIELD', payload: { isValid: false, showErrorMsg: false } });
    } else if (statement(email, 'emailIsValid')) {
      dispatch({ type: 'SET_EMAIL_FIELD', payload: { isValid: true } });
    } else {
      dispatch({ type: 'SET_EMAIL_FIELD', payload: { isValid: false, showErrorMsg: false } });
    }
  };

  const registerPasswordValidation = (e: React.SyntheticEvent) => {
    const input = e.target as HTMLInputElement;
    const password = input.value;
    dispatch({ type: 'SET_PASSWORD_FIELD', payload: { value: password } });

    if (
      statement(password, 'passwordIsValid') &&
      statement(password, 'passwordEqualsConfirmPassword')
    ) {
      dispatch({ type: 'SET_PASSWORD_FIELD', payload: { isValid: true } });
      dispatch({
        type: 'SET_CONFIRM_PASSWORD_FIELD',
        payload: { isValid: true, showErrorMsg: false },
      });
    } else if (
      statement(password, 'passwordIsValid') &&
      statement(password, 'confirmPasswordIsEmpty')
    ) {
      dispatch({ type: 'SET_PASSWORD_FIELD', payload: { isValid: true } });
      dispatch({
        type: 'SET_CONFIRM_PASSWORD_FIELD',
        payload: { isValid: false, showErrorMsg: false },
      });
    } else if (
      statement(password, 'passwordIsValid') &&
      statement(password, 'passwordNotEqualsConfirmPassword') &&
      statement(password, 'passwordLengthLowerConfirmPassword')
    ) {
      dispatch({ type: 'SET_PASSWORD_FIELD', payload: { isValid: true } });
      dispatch({
        type: 'SET_CONFIRM_PASSWORD_FIELD',
        payload: { isValid: false, showErrorMsg: true },
      });
    } else if (
      statement(password, 'passwordIsValid') &&
      statement(password, 'passwordNotEqualsConfirmPassword') &&
      statement(password, 'passwordLengthHigherConfirmPassword')
    ) {
      dispatch({ type: 'SET_PASSWORD_FIELD', payload: { isValid: true } });
      dispatch({
        type: 'SET_CONFIRM_PASSWORD_FIELD',
        payload: { isValid: false, showErrorMsg: false },
      });
    } else if (
      statement(password, 'passwordIsNotValid') &&
      statement(password, 'confirmPasswordIsNotEmpty')
    ) {
      dispatch({ type: 'SET_PASSWORD_FIELD', payload: { isValid: false } });
      dispatch({
        type: 'SET_CONFIRM_PASSWORD_FIELD',
        payload: { isValid: false, showErrorMsg: false },
      });
    } else if (statement(password, 'passwordIsNotValid')) {
      dispatch({ type: 'SET_PASSWORD_FIELD', payload: { isValid: false } });
      dispatch({
        type: 'SET_CONFIRM_PASSWORD_FIELD',
        payload: { isValid: false, showErrorMsg: false },
      });
    }
  };

  const registerConfirmPasswordValidation = (e: React.SyntheticEvent) => {
    const input = e.target as HTMLInputElement;
    const confirmPassword = input.value;
    dispatch({ type: 'SET_CONFIRM_PASSWORD_FIELD', payload: { value: confirmPassword } });

    if (
      statement(state.password.value, 'passwordIsValid') &&
      statement(confirmPassword, 'confirmPasswordNotEqualsPassword') &&
      statement(confirmPassword, 'confirmPasswordLengthHigherPassword')
    ) {
      dispatch({
        type: 'SET_CONFIRM_PASSWORD_FIELD',
        payload: { isValid: false, showErrorMsg: true },
      });
    } else if (
      statement(confirmPassword, 'confirmPasswordIsValid') &&
      statement(confirmPassword, 'confirmPasswordEqualsPassword')
    ) {
      dispatch({
        type: 'SET_CONFIRM_PASSWORD_FIELD',
        payload: { isValid: true, showErrorMsg: false },
      });
    } else {
      dispatch({
        type: 'SET_CONFIRM_PASSWORD_FIELD',
        payload: { isValid: false, showErrorMsg: false },
      });
    }
  };

  return {
    dispatch,
    nameData: state.name,
    emailData: state.email,
    passwordData: state.password,
    confirmPasswordData: state.confirmPassword,
    registerNameValidation,
    registerEmailValidation,
    registerPasswordValidation,
    registerConfirmPasswordValidation,
  };
}
