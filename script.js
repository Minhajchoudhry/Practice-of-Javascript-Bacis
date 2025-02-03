//Taking a number n as a input from user. Creating an array of number from 1 to n.
//Using the reduce method to calculate sum of all number in the array.
// let n = prompt("Enter a number: ");

 let arr = [];

 for(let i=1; i<=n; i++)
 {
     arr[i-1] = i;
 }

 console.log(arr);

 let sum = arr.reduce((res, curr) => {
         return res + curr;
 });

 console.log(sum);

let factorial = arr.reduce((res, curr) => {
     return res * curr;
 });

 console.log(factorial);

//Creating my first Function

let a=5;
let b=10

function myFunc(){
   sum = a + b;
   console.log(sum);
}