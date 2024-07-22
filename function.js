// function hi(msg){
//     console.log("hi");
//     console.log(msg);
// }
// hi("vishal");

// const arrowsum=(a,b)=>{
//     console.log(a+b);
// }


// function vowels(str){
//     let count=0;
//   for(let char of str){
//    if(char=="a"||char=="i"||char=="o"||char=="o"||char=="u"){
//     count++;
//    }
//   }
//   console.log(count);
// }
// vowels("shobhit university");

// const countvo=(str)=>{
//     let count=0;
//     for(let char of str){
//         if(char=="a"||char=="i"||char=="o"||char=="o"||char=="u"){
//          count++;
//         }
//        }
//        return count;
// }

let arr=[2,3,4,5]

// arr.forEach(function printVal(val){
// console.log(val);
// });
// arr.forEach((val)=>{
// console.log(val*val);
// });

// arr.map(value=>{
// console.log(value);
// });

//  let arr1 =arr.map(value=>{
//    return value;
//     });

// console.log(arr1);

let arr2 =arr.filter(value=>{
    return value%2==0;
     });
 
 console.log(arr2);











