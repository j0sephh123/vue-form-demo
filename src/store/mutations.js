import { validator } from "../utils";

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
    const invalidFields = validator(state);

    if (invalidFields.length === 0) {
      state.step += 1;
    } else {
      invalidFields.forEach((field) => {
        console.log(field);
      });
    }
  },
};
