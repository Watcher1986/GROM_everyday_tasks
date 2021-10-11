class Sportsman {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(this);
    console.log(`${this.name} is running`);
  }
}

class Swimmer extends Sportsman {
  constructor(name, swimStyle) {
    super(name);
    // this.name = name;
    this.swimStyle = swimStyle;
  }
  swim() {
    console.log('context is ', this);
    console.log(`${this.name} is swimming ${this.swimStyle}`);
  }
}

// test data

const obj1 = {
  name: 'James',
};
console.log(obj1);

const obj = new Sportsman('John');
obj.run();
console.log(obj);

const swimObj = new Swimmer('Mike', 'teststyle');
swimObj.run();
console.log(swimObj);
