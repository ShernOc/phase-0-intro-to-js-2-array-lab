// Write your solution here!
const  cats = 
  ["Milo", "Otis", "Garfield"]; 
 
 console.log(cats); 

// adds another cat to the array 
 function destructivelyAppendCat(name){
    cats.push(name);
 }
// prepends to have the ordered 
 function destructivelyPrependCat(name){
    cats.unshift(name);
 }

// removes 
 function destructivelyRemoveLastCat(){
  cats.pop(); 
 }

// Shifts the Array
function destructivelyRemoveFirstCat(){
  cats.shift();
}

function appendCat(name){
  const NewCats= [...cats]; 
  NewCats.push(name); 
  return NewCats; 
}

function prependCat(name){
  const NewCats= [...cats]; 
  NewCats.unshift(name); 
  return NewCats; 
}

function removeLastCat(){
  const NewCats= [...cats]; 
  NewCats.pop(); 
  return NewCats; 
}

function removeFirstCat(){
  const NewCats= [...cats]; 
  NewCats.shift(); 
  return NewCats; 
}

