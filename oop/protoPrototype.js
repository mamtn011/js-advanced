console.log("connected");

(() => {
  const str = "Mobin";
  console.log(str);
  // we can get prototype using string.__proto__ but it is not recommended
  console.log(str.__proto__);
  console.log(str.__proto__.__proto__);
  // or string.prototype ..it is recommended
  console.log(String.prototype);
  console.log(Object.prototype);

  // creating own prototype.......................................

  function Person(fName, lName, age) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
  }
  // prototype creating
  Person.prototype.fullNanme = function () {
    return `${this.fName} ${this.lName}`;
  };
  const mobin = new Person("Mustakim Al", "Mobin", 30);
  console.log(mobin);
  console.log(mobin.fullNanme()); // show fullname from prototype
})();
