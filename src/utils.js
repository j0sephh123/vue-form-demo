export const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

export const validatePhone = (phone) =>
  /(\+)?(359|0)8[789]\d{1}(|-| )\d{3}(|-| )\d{3}/.test(phone);

export const validateLength = (str, min, max) =>
  str.length >= min && str.length <= max;

export const validateNum = (num, min, max) => num >= min && num <= max;
