let array1 = [1, 2, 3, 4];
array1.push(5,6,7)
console.log(array1)

let array2 = [1, 2, 3, 4];
array2.pop()
console.log(array2)

let array3 = [1, 2, 3, 4];
array3.shift()
console.log(array3)

let array4 = [1, 2, 3, 4];
array4.unshift(0)
console.log(array4)

let array5 = [1, 2, 3, 4, 5, 6, 7];
console.log(array5.slice(2,5))

let array6 = [1, 2, 3, 4, 5, 6, 7];
array6.splice(2, 1, 100)
console.log(array6)

let array7 = [1, 2, 3, 4, 5, 6, 7];
array7.splice(3, 1)
console.log(array7)

let array8 = [1,2,3]
console.log(array8.concat([4,5,6]))

let array9 = ["I", "am", "learning", "JS"]
console.log(array9.join(' '))

let array10 = ["apple", "banana", "orange", "kiwi"]
console.log(array10.indexOf("banana"))

let array11 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array11.indexOf(7))

let array12 = ["apple", "banana", "orange"]
console.log(array12.includes("kiwi"))

let array13 = [1, 2, 3, 4, 6, 7, 8, 9]
console.log(array13.includes(5))

let array14 = [1, 2, 3]
const square = (number) => number ** 2
console.log(array14.map(square));

let array15 = ['apple','oak','sycamore']
const resultArray = array15.map((element) => {
    return element.length;
 });
 console.log(resultArray);
 

let array16 = []
class bmi {
    constructor(height, weight) {
      this.ht = height;
      this.wt = weight;
    }
  }
let Joe = new bmi(68, 155)
let Bob = new bmi(72, 180)
let Gus = new bmi(70, 200)
array16 = [Joe, Bob, Gus]
let lightweight = array16.filter(guy => guy.wt < 200);
console.log(lightweight)


let array17 = ['dogfight', 'train', 'expeditious', 'antimatter', 'fur']
let result = array17.filter(word => word.length > 5);
console.log(result);