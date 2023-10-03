// code your solution here
// Define the saturdayFun function with a default activity of 'roller-skate'.
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Define the mondayWork function with a default activity of 'go to the office'.
  const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // Define the wrapAdjective function that takes an adjective and a symbol as arguments.
  function wrapAdjective(symbol = "*") {
    return function (adjective) {
      return `You are ${symbol}${adjective}${symbol}!`;
    };
  }
  
  
  
