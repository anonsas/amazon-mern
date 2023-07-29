export type StatementTypes = {
  nameIsValid: boolean;

  emailIsValid: boolean;
  emailIsNotValid: boolean;
  emailShowsErrorMessage: boolean;

  passwordIsValid: boolean;
  passwordIsNotValid: boolean;
  passwordEqualsConfirmPassword: boolean;
  confirmPasswordIsEmpty: boolean;
  passwordNotEqualsConfirmPassword: boolean;
  confirmPasswordIsNotEmpty: number;
  passwordLengthLowerConfirmPassword: boolean;
  passwordLengthHigherConfirmPassword: boolean;

  confirmPasswordIsValid: boolean;
  confirmPasswordNotEqualsPassword: boolean;
  confirmPasswordLengthHigherPassword: boolean;
  passwordIsNotEmpty: number;
  confirmPasswordEqualsPassword: boolean;
};

export type ActionTypes = {
  type: string;
  payload?: {
    value?: string;
    isValid?: boolean;
    showErrorMsg?: boolean;
  };
};
