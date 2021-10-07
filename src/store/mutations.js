import {
  validationStates,
  nameMax,
  nameMin,
  ticketsMax,
  ticketsMin,
} from "../constants";
import {
  validateEmail,
  validatePhone,
  validateLength,
  validateNum,
} from "../utils";

export const mutations = {
  updateDate(state, payload) {
    const rawDate = new Date(payload);

    state.weekDay = rawDate.getDay();
    state.details.date = `${rawDate.getDate()}/${rawDate.getMonth()}/${rawDate.getFullYear()}`;
  },
  updateField(state, { key, value }) {
    state.details[key] = value;
  },
  previous(state) {
    state.step -= 1;
  },
  next(state) {
    state.step += 1;

    return;
    if (state.step === 1) {
      let valid = true;

      // movie can't be invalid, it can be NOT selected only
      if (state.values.movie === "") {
        state.fields.movie.validityState = validationStates.invalid;
        valid = false;
      }

      // date can't be invalid, it can be NOT added only
      if (!state.values.date) {
        state.fields.date.validityState = validationStates.invalid;
        valid = false;
      }

      if (state.values.time === "") {
        console.log('state.values.time === ""');
        state.fields.time.validityState = validationStates.invalid;
        valid = false;
      }

      // can be invalid or NOT added
      if (!validateNum(+state.values.tickets, ticketsMin, ticketsMax)) {
        state.fields.tickets.validityState = validationStates.invalid;
        valid = false;
      }

      if (valid) {
        state.step = 2;
      }
    } else if (state.step === 2) {
      let valid = true;

      // name
      if (!validateLength(state.values.name, nameMin, nameMax)) {
        state.fields.name.validityState = validationStates.invalid;
        valid = false;
      }

      if (!validatePhone) {
        state.fields.phone.validityState = validationStates.invalid;
        valid = false;
      }

      if (!validateEmail(state.values.email)) {
        state.fields.email.validityState = validationStates.invalid;
        valid = false;
      }

      if (valid) {
        state.step = 3;
      }
    }
  },
};
