//* Удаление символов и приведение к нижнему регистру.
let cleanString = [];
function cleaningString() {
  // let string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum sapiente voluptate! Minus odit corrupti nemo at perferendis ipsam recusandae';
  let string = prompt('', 'Type your string')
  console.log(string);
  string = string.replace(/[^a-zа-яё0-9\s]/gi, ' ');
  string = string.replace(/\s+/g, ' ');
  cleanString = string.toLowerCase();
}
cleaningString();
//* Запись элементов строки в массив
let array = [];
let space = ' ';
function splitString(cleanString, space) {
  array = cleanString.split(space);
}
splitString(cleanString, space);

//* Случайное число
let number = prompt('', 'Type your number')
// function randomInteger(min, max) {
//   let rand = min + Math.random() * (max + 1 - min);
//   return rand.toFixed(0);
// }
// let number = randomInteger(1, 10);
// console.log(number);


let result = [];

for (let i = 0; i < array.length; i++) {
  if (array[i].length >= number) {
    result.push(array[i]);
  }

}

console.log(result);
