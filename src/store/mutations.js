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

import { steps } from "./state";
import { validators } from "../utils";

const validator = (state) => {
  const { items } = steps[state.step];

  return items.every((item) => validators[item](state.details[item]));
};

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
    if (validator(state)) {
      state.step += 1;
    }
    
    
    console.log("invalid");
    

      

     

    
  },
};
