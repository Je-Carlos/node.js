const name = "Jean";
const age = 23;
const hasHobbies = true;
const person = {
  name: "jane",
  age: 20,
  greet() {
    console.log("Hi, I AM " + this.name);
  },
};
const hobbies = ["Sports", "Cooking", 1, true];
for (let hobby of hobbies) {
  console.log(hobby);
}
console.log(hobbies.map((hob) => "hobby: " + hob));

hobbies.push("Programming");
console.log(hobbies);

const copiedArray = [...hobbies];
console.log(copiedArray);

const toArray = (...args) => args;
console.log(toArray(1, 2, 3, 4));

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    "name is " +
    userName +
    ", age is" +
    userAge +
    "and has hobbies: " +
    userHasHobby
  );
};

const add = (a) => a + 1;
const addRndm = () => 1 + 2;

console.log(add(1));
console.log(summarizeUser(name, age, hasHobbies));
person.greet();

const printName = ({ name, greet }) => {
  console.log(name, greet);
};
// const {name, greet} = person;
// console.log(name,age)
printName(person);

setTimeout(() => {
  console.log("Timer is done!");
}, 3000);
