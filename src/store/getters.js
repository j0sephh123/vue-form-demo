import Movie from "../components/Movie.vue";
import Datepicker from "../components/Datepicker.vue";
import Time from "../components/Time.vue";
import Summary from "../components/Summary.vue";
import Field from "../components/Field.vue";

export const getters = {
  step: ({ step }) => step,
  showNextBtn: ({ step }) => step !== 3,
  showConfirmBtn: ({ step }) => step === 3,
  showPrevBtn: ({ step }) => step !== 1,
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
  times: ({ times }) => times,
  movies: ({ movies }) => movies,
};
