let dogs = ["Pitbull","Husky","German Shepherd"];
let cats = new Array("American Curl","Bengal");
let birds = new Array("Cuckoo","Sparrow");

//Copy
let sliceDogs = dogs.slice(1,2);
let copyDogs = [...dogs];
let copyCats = cats.slice(0);

//push and pop
let pushDogs = dogs.push("GrateDen");
let popDogs = dogs.pop();
dogs[dogs.length] = "Mastiff";

//add and remove from start
let addFirst = dogs.unshift("Boxer");
let removeFirst = dogs.shift();

dogs.splice(2,1,"Fighter","Kangal");

// array function
let animals = dogs.concat(cats,birds);
let newAnimal = [...dogs,...birds,...cats].toString();
let sortDogs = dogs.slice(0).sort();
let joinAnimals = animals.join(" ");
console.log("Animals");