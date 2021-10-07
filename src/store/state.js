import { markRaw } from "vue";
import { validationStates } from "../constants";
import MoviesList from "../components/generic/MoviesList.vue";
import Datepicker from "../components/generic/Datepicker.vue";
import Time from "../components/generic/Time.vue";
import Summary from "../components/generic/Summary.vue";
import Field from "../components/generic/Field.vue";

export const steps = {
  1: {
    component: "firstStep",
    items: ["movie", "date", "time", "tickets"],
  },
  2: {
    component: "secondStep",
    items: ["name", "phone", "email"],
  },
  3: {
    component: "summary",
    items: ["summary"],
  },
};

export const components = {
  summary: markRaw(Summary),
  time: markRaw(Time),
  movie: markRaw(MoviesList),
  date: markRaw(Datepicker),
  tickets: markRaw(Field),
  name: markRaw(Field),
  phone: markRaw(Field),
  email: markRaw(Field),
};

export const details = {
  summary: "",
  time: "",
  movie: "",
  date: "",
  tickets: "",
  name: "",
  phone: "",
  email: "",
};

export const fields = {
  movie: {
    selected: false,
    label: "Pick a movie",
    validityState: validationStates.neutral,
    errorText: "Please select a movie",
  },
  time: {
    label: "Pick a time",
    validityState: validationStates.neutral,
    errorText: "Please select a time",
  },
  date: {
    validityState: validationStates.neutral,
    errorText: "Please enter a valid a date",
    label: "Date and time",
  },
  tickets: {
    id: "tickets",
    type: "number",
    errorText: "Invalid number of tickets",
    helperText: "Pick between 1 and 20",
    label: "Number of tickets",
    validityState: validationStates.neutral,
  },
  name: {
    id: "name",
    type: "text",
    errorText: "Invalid name length",
    helperText: "Name must be between 2 and 255 characters",
    label: "Name",
    validityState: validationStates.neutral,
  },
  phone: {
    id: "phone",
    type: "tel",
    errorText: "Invalid phone",
    helperText:
      "We support only bulgarian numbers like 0889123456 or +359889123456",
    label: "Phone",
    validityState: validationStates.neutral,
  },
  email: {
    id: "email",
    type: "email",
    errorText: "Please enter a valid email",
    helperText: "We will not share your email with anyone else",
    label: "Email",
    validityState: validationStates.neutral,
  },
  summary: {
    label: "Summary",
  },
};

export const state = () => {
  return {
    step: 1,
    weekDay: null,
    components,
    steps,
    details: { ...details },
    fields: { ...fields },
  };
};
