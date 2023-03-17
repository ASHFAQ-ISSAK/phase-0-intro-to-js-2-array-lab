// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
  console.log(cats);
}
destructivelyAppendCat("Ralph");

function destructivelyPrependCat(name) {
  cats.unshift(name);
  console.log(cats);
}
// destructivelyPrependCat("Bob")

function destructivelyRemoveLastCat() {
  cats.pop([3]);
  console.log(cats);
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat() {
  cats.shift([0]);
  console.log(cats);
}


function appendCat(name) {
  let newCats = [...cats, name];
  return newCats;
}

function prependCat(name){
    let newCats = [name,...cats]
    return newCats
}
function removeLastCat(name){
    let newCats = cats.slice(0,-1)
    return newCats
}
function removeFirstCat(name) {
  let newCats = cats.slice(1);
  return newCats;
}
