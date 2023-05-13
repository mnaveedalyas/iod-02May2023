var myname = "Naveed"
let firstname= "Naveed"
let lastname = "alyas"
const aNum = 20;

console.log('my name is :', myname);
console.log('my firstname is :', firstname);
console.log('my lastname is :', lastname);
console.log('aNum is :', aNum);

console.log(' ------------------------- ');

var myname = "Naveed Alyas"

lastname = "David"

// aNum = 50;

console.log('my name is :', myname);
console.log('my lastname is :', lastname);
console.log('aNum is :', aNum);

console.log(' ------------------------- ');
let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
console.log(seas);
console.log('1st item', seas[0]);
console.log('2nd item', seas[1]);
console.log('3rd item', seas[2]);
console.log('total items', seas.length);

console.log(' ---------insert item at begining-------- ');
// insert item at begining
seas.unshift('Red Sea');
console.log(seas);
console.log('total items', seas.length);
console.log(' ----------adding element at end------- ');
// adding element at end of array
seas.push('Red Sea2');
console.log(seas);
console.log('total items', seas.length);

console.log(' -------remove last item---------- ');
// remove last item
const lastElement = seas.pop();
console.log(lastElement);
console.log(seas);
console.log('total items', seas.length);

console.log(' -------remove first item---------- ');
// remove first item
const firstElement = seas.shift();
console.log(firstElement);
console.log(seas);
console.log('total items', seas.length);

console.log(' -------item position---------- ');
// remove first item
let index = seas.indexOf('Caribbean Sea');
console.log('position of Caribbean Sea is', index);


let list = [
  'Black Sea', 
  'Caribbean Sea', 
  'North Sea', 
  'Baltic Sea'
];

console.log(' -------a JSON object---------- ');
let aUser = {
  first_name : "Sammy",
  last_name : "Shark",
  age : 25,
  followers: []
}

console.log('aUser ', aUser);
console.log('aUser.first_name ', aUser.first_name);



