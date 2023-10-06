export function validateName(name: string) {
  return /^[A-Za-z]+ [A-Za-z]+$/.test(name);
}

export function validateEmail(email: string) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

export function validatePassword(password: string) {
  return /^(?=.*?[A-Z])(?=.*[.@$!%*#?&])(?=.*?[a-z])[^ ]{8,25}$/.test(password);
}
