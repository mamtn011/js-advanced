console.log("connected");

// to declare a privet property we can use Object.defineProperty() and make in writable false (see getterSetter.js)..but in this case it will not manupulatable. to solve this we can have to declare a constructor and create a variable into this ..then have to use  Object.defineProperty() accessor (see getterSetter.js). such as....
(() => {
  function Person(fName, lName, ageVal) {
    this.fName = fName;
    this.lName = lName;
    //this.age = ageVal;
    let _age = ageVal;
    //here we can use Object.defineProperty() accessor to give access of _age
    Object.defineProperty(this, "age", {
      get() {
        return _age;
      },
      set(age) {
        if (age < 18) {
          console.log("Under aged");
        } else {
          _age = age;
        }
      },
    });
  }
  const mobin = new Person("Mustakim Al", "Mobin", 30);
  console.log(mobin); // here age didn't show age because variable in a function can be access only in this function.
  console.log(mobin.age); // initial value 30
  mobin.age = 23;
  console.log(mobin.age); // changed value 23
  // now if anyone try to change mobin._age he cant... and if anyone give a value to mobin.age bellow 18 then it won't set.
})();
