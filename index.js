
// function change(){
// document.querySelector("#h")
// .innerHTML="hi vishal"
// }

// var a = "Hello Geeks"
// var b = 10;
// var c = 12;
// var d = b + c;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// let a1 = "Hello learners"
// let b1 = "joining";
// let c1 = " 12";
// let d1 = b1 + c1;

// console.log(a1);
// console.log(b1);
// console.log(c1);
// console.log(d1);

// const a2 = "Hello learners"
// console.log(a2);
// const b2 = 400;
// console.log(b2);

// const c2 = "12";
// console.log(c2);
// Can not change a value for a constant
// c = "new"
// console.log(c) will show error
// let Animals = ["Tiger", "Giraffe", "Horse", "Deer"];
// Animals.push("Zebra");
// Animals.pop;
// console.log(Animals);

// Defining object
// let person = {
// 	first_name: 'Mukul',
// 	last_name: 'Latiyan',

// 	//method
// 	getFunction: function () {
// 		return (`The name of the person is 
// 		${person.first_name} ${person.last_name}`)
// 	},
// 	//object within object
// 	phone_number: {
// 		mobile: '12345',
// 		landline: '6789'
// 	}
// }
// console.log(person.getFunction());
// console.log(person.phone_number.landline);
// Using a constructor


function person(first_name, last_name) {
	this.first_name = first_name;
	this.last_name = last_name;
}
// Creating new instances of person object
let person1 = new person('Mukul', 'Latiyan');
let person2 = new person('Rahul', 'Avasthi');

console.log(person1.first_name);
console.log(`${person2.first_name} ${person2.last_name}`);


