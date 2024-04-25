/*

Array method 
Length - Returns length of array
Push - Add new element to the array
Pop - Remove last element of the array
Shift - 
Unshift
includes - Check if element is exist in the array
indexOf - Returns the index of the array element
join - Convert array into the string

*/

const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9];

console.log("Array length is: " +arr1.length);

arr1.push(99);
console.log("Pushing new element to the array: "+arr1);

arr1.pop()
console.log('Last element removed: ' +arr1);

arr1.shift();
console.log('First element removed: ' +arr1);

arr1.unshift(10);
console.log('Inserted new element at the first position: ' +arr1);


console.log('Checking that 10 is available in the given array: '+ arr1.includes(10));
console.log('Checking Indext: '+ arr1.indexOf(5));

