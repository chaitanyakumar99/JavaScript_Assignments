//29. Write a program to print the least number in given three numbers
let num1=100;
let num2=200;
let num3=300;
if(num1<=num2 && num1<=num3){
    console.log(`${num1} is least among 3-Numbers`);
}
else if(num2<=num1 && num2<=num3){
    console.log(`${num2} is least among 3-Numbers`);
}
else{
    console.log(`${num3} is least among 3-Numbers`);
}