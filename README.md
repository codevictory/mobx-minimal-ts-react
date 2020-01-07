# Minimal MobX React-TypeScript Demo

## Idea
Serve as a minimal possible demostration of MobX capabilities as well as a boilerplate to start from with tech stack of **TypeScript + React + MobX**.

### Stores
Contains and modifies data. 

*@observable*: state to be updated in the *View* (which has *@observer*-decorator)
*@action.bound*: function to call from *View* having a main purpose of modifying *observables*

### Views
Renders data stored in *Stores*.

*@observer*: component to contain *observable* state passed to it as *props*

## Initial run:

* Install Node.js
* `yarn install`
* `yarn start`