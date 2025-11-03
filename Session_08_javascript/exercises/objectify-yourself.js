let me = {
  name: "Emil",
  age: 24,
  nationality: "Danish",
  speak() {
    console.log(this.name + ' says "Hello!"');
  },
  greet() {
    console.log("Hello, " + this.name);
  }
}

me.greet();
me.speak();
