console.log("connected");

(() => {
  class Person {
    #_age; // privet property must to decler with #
    constructor(fname, lname, age) {
      (this.fname = fname), (this.lname = lname);
      this.#_age = age;
    }
    fullname() {
      return `${this.fname} ${this.lname}`;
    }
    get age() {
      return this.#_age;
    }
    set age(num) {
      if (num < 18) {
        console.log("You are under aged");
      } else {
        this.#_age = num;
      }
    }
  }

  const mobin = new Person("Mustakim Al", "Mobin", 30);
  console.log(mobin.fullname());
  mobin.age = 12;
  console.log(mobin.age);
})();
