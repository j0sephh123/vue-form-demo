import { availableTimes } from "../constants";
import Movie from "../components/generic/Movie.vue";
import Datepicker from "../components/generic/Datepicker.vue";
import Time from "../components/generic/Time.vue";
import Summary from "../components/generic/Summary.vue";
import Field from "../components/generic/Field.vue";

export const getters = {
  step: ({ step }) => step,
  values: ({ values }) => values,
  time: ({ values }) => values.time,
  showNextBtn: ({ step }) => step !== 3,
  showPrevBtn: ({ step }) => step !== 1,
  date: ({ values }) => values.date,
  summary: ({ values }) => values,
  times: (state) => {
    // if (state.weekDay && state.values.movie.length > 0) {
    //   return availableTimes[state.weekDay][state.values.movie];
    // }
    return ["10:30", "14:30", "18:30"];
  },

  //first step
  movie: ({ fields }) => fields.movie,
  fields: ({ fields }) => fields,
  currentStep: ({ steps, step }) => (step === 3 ? "Summary" : steps[step]),
  stepItems: (state) => state.steps[state.step]["items"],
  availableSteps: ({ steps }) => Object.keys(steps).length,
  steps: ({ steps }) => steps,

  // components
  movie: () => Movie,
  date: () => Datepicker,
  time: () => Time,
  tickets: () => Field,
  name: () => Field,
  phone: () => Field,
  email: () => Field,
  summary: () => Summary,

  // all
  details: ({ details }) => details,
  components: ({ components }) => components,
  all: ({ fields }) =>
    Object.entries(fields).map(([key, { value }]) => ({ [key]: value })),
};
