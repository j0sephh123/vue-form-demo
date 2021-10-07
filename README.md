## How to start
`npm run dev`  

## Tech
[Vue](https://v3.vuejs.org/)  
[Vite](https://vitejs.dev/)  
[Bulma](https://bulma.io/) - just for simplicity, css is not the main goal here.  
[Vuex](https://next.vuex.vuejs.org)  

[] Prepare  
  [x] cleanup default stuff  
  [x] add bulma to the project  
  [x] add vuex

[] State
  [x] add boilerplate
  [x] extract in different folder

[] Establish the needed components  
  [x] `DatePicker` input type datepicker  
    [x] `npm i vue3-date-time-picker` 
    [x] @input connect to vuex
    [x] @cleared cancel needs to reset date

  [x] `Field`  
    [x] tickets - input type number  
    [x] name - input type text 
    [x] phone - input type tel 
    [x] email - input type email
    [x] dynamic label  
    [x] dynamic type  
    [x] @input connect to vuex
    [x] helperText functionality
    [x] errorText functionality

  [x] `MovieCard`
    [x] add to state
    [x] render multiple
    [x] use card component from bulma
    [x] selected active style  
    [x] dynamic title

  [x] `Summary` - display ticket summary  
  [x] `Button` - move between steps/  submit  


## Comments
Using bulma for css, it seems the quickest to get things done.  
Vuex setup was pretty easy.  
Finding a good datepicker for vue3 seemed hard, I'm not fully satisfied with this one, but I'm trying to be time effecient.  
Really wanted to get into render functions, since I've never used them, but will leave that for other projects.
Will skip `steps` and `summary` components so I can actually finish this.
Validation is obviously the biggest flaw in the app. I don't like how it's done and that's it. Probably needed to use some library, but I'm not really familiar what's good for that. https://vee-validate.logaretm.com/v4/

## Validation
on clicking next, then do the validation, when the user starts typing on an error field, remove the error from it