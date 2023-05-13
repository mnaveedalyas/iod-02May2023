//import { getSum , getMultiply } from './myFunctions.js';

const myfunc = require('./myFunctions')



if (myfunc.getSum(10,20) == 30){
    console.log('getSum -> Test 1 : Passed');
}else{
    console.log('getSum -> Test 1 : Failed')
}

if (myfunc.getSum(20) == 20){
    console.log('getSum -> Test 2 : Passed');
}else{
    console.log('getSum -> Test 2 : Failed')
}

if (myfunc.getSum(20, 0) == 20){
    console.log('getSum -> Test 3 : Passed');
}else{
    console.log('getSum -> Test 3 : Failed')
}

if (myfunc.getSum(20, 10/0) == 20){
    console.log('getSum -> Test 4 : Passed');
}else{
    console.log('getSum -> Test 4 : Failed')
}

if (myfunc.getSum(20, 0/10) == 20){
    console.log('getSum -> Test 5 : Passed');
}else{
    console.log('getSum -> Test 5 : Failed')
}

if (myfunc.getSum("abc", 0/10) == 0){
    console.log('getSum -> Test 6 : Passed');
}else{
    console.log('getSum -> Test 6 : Failed')
}

if (myfunc.getSum("abc", "a23") == 0){
    console.log('getSum -> Test 7 : Passed');
}else{
    console.log('getSum -> Test 7 : Failed')
}

if (myfunc.getMultiply(10,20) == 200){
    console.log('getMultiply -> Test 1 : Passed');
}else{
    console.log('getMultiply -> Test 1 : Failed')
}

if (myfunc.getMultiply(20) == 20){
    console.log('getMultiply -> Test 2 : Passed');
}else{
    console.log('getMultiply -> Test 2 : Failed')
}
