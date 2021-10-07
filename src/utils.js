import { steps } from "./store/state";

export const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

export const validatePhone = (phone) =>
  /(\+)?(359|0)8[789]\d{1}(|-| )\d{3}(|-| )\d{3}/.test(phone);

export const validateLength = (str, min, max) =>
  str.length >= min && str.length <= max;

export const validateNum = (num, min, max) => num >= min && num <= max;

export const validators = {
  movie: (value) => value.length > 0,
  date: (value) => value.length > 0,
  time: (value) => value.length > 0,
  tickets: (value) => validateNum(+value, 1, 20),
  name: (value) => validateLength(value, 2, 255),
  phone: (value) => validatePhone(value),
  email: (value) => validateEmail(value),
};

export const validator = (state) => {
  const { items } = steps[state.step];

  return items.reduce((acc, item) => {
    const isValid = validators[item](state.details[item]);

    if (!isValid) {
      return [...acc, item];
    }

    return acc;
  }, []);
};
