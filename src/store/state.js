import { markRaw } from "vue";
import MoviesList from "../components/MoviesList.vue";
import Datepicker from "../components/Datepicker.vue";
import Time from "../components/Time.vue";
import Summary from "../components/Summary.vue";
import Field from "../components/Field.vue";

export const movies = ["Lord of the Rings", "Star Wars"];
export const times = ["14:00", "18:00", "22:30"];

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
    valid: true,
  },
  time: {
    label: "Pick a time",
    valid: true,
  },
  date: {
    valid: true,
    label: "Date and time",
  },
  tickets: {
    id: "tickets",
    type: "number",
    helperText: "Pick between 1 and 20",
    label: "Number of tickets",
    valid: true,
  },
  name: {
    id: "name",
    type: "text",
    helperText: "Name must be between 2 and 255 characters",
    label: "Name",
    valid: true,
  },
  phone: {
    id: "phone",
    type: "tel",
    helperText:
      "We support only bulgarian numbers like 0889123456 or +359889123456",
    label: "Phone",
    valid: true,
  },
  email: {
    id: "email",
    type: "email",
    helperText: "asd@gmail.com We will not share your email with anyone else",
    label: "Email",
    valid: true,
  },
  summary: {
    label: "Summary",
    valid: true,
  },
};

export const state = () => {
  return {
    step: 1,
    components,
    steps,
    details,
    fields,
    movies,
    times,
  };
};
