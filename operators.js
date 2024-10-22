// Q:1 arithmetic operators

// add two number
// function sum(){
// let a=12;
// let b=8;
// let c=a+b;
// console.log(c);

// }
// sum() 

// // subtract two number 
// function subtract(){
//     let a=20;
//     let b=5;
//     let c=a-b;
//     console.log(c);
    
// }
// subtract() 
    
// // multiply two number
// function multiplication(){
//     let a=6;
//     let b=8;
//     let c=a*b;
//     console.log(c);
    
// }
// multiplication() 
    
// // divide two  number 
// function division(){
//     let a=16;
//     let b=8;
//     let c=a/b;
//     console.log(c);
    
// }
// division()

// // find the remainder of 29 divided by 6
// function remainder(){
//     let a=29;
//     let b=6;
//     let c=a%b;
//     console.log(c);
    
// }
// remainder()



// //Q:2 comparison operator
// function comparison(){
//     let a=29;
//     let b=6;
//  if(a===b){
//    return true
//  }else{
//    return false
    
//  }
   
    
// }
// console.log(comparison1())


// // compare '10' and 5
// function comparison1(){
//     let a="10";
//     let b=5;
//  if(b!=String){
//    return true
//  }else{
//     return false
    
//  }
   
    
// }
// console.log(comparison1())

// // compare false and 0

// function comparison2(){
//     let a=false;
//     let b=0;
//  if(a==b){
//     return true
//  }else{
//     return false
    
//  }
   
    
// }
// console.log(comparison2())

// // compare true and 1
// function comparison3(){
//     let a=true;
//     let b=1;
//  if(a==b){
//     return true
//  }else{
//     return false
    
//  }
   
    
// }
// console.log(comparison3())

// //compare undefinded an null
// function comparison4(){
//    let a;
//     let b=0;
//  if(a>=b){
//     return true
//  }else{
//     return false
    
//  }
   
    
// }
// console.log(comparison4())

// //Q:3 logical operators



// // logical AND operator

// function logicalOperator(){
//     let a=10;
//     let b=25;
//     let c=10;
//     if((b>a)&&(a==c)){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(logicalOperator());



 // logical OR operator
// function logicalOperator1(){
//    let a=10;
//    let b=25;
//    let c=10;
//    if((b>a)||(a<c)){
//        return true
//    }else{
//        return false
//    }
// }
// console.log(logicalOperator1());





// function logicalOperator2(){
//    let a=10;
//    let b=25;
//    let c=10;
//    if(!(a>b)&&(c>b)){
//        return true
//    }else{
//        return false
//    }
// }
// console.log(logicalOperator2());


// Q:4 assignment Operators

// function sum(){
//    let a=12;
//     a+=5;
//    console.log(a);
   
//    }
//    sum() 
   
//    // subtract two number 
//    function subtract(){
//        let a=20;
//        a-=5;
//        console.log(a);
       
//    }
//    subtract() 
       
//    // multiply two number
//    function multiplication(){
//        let a=6;
//         a*=8;
//        console.log(a);
       
//    }
//    multiplication() 
       
//    // divide two  number 
//    function division(){
//        let a=16;
//        a/=8;
//        console.log(a);
       
//    }
//    division()
   
//    // find the remainder of 29 divided by 6
//    function remainder(){
//        let a=29;
//        a%=4
//        console.log(a);
       
//    }
//    remainder()

//Q:5 ternary operator

//    function ternary(){
//       let a=25;
//       return(a%2===0 ?"Even":"Odd");
//    }
// console.log(ternary());


//Q;6 Operator Precedence


function  Precedence(){
   let result = 10 + 5 * 2 - (3 / 3) + 8;
console.log(result); 
// Expected output:27 

}

Precedence()


// Q:7. Increment and Decrement Operators


function incDec(){
let count =8;
console.log(++count); // Pre-increment: Expected output: 9
console.log(count++); // Post-increment: Expected output: 9
}
