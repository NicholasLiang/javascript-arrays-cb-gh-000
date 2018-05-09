chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var addElementToBeginningOfArray = (array, element) => [element, ...array];
var destructivelyAddElementToBeginningOfArray = (array, element) => array.unshift(element);
var addElementToEndOfArray = (array, element) => [...array, element];
var destructivelyAddElementToEndOfArray = (array, element) => array.push(element);
var destructivelyRemoveElementFromBeginningOfArray = (array) => array.shift();







  
//   describe('destructivelyRemoveElementFromBeginningOfArray(array)', ()=>{
//     it('returns the array with the first element removed', () => {
//       expect(destructivelyRemoveElementFromBeginningOfArray([1, 2, 3])).to.eql([2, 3])
//     })
    
//     it('alters the original array', ()=>{
//       const array = [1, 2, 3];
//       destructivelyRemoveElementFromBeginningOfArray(array);
//       expect(array).to.eql([2, 3]);
//     })
//   })

//   describe('removeElementFromBeginningOfArray(array)', () => {
//     it('removes the first element from the array', () => {
//       expect(removeElementFromBeginningOfArray([1, 2, 3])).to.eql([2, 3])
//     })

//     it('does not alter the original array', () => {
//       const array = [1, 2, 3];

//       removeElementFromBeginningOfArray(array);

//       expect(array).to.eql([1, 2, 3]);
//     })
//   })

//   describe('destructivelyRemoveElementFromEndOfArray(array)', () => {
//     it('returns the array with the last element removed', () => {
//       expect(destructivelyRemoveElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
//     })
    
//     it('alters the original array', ()=>{
//       const array = [1, 2, 3];
//       destructivelyRemoveElementFromEndOfArray(array);
//       expect(array).to.eql([1, 2]);
//     })
//   })
  
//   describe('removeElementFromEndOfArray(array)', () => {
//     it('removes the last element from the array', () => {
//       expect(removeElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
//     })
    
//     it('does not alter the original array', () => {
//       const array = [1, 2, 3];
//       removeElementFromEndOfArray(array);
//       expect(array).to.eql([1, 2, 3]);
//     })
//   })
// })