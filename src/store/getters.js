import Movie from "../components/generic/Movie.vue";
import Datepicker from "../components/generic/Datepicker.vue";
import Time from "../components/generic/Time.vue";
import Summary from "../components/generic/Summary.vue";
import Field from "../components/generic/Field.vue";

export const getters = {
  step: ({ step }) => step,
  values: ({ values }) => values,
  showNextBtn: ({ step }) => step !== 3,
  showPrevBtn: ({ step }) => step !== 1,
  summary: ({ values }) => values,
  fields: ({ fields }) => fields,
  stepItems: ({ steps, step }) => steps[step]["items"],
  availableSteps: ({ steps }) => Object.keys(steps).length,
  steps: ({ steps }) => steps,
  movie: () => Movie,
  date: () => Datepicker,
  time: () => Time,
  tickets: () => Field,
  name: () => Field,
  phone: () => Field,
  email: () => Field,
  summary: () => Summary,
  details: ({ details }) => details,
  components: ({ components }) => components,
};
