// 30. Write a program to print the given 3 numbers in ascending orders

let numbers=[10,30,20,40,90,5,100,1]
numbers.sort((a,b)=>(a-b)); //=>fat arrow This Method Sort the elements of an array in place, meaning it changes the original array
console.log("Ascendind order",numbers);