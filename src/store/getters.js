import { availableTimes } from "../constants";
import Movie from "../components/generic/Movie.vue";
import Datepicker from "../components/generic/Datepicker.vue";
import Time from "../components/generic/Time.vue";
import Tickets from "../components/generic/Tickets.vue";
import Name from "../components/generic/Name.vue";
import Phone from "../components/generic/Phone.vue";
import Email from "../components/generic/Email.vue";
import Summary from "../components/generic/Summary.vue";

export const getters = {
  step2Fields: (state) =>
    Object.entries(state.fields).filter(
      ([key]) =>
        key !== "tickets" && key !== "date" && key !== "movie" && key !== "time"
    ),
  ticketFields: ({ fields }) => fields.tickets,
  dateFields: ({ fields }) => fields.date,
  step: ({ step }) => step,
  values: ({ values }) => values,
  movieValue: ({ values }) => values.movie,
  time: ({ values }) => values.time,
  showNextBtn: ({ step }) => step !== 3,
  showPrevBtn: ({ step }) => step !== 1,
  date: ({ values }) => values.date,
  movieLabel: (state) => state.fields.movie.label,
  movieError: (state) => state.fields.movie.errorText,
  movieValidity: (state) => state.fields.movie.validityState,
  timeValidity: (state) => state.fields.time.validityState,
  timeErrorText: (state) => state.fields.time.errorText,
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
  firstStep: () => FirstStep,
  secondStep: () => SecondStep,
  steps: ({ steps }) => steps,

  // components
  movie: () => Movie,
  date: () => Datepicker,
  time: () => Time,
  tickets: () => Tickets,
  name: () => Name,
  phone: () => Phone,
  email: () => Email,
  summary: () => Summary,

  // all
  details: ({ details }) => details,
  components: ({ components }) => components,
  all: ({ fields }) =>
    Object.entries(fields).map(([key, { value }]) => ({ [key]: value })),
};
