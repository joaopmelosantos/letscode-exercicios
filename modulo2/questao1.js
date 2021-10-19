const people = [
  { name: 'Angelina Jolie', age: 80 },
  { name: 'Eric Jones', age: 2 },
  { name: 'Paris Hilton', age: 5 },
  { name: 'Kayne West', age: 18 },
  { name: 'Bob Ziroll', age: 100 }
]

const makeString = arr => arr.map(watcher => isUnderAge(watcher))
// for each object of the array people, we call the function isUnderAge()

const isUnderAge = person =>
  person.age < 18
    ? `${person.name} is under age!`
    : `${person.name} can go to The Matrix`
// The function isUnderAge verifies if the propery "age" of the object is < 18
// If it's true, then it'll return the phrase "(the person's name) is under age!"
// If its's not, then it'll return the phrase "(the person's name) can go to The Matrix"

console.log(makeString(people))
