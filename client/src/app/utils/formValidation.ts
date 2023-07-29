export function ValidateName(name: string) {
  return /^\w+\s\w+$/.test(name);
}

export function ValidateEmail(email: string) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

export function ValidatePassword(password: string) {
  return /(?=.*?[A-Z])(?=.*[.@$!%*#?&])(?=.*?[a-z]).{8,25}$/.test(password);
}
