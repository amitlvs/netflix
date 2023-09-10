export const validateFormData = (email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(
    password
  );
  const isNameValid = name?.length >= 4 ? true : false;
  console.log(isNameValid, "huhi");
  if (!isEmailValid) return "Email is Invalid!";
  if (!isPasswordValid) return "Password is Invalid";
  if (!isNameValid && name)
    return "Character should be more than or eqaul to 4";
  return null;
};
