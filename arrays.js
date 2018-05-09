chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var addElementToBeginningOfArray = (array, element) => [element, ...array];
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
}
var addElementToEndOfArray = (array, element) => [...array, element];
var destructivelyAddElementToEndOfArray = (array, element) => array.push(element);
var destructivelyRemoveElementFromBeginningOfArray = (array) => array.shift();
var removeElementFromBeginningOfArray = (array) => array.slice(1);
var removeElementFromEndOfArray = (array) => array.slice(0, array.length-1);
var destructivelyRemoveElementFromEndOfArray = (array) => array.pop();
var accessElementInArray = (array, index) => array[index];