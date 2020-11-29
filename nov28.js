const people = [ { name: "John Doe", age: 16 },
                 { name: "Thomas Calls", age: 19 },
                 { name: "Liam Smith", age: 20 },
                 { name: "Jessy Pinkman", age: 18 },
                ];
const coffeeLovers = ["John Doe", "Liam Smith", "Jessy Pinkman"];


const ageAbove18 = ((people) => people.filter((person) => person.age > 18)) // takes the people array and filters it to people above and not including 18;
const addCoffeeLoverProperty = (people) => people.map((person) => {person.coffeeLover = coffeeLovers.includes(person.name); return person; }) //adds a coffee lover property to person obj;
const ageReducer = (people) => people.reduce((sum, person) => { return sum + person.age; }, 0);
/* my interpretation is that the two elements at the end seperated by a comma return into the function (sum, person) like a callback. I had to look this one up
because I could not get my code to work without it.
*/
const filterCoffeeLover = (people) => people.filter((person) => person.coffeeLover == true) // takes the coffeeLoversAbove18 array and filters it to person.coffeeLovers == true;
const coffeeLoversAbove18 = (people) => addCoffeeLoverProperty(ageAbove18(people)) // adds the coffeeLover property to all objects that have been filtered thorugh ageAbove18;
const totalAgeOfCoffeeLoversAbove18 = (people) =>  ageReducer(filterCoffeeLover(coffeeLoversAbove18(people))) 
/* The solution took me a while to figure out. Staring at the code and trying different things, then I figure it out. This function returns the coffeeLoversAbove18 array and 
sends it to another custom function called filterCoffeeLover. When done, that is sent to the ageReducer function to be counted. Total result is 20, because 2 of the 4 people are 18 
or younger, and only 1 of the remaining 2 was a coffee lover, and his age is 20.
*/
console.log(totalAgeOfCoffeeLoversAbove18(people))


