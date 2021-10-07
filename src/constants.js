export const validationStates = {
  neutral: "neutral",
  invalid: "invalid",
};

export const moviesMap = {
  "Lord of the Rings": "Lord of the Rings",
  "Star Wars": "Star Wars",
};

export const movies = Object.values(moviesMap);

export const nameMin = 2;
export const nameMax = 255;
export const ticketsMin = 1;
export const ticketsMax = 20;

export const availableTimes = {
  0: ["14:00", "18:00", "22:30"],
  1: ["10:30", "14:30", "18:30"],
  2: ["11:30", "15:30", "19:30"],
  3: ["12:00", "16:00", "20:00"],
  4: ["12:30", "16:30", "20:30"],
  5: ["10:40", "14:40", "18:40"],
  6: ["13:00", "17:00", "21:00"],
};

// export const availableTimes = {
//   1: {
//     [moviesMap["Lord of the Rings"]]: ["10:30", "14:30", "18:30"],
//     [moviesMap["Star Wars"]]: ["10:35", "14:35", "18:35"],
//   },
//   2: {
//     [moviesMap["Lord of the Rings"]]: ["11:30", "15:30", "19:30"],
//     [moviesMap["Star Wars"]]: ["11:35", "15:35", "19:35"],
//   },
//   3: {
//     [moviesMap["Lord of the Rings"]]: ["12:00", "16:00", "20:00"],
//     [moviesMap["Star Wars"]]: ["12:05", "16:05", "20:05"],
//   },
//   4: {
//     [moviesMap["Lord of the Rings"]]: ["12:30", "16:30", "20:30"],
//     [moviesMap["Star Wars"]]: ["12:35", "16:35", "20:35"],
//   },
//   5: {
//     [moviesMap["Lord of the Rings"]]: ["10:40", "14:40", "18:40"],
//     [moviesMap["Star Wars"]]: ["10:45", "14:45", "18:45"],
//   },
//   6: {
//     [moviesMap["Lord of the Rings"]]: ["13:00", "17:00", "21:00"],
//     [moviesMap["Star Wars"]]: ["13:05", "17:05", "21:05"],
//   },
//   0: {
//     [moviesMap["Lord of the Rings"]]: ["14:00", "18:00", "22:30"],
//     [moviesMap["Star Wars"]]: ["14:05", "18:05", "22:35"],
//   },
// };
