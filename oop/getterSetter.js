console.log("connected");

(() => {
  // getter and setter .......................................................
  // getter and setter generally used for validating reinitialized object property..such as...

  const profile1 = {
    name: "Mobin",
    age: 30,
  };
  console.log(profile1); // here age is 30
  profile1.age = 17; // age reinitialized
  console.log(profile1); // here age is 17

  // Now, if we want to prevent reinitilizing age bellow 18, we have to use getter and setter..such as...

  const profile2 = {
    name: "Mustakim",
    _age: 28, // underscore means it should not change
    get age() {
      return this._age;
    },
    set age(num) {
      if (num < 18) {
        console.log("Age bellow 18 is not allowed!");
      } else {
        this._age = num;
      }
    },
  };

  console.log(profile2.age); // age is 28
  profile2.age = 16; // here show error msg and value didnot set because 16 is bellow 18
  console.log(profile2.age); // age is 28 yet

  profile2.age = 20; // set value because 20 is not bellow 18;
  console.log(profile2.age); // age is 20 now

  // *** if anyone try to reinitialize property directly..he can... such as..
  profile2._age = 15;
  console.log(profile2.age);
  // to prevent this we have to use Object.difineProperty()..such as..

  const profile3 = {
    name: "Mobin",
  };
  // adding _age property in profile3 object
  // property descriptor
  Object.defineProperty(profile3, "_age", {
    value: 30, // value of _age key
    writable: true, // reinitialization false
    configurable: false, // further configur of this false
    enumerable: false, // looping false
  });
  profile3._age = 23;
  console.log(profile3._age); // value change becase of writable: true;
  //property accessor
  Object.defineProperty(profile3, "age", {
    get() {
      return this._age;
    },
    set(num) {
      if (num > 17) {
        this._age = num;
        console.log(profile3.age);
      } else {
        console.log("Under aged");
      }
    },
    configurable: false,
    enumerable: false,
  });

  profile3.age = 45;
  //console.log(profile3.age);
})();
