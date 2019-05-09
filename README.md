# CRUISE

In modern agile software development practice, there is a development practice called "Continuous Integration (CI)", which needs to generate  a deployable version at any time, any place. Usually in the actual development, the developer push the code  to the code library, and this will automatically trigger a series of actions, such as code checking, compiling, running testing, packaging. These steps are run through automated scripts to a group of servers, and we would like to create a product like CRUISE, which can easily manage these servers, monitor or set the status.

## REQUIREMENT

- Desktop HD Mockup are **MANDATORY**, other mockups are optional. ✅
- The layout should look **CONSISTENTLY** for IE10+, latest Chrome and Firefox.✅
- Third-party frameworks and libraries are **NOT ALLOWED**.✅
- Webpack/Grunt/Gulp, Babel, SASS/LESS and test libraries are **ALLOWED**.✅

## NICE TO HAVE

- Implement Responsive Design ❎
- Javascript Unit Test ❎

## Project setup
```
yarn
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Mocha Test

`mochapack` fixed https://github.com/zinserjan/mocha-webpack/issues/304

```
yarn test
```
