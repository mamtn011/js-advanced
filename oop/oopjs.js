// In javascript, a function work as an object and function......
function person() {
  const f1stName = "Mustalim";
  console.log(f1stName);
}
person();
person.lastName = "Al Mobin"; //function as an object
console.log(person.lastName);
person.fullName = function () {
  //function as an object
  console.log("Mustakim Al Mobin");
};
person.fullName();
//console.dir(person); // to see how a function lock like

// Constructor function (Function must to be call with new keyword).........
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(`${this.firstName}${this.lastName} `);
  };
  //console.log(this);
}
const mobin = new Person("Mustakim ", "Al Mobin");
const juyena = new Person("Juyena ", "Sultana");
console.log(mobin.fullName()); //call without prototype
console.log(juyena.fullName()); //call without prototype

Person.prototype.fullNameProto = function () {
  console.log(`${this.firstName}${this.lastName} `);
};
console.log(mobin.fullNameProto()); //call with prototype
console.log(juyena.fullNameProto()); //call with prototype

/* Inheritence...a function inherit all things of another function.. child function have to declare with all parameter of inherit function..and child function have to call inherit function with .call object and with this and all parametrs. */
function Human(firstName, lastName) {
  //inherit function
  this.firstName = firstName;
  this.lastName = lastName;
}
function HumanProf(firstName, lastName, profession) {
  //child function
  Human.call(this, firstName, lastName); //inherit all things of inherit function
  this.profession = profession;
}
HumanProf.prototype.allInfo = function () {
  console.log(`${this.firstName}${this.lastName} ${this.profession} `);
};
const mustakim = new HumanProf("Mustakim ", "Billah", "Businessman");
console.log(mustakim.allInfo());

// Object inherite with Object.create() method.......................
const Obj1 = {
  village: "Kapaleswar",
  postoff: "Kapaleswar",
  Union: "Singhashree",
};
const myObj = Object.create(
  Obj1 /*we can use only inherit object here... Object.create(Obj1);*/,
  {
    upazila: { value: "Kapasia" },
    district: { value: "Gazipur" },
  } /* after inherit an object we have to add extra key+value like this*/
);
myObj.divison = "Dhaka"; // we can also add a key+value like this
console.log(myObj);
console.log(myObj.village);
console.log(myObj.upazila);
console.log(myObj.divison);
//inherit a function from an object...................
const Obj2 = {
  init: function (village, upazila, district) {
    this.village = village;
    this.upazila = upazila;
    this.district = district;
    return this;
    // return (`Village: ${this.village}, Upazila: ${this.upazila}, District: ${this.village}`);
  },
  address: function () {
    console.log(
      `Village: ${this.village}, Upazila: ${this.upazila}, District: ${this.village}`
    );
  },
};
const myObj2 = Object.create(Obj2);
const mobinAd = myObj2.init("Kapaleswar", "Kapasia", "Gazipur");
console.log(myObj2.address());
//console.log(mobinAd);

// Class................||||||||||||||||||||..........................
class MyClass {
  constructor(firstName, lastName) {
    // automatically called
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  static ownProp() {
    // static function not be inherit
    console.log("Hello world!");
  }
  set fname(val) {
    // using set and get method..get and set can be inherit
    this.firstName = val;
  }
  get fname() {
    return this.firstName;
  }
}
// extends
class Profession extends MyClass {
  //a class inherit another class
  constructor(firstName, lastName, profession) {
    super(firstName, lastName); //inherit parent constructor
    this.profession = profession;
  }
  fullNameWp() {
    const withpro = super.fullName(); // call parent function
    return `${withpro} ${this.profession}`;
  }
}
const didar = new MyClass("Didar", "Islam");
console.log(didar.fullName());

//static, set, get...........
MyClass.ownProp(); /*static dont create in object. so that you cant call like this didar.ownProp(); you have to call with class name directly*/
didar.fname = "Mobin"; // set
console.log(didar.fname); // get

//extends class object
const mubarak = new Profession("Mubarak", "Hossain", "Web Developer");
console.log(mubarak.fullName());
console.log(mubarak.fullNameWp());
mubarak.fname = "Mubarak"; // inherit set and get from MyClass
console.log(mubarak.fname);

// getter and setter
class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
    this._celsius = (5 / 9) * (this._fahrenheit - 32);
  }
  // getter
  get temperature() {
    return this._celsius;
  }
  // setter
  set temperature(updatecelsius) {
    return (this._celsius = updatecelsius);
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(thermos.temperature);
console.log(temp);

// this...call(),apply(),bind().................|||||||....................
/*
this kyeword has 4 roles in javascript.  1. global role. 2. object role. 3. spot role. 4. new kyeword role. 
*/

// 1. global role..................
/* if this not use in a custom define object or in a global function then it will global*/
console.log(this === window); // it is true..so that by default this is global

// in a function this ia global on non strict mode
function helloThis1() {
  console.log(this); // here this = window
  this.nameMobin = "Mustakim Al Mobin"; // here the nameMobin is global because of this
}
helloThis1();
console.log(nameMobin); // nameMobin can accessing out side function

// on strict mode this is undefined in a function
function helloThis2() {
  "use strict";
  console.log(this); // here this = undefined because of using strict
}
helloThis2();

// 2. object role..................
/* this in a custom define object is not global. it represents only nearest object properties*/
const myCustomObj1 = {
  name: "Mustakim Al Mobin",
  age: 21,
  job: "Student",
  msg: function () {
    console.log("My name is " + this.name); //here this.name indicate name from myCustomObj1
  },
};
myCustomObj1.msg(); // calling msg function/method from myCustomObj1 object
const myCustomObj2 = {
  name: "Mustakim Al Mobin",
  age: 21,
  job: "Student",
  anotherObj: {
    name: "Juyena Sulatana",
    msg: function () {
      console.log(
        "My name is: " + this.name
      ); /*here this.name indicate name from anotherObj1. because it is the nearet to this*/
    },
  },
};
myCustomObj2.anotherObj.msg();

// 3. spot role..................
/* using call(), apply(), bind() you can set this keyword context and it is called spot role for thih*/
myCustomObj2.anotherObj.msg.call(
  myCustomObj2
); /* here msg() function take data from myCustomObj2 because of spot role of this keyword */

// 4. new keyword role..............
// here this represent the object created by new keyword
const People = function (name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
};
const abul = new People("Abul", 24, "Student"); // here this = abul
const kabul = new People("Kabul", 55, "Student"); // here this = kabul
console.log(kabul.name);
console.log(abul.age);

// call(), apply(), bind() ..............|||||||||||||||||||..............
//these 3 methods used for define this keywords value

/* 
call() can take multiple arguments. 
1st one for context of this and then many others
function called automatically
*/
const myCustomObj3 = {
  name: "Zonayed Ahmed",
  age: 21,
  job: "Student",
  anotherObj: {
    name: "Ahmed Zonayed",
    value: function () {
      console.log("My name is " + this.name);
    },
  },
};
myCustomObj3.anotherObj.value.call(myCustomObj3);
// in between multiple object
const karim = {
  name: "Karim Rahman",
  dob: 1996,
  age: function (currentYear) {
    console.log(this.name + " is " + (currentYear - this.dob) + " years old!");
  },
};
const rahim = {
  name: "Rahim Abdu",
  dob: 1986,
};
karim.age(2022);
karim.age.call(
  rahim,
  2025
); /* here karim can call age method though it hasn't age method*/

/*
apply() almost like call()
just it takes 2 argument 
1st one for this context
2nd one is an array
and this array can contain multiple argument
*/
const karim2 = {
  name: "Karim Rahman",
  dob: 1996,
  age: function (currentYear, msg) {
    console.log(
      this.name + " is " + (currentYear - this.dob) + " years old! " + msg
    );
  },
};
const rahim2 = {
  name: "Rahim Abdu",
  dob: 1986,
};
karim2.age(2022, "Hello Men!");
karim2.age.apply(rahim2, [
  2025,
  "Hi Rahim!",
]); /*apply takes an array as 2nd argument*/

/*
bind() is most usefull
it can take multiple arguments like call. 
1st one for context of this and then many others
argument can pass differently
function dosnt called automatically
*/
karim2.age.bind(rahim2, 2027, " Used bind"); // it dont show anything
const myBind1 = karim2.age.bind(rahim2, 2027, " Used bind");
myBind1();
const myBind2 = karim2.age.bind(rahim2, 2027);
myBind2("Hi Bind"); // argument can pass from here also
const myBind3 = karim2.age.bind(rahim2);
myBind3(2030, "Old Men");
myBind3(2050, " Very Old Men");
