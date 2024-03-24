// 28. Write a program to print the greatest number in given three numbers

let num1=500;
let num2=600;
let num3=700;
if(num1>=num2 && num1>=num3){
    console.log(`${num1} is greatest among all 3-Numbers`);
}
else if(num2>=num3 && num3>=num1){
    console.log(`${num2} is greatest among all 3-Numbers`);
}
else{
    console.log(`${num3} is greatest among all 3-Numbers`);
}