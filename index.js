// 1. Function declaration
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // 2. Function expression
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // 3. Arrow function returning a function
  const wrapAdjective = (wrapper = "*") => (adjective = "special") => `You are ${wrapper}${adjective}${wrapper}!`;
  
  // Additional functions based on test requirements
  const divide = function() {
    return 2000 / 100;
  };
  
  const square = (x) => x * x;
  
  const add = (a, b) => a + b;
  
  // Functions for first-class functions practice
  function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("I am a named function");
    };
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("I am an anonymous function");
    };
  }
  
  // Export functions for testing
  module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective,
    divide,
    square,
    add,
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
  };