[Link](https://clever-bhabha-2bb7fb.netlify.app/)

## What is that
Just a demo application using Vue, Vuex, Bulma

## How to start
`npm i && npm run dev`  

## Tech
[Vue](https://v3.vuejs.org/)  
[Vite](https://vitejs.dev/) - just like how quick it is  
[Bulma](https://bulma.io/) - very simple and easy to use  
[Vuex](https://next.vuex.vuejs.org) - always a pleasure to use it even though  just a fraction of its capabilities are used here

## Project structure
`state.steps` - controls which component are shown depending on the step  
`state.details` - to keep input values  
`state.fields` - 
  - `label` and `helperText` are self-explanatory
  - `type` is used to differentiate in `Field` component which input type to render
  - `id` is used for helping save input value in `state.details`
  - `valid` - boolean - if it is not valid, the text becomes red

`state.components` - so we can use `<component :is="">`

## Flow
In App.vue:
- iterate through the `state.steps` to get an array of the current fields that we need to show based on which step are we
- render specfic component for each field defined in `state.components`
**date** is using an external library for datepicker  
**time** is a just a list of tags  
**movie** - just a list of cards  
**tickets**, **name**, **phone**, **email** - just inputs with different type  

On input from the user, state.details is updated with just key,value pair.
We check if the fields are valid only when the user clicks next, if they are not, we color the label in red. When the user starts typing/uses an invalid field, it becomes neutral once again. Validation is only triggered on clicking next.
For the validation logic, on clicking next, we run a specific function for each field, nothing really interesting. You can check `utils.js` validator function. It generates an array with the invalid fields. If it is empty, go to the next step, if it isn't update the invalid fields.

## Comments
I've enjoyed working with Vue and will probably use it for a side project now.