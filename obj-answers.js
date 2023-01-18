//1
let person = {
    name: 'Joe',
    age: 40,
    favColor: 'blue'

}
console.log(person.name +', ' + person.age +', '+ person.favColor)


//2
let x = 10;
let y = 20;
let thingy = {x,y};

console.log(thingy.x)
console.log(thingy.y)


//3
function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}
Book.prototype.getTitle = function(){
    return this.title;
}
Book.prototype.getAuthor = function(){
    return this.author;
}
Book.prototype.getPages = function(){
    return this.pages;
}

let moby = new Book('Moby Dick', 'Melville', 600)
let lesmis = new Book('Les Miserables', 'Hugo', 900)

console.log(moby.title)
console.log(moby.pages)
console.log(moby.author)
console.log(lesmis.title)


//4
class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    print_info(){
        console.log(this.make)
        console.log(this.model)
        console.log(this.year)
    }

}
let Civic = new Car('Honda', 'Civic', 2001);
Civic.print_info();


//5
let mailer = {name: 'Bobby', address: {town: 'Madrid', country: 'Spain'}}
console.log(mailer["name"])
console.log(mailer.address.town)


//6
let Citizen = {
    first: "John",
    middle: "Quincy",
    last: "Public"
}
console.log(Citizen.middle);
delete Citizen.middle;
console.log(Citizen);
console.log(Citizen.middle);


//7
let object1 = {
    a: 'something',
    b: 99,
    c: 'blah'
  };
  
  for ([key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }
  

//8
let keysAll = Object.keys(object1)

for (x of keysAll){
    let keySingle = x;
    console.log(keySingle);
}