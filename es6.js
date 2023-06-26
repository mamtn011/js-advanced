console.log("connected");
// var, let, const...................................
var a = 30;
var a = 40; // var can be decleared many time
console.log(a);
let b = 55;
//let b = 44; // let not be decleared second time
console.log(b);
const c = 34;
//c = 45; // const value not be changed
console.log(c);
//var always is a global but let and const in not.

//Template string.....................................
const name = "Mobin";
const age = 30;
const profession = "Web developer";
const html =
  "My name is: " +
  name +
  "<br>" +
  "I am " +
  age +
  " years old <br>" +
  "I am a " +
  profession;
const html2 = `My name is: <b>${name}</b> <br> I am ${age}<br> I am a ${profession}`; //  template string within backtick(` `)
//document.body.innerHTML = html2;

//Template tagging.....................................
function modify(strings, ...vals) {
  //console.log(arguments);
  let str = "";
  strings.forEach((string, i) => {
    str += `${string}<b>${vals[i] || ""}</b>`;
  });
  return str;
}

const html3 = modify`My name is: ${name} <br> I am ${age}<br> I am a ${profession}`;

//document.body.innerHTML = html3;

// arrow function......................................
/*arrow function doesnt work in an object and arrow function cant understand this keyword. that's why if we need to use this keyword in a function, we must not to write arrow function*/

// Array helper methods.....................................
/* map()...allow 3 parameter 1. a function that return an array with all elements 1by1 2. index number  3. full array */
const ar1 = [1, 2, 3, 4, 5];
const br1 = ar1.map((el) => el * 2);
const br2 = ar1.map((el, ind, fa) => {
  //console.log(ind);
  //console.log(fa);
  return el + 10;
});
console.log(br1);
console.log(br2);

/* filter()...allow 3 parameter 1. a function that return an array with all  true values after checking a condition. 2. index number  3. full array*/
const ar2 = [1, 2, 3, 4, 5, 6, 7, 8];
const br3 = ar2.filter((el) => el % 2 === 0);
console.log(br3);

/* find()...allow 3 parameter 1. a function that return only 1st true value after checking a condition and then it break. 2. index number  3. full array*/
const ar3 = [1, 2, 3, 4, 6, 7, 8, 10];
const br4 = ar3.find((el) => el % 5 === 0);
console.log(br4);

/* findIndex()...allow 3 parameter 1. a function that return only 1st true values index number after checking a condition and then it break.*/
const arr3 = [1, 2, 3, 4, 6, 7, 8, 10];
const brr4 = arr3.findIndex((el) => el % 5 === 0);
console.log(brr4); // like find..just return index number

/* reduce()...allow 4 parameter 1. a variable (you can initialize a value for this variable before the close parenthesis of reduce method). 2. all elements 1by1 3. index number  4. full array ..... after all reduce methods return the variable value.*/
const ar4 = [1, 2, 3, 4];
const br5 = ar4.reduce((product, el) => (product = product * el));
const br6 = ar4.reduce((product, el) => (product *= el), 5); // value initialize
console.log(br5);
console.log(br6);

/* some()...allow 3 parameter 1. a function that return true if a single element satisfy the condition and it break.  otherwise return false (when the condition is true, it returns true and break..otherwise it returns false). 2. index number  3. full array*/
const ar5 = [1, 2, 3, 6, 7, 8, 10];
const br7 = ar5.some((el) => el % 5 === 0);
console.log(br7);

/* every()...allow 3 parameter 1. a function that return true if all elements satisfy the condition otherwise return false 2. index number  3. full array*/
const ar6 = [1, 2, 3, 6, 7, 8, 10, "abc"];
const br8 = ar6.every((el) => typeof el === "number");
console.log(br8);

//array sorting.............................................
//number....
(() => {
  const arr = [12, 34, 4, 6, 9, -4, 0, -7];
  const arrSort1 = arr.sort((a, b) => a - b);
  console.log(arrSort1);
  //or
  const arrSort2 = arr.sort((a, b) => {
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log(arrSort2);

  //object.....
  //by number
  const arrObj = [
    { type: "Volvo", year: 2010 },
    { type: "Alok", year: 2010 },
    { type: "BMW", year: 2001 },
    { type: "Toyota", year: 2007 },
  ];
  const arrObjSort1 = arrObj.sort((a, b) => a.year - b.year);
  console.log(arrObjSort1);
  //by string
  const arrObjSort2 = arrObj
    .map((el) => el) // map for making immutable original array
    .sort((a, b) => {
      //case should be same
      const normalizeA = a.type.toLowerCase();
      const normalizeB = b.type.toLowerCase();
      if (normalizeA > normalizeB) {
        return 1;
      } else if (normalizeA < normalizeB) {
        return -1;
      } else {
        return 0;
      }
    });
  console.log(arrObjSort2);
})();

//  spread operator and rest value.................................

// array and object destruction.........................................
//array destruction
const dArr = [1, 3, 5, "M", "J", undefined, 6, 10, "A"];
//Must should be follow the order
const [da, db, dc, , dd, de = "S", , , , df = "N"] = dArr; // we can store array element in a variable with destructing like this. we can skip element too. after dc we skip 1 el and after de we skip 3 el. we also  can initialize a value who is undefined-look de and df
console.log(da, dc, dd, de, df); // look the array and see output

//object destruction
const dProfile = {
  fName: "Mustakim",
  lName: "Mobin",
  email: "mamtn011@gmail.com",
  fullName() {
    return this.fName + " " + this.lName;
  },
};
// No need to follow the order
const { fName, lName, fullName, email, proffesion = "Student" } = dProfile; // we can destruct an object with key name. we can also initialize undefined key or new key.
console.log(proffesion, email, fName, fullName.call(dProfile)); // fullName should bind for this context..
//nested
const nsObj = {
  myName: "mobin",
  address: {
    vill: {
      post: "Kapaleswar",
    },
  },
};
const {
  address: {
    vill: { post },
  },
} = nsObj;
console.log(post);

// optional chaining..................................................
// opotional chaining allow us to check whethere nested object property available or not
const opChain = {
  myName: "mobin",
  address: {
    vill: {
      post: "Kapaleswar",
    },
  },
};

console.log(opChain.address.vill.post); // here every thig is available. so it is printing the value correctly.
console.log(opChain.address.vill.member); // here 'member' is undefined.
//console.log(opChain.address.upazila.post);
// here show an error, cause, parent of 'post' 'upazila' is not available. to fix this type of problem, we can check whethere the object property available or not with optional chaining.
const opResult = opChain.address?.vill?.post; // available
console.log(opResult);
const opResult2 = opChain.address?.upazila?.post; // not available, so it is undefined
console.log(opResult2);

// symbol() ..........................................................
