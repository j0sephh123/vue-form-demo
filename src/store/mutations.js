import { validator } from "../utils";

export const mutations = {
  updateDate(state, payload) {
    if (!state.fields["date"]["valid"]) {
      state.fields["date"]["valid"] = true;
    }

    const rawDate = new Date(payload);

    state.details.date = `${rawDate.getDate()}/${rawDate.getMonth()}/${rawDate.getFullYear()}`;
  },
  updateField(state, { key, value }) {
    if (!state.fields[key]["valid"]) {
      state.fields[key]["valid"] = true;
    }
    state.details[key] = value;
  },
  previous(state) {
    state.step -= 1;
  },
  next(state) {
    const invalidFields = validator(state);

    if (invalidFields.length === 0) {
      state.step += 1;
      return;
    }

    invalidFields.forEach((field) => {
      state.fields[field]["valid"] = false;
    });
  },
};
