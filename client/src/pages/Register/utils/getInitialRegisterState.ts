export function getInitialRegisterState(user: any) {
  const format: any = 'bla';

  return {
    firstName: {
      name: 'firstName',
      label: 'Your name',
      value: user?.firstName || '',
      required: true,
      errorMessage: `Invalid firstname`,
      isDirty: false,
      isValid: false,
      formatting: format.formatFirstName,
    },
    email: {
      name: 'email',
      label: 'Email',
      value: user?.email || '',
      required: true,
      errorMessage: 'Email already in use',
      isDirty: false,
      isValid: false,
      formatting: format.lastFirstName,
    },
    password: {
      name: 'password',
      label: 'Password',
      value: user?.password || '',
      required: true,
      errorMessage: 'bad input',
      suggestionText: 'Passwords must be at least 6 characters.',
      isDirty: false,
      isValid: false,
      formatting: format.lastFirstName,
      type: 'password',
    },
    confirmPassword: {
      name: 'confirmPassword',
      label: 'Re-enter password',
      value: user?.confirmPassword || '',
      required: true,
      errorMessage: `Password doesn't match`,
      isDirty: false,
      isValid: false,
      formatting: format.lastFirstName,
      type: 'password',
    },
  };
}
