
//  Explain the concept of prime numbers and write a function to check if a given number is prime.

// prime num 

//   If a number is divisible only by 1 and itself, then it is a prime number.


const isPrimeNumber=(num)=>{
    if(num===1){
          return `${num} is  not a prime Number`
    }
let isPrime=true;

    for(let i=2;i<=Math.sqrt(num);i++){
       
if(num%i===0){
    isPrime=false
    break;
}
    }
   return isPrime?`${num} is prime Number`:`${num} is not a prime Number`
}

console.log(isPrimeNumber(6))


//  Write a function to find the largest element in an array.

const findLargestElement=(nums)=>{
   
    return nums.reduce((acc,curr)=>acc<curr?curr:acc,0)+" largest element"
}
const arr=[1,2,3,43,62,4];

console.log(findLargestElement(arr))



//  Write a function to find the second largest element in an array.
const findsecondLargestElement=(nums)=>{

const sorted= nums.sort((a,b)=>b-a)
return `${sorted[1]} secondLargest Element`

}

console.log(findsecondLargestElement(arr))


//  Write a function to find the nth Fibonacci number using iteration

const findFibonacciSeries=(n)=>{

const fibonacci=[0,1]

for(let i=0;i<n-2;i++){
let sum=fibonacci[i]+fibonacci[i+1];
fibonacci.push(sum)
}
return fibonacci 
}

const n=6;

console.log(findFibonacciSeries(n))


// Write a function to calculate the factorial of a number using iteration.

const factorialOfNumber=(num)=>{
let result=1;

for(let i=1;i<=num;i++){

    result*=i
}
return result
}

const num=5;
console.log(factorialOfNumber(num))
