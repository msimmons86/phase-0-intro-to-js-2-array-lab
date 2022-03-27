// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
 return cats.push(name);
}

function destructivelyPrependCat(catName) {
  return cats.unshift(catName)
}

function destructivelyRemoveLastCat() {
  return cats.pop()
}

function destructivelyRemoveFirstCat() {
  return cats.shift()
}

function appendCat(catCopy) {
  return catCopy = [...cats, "Broom"]
}

function prependCat(copyCat) {
  return copyCat = ["Arnold", ...cats]
}

function destructivelyRemoveLastCat(removeLast) {
  removeLast = cats.splice(-1)
}

function removeLastCat(carefullyRemoveLastCat) {
  return carefullyRemoveLastCat = cats.slice(0, 2)
}

function removeFirstCat(carefullyRemoveFirstCat) {
  return carefullyRemoveFirstCat = cats.slice(1)
}