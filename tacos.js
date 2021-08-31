const taco = {id:1, name:'chicken', price:20, about:'Yummy'}

const taco1 = {id:2, name:'carne asada', price:18, about:'Tasty'}

const taco2 = {id:3, name:'fish', price:30, about:'So good'}



const tacos = [taco, taco1, taco2]



// write a function that takes an tacoOBJ and a id

// and returns a new object with name changed to "changed"


const update = (tacoOBJ) => {
return { ...tacoOBJ, name: "changed" }
}
console.log(update(taco2)) 



// write a function that takes an tacoOBJ and return some

// formatted html (will be a string technically)


const String = (x) => {
  return '<h1>${x}</h1>'
}
console.log(String(taco))



// write a function that takes an tacoOBJ and return formatted price with

// .00 

const priceUpdate = (tacoOBJ) => {
  newPrice = tacoOBJ.price + ".00"
  return { ...tacoOBJ, price: newPrice }
}
console.log(priceUpdate(taco1))



// create a new array where all of the prices is formatted with .00

const newTaco = priceUpdate(taco)
const newTaco1 = priceUpdate(taco1)
const newTaco2 = priceUpdate(taco2)
const newTacoArray = [ newTaco, newTaco1, newTaco2 ]
console.log(newTacoArray)




// write a function that takes an array and logs each item in the array

// hint forEach


tacos.forEach((tacoN) => {
  console.log (
    `taco: ${tacoN.id} ${tacoN.name} ${tacoN.price} ${tacoN.about}`
  );
});



// use the find method to return the object with id:1

const found = tacos.find( ({id}) => id === 1 );
console.log(found)



// return a new array with all prices greater than 19

const result = tacos.filter(x => x.price > 19);
console.log(result)



// return a new array with a 'about' key where it is a combo of

// name price and about

const aboutUpdate = (tacoOBJ) => {
    newAbout = `${tacoOBJ.name} ${tacoOBJ.price} ${tacoOBJ.about}`
    return { about: newAbout }
  }
  const newAboutT = aboutUpdate(taco)
  const newAboutT1 = aboutUpdate(taco1)
  const newAboutT2 = aboutUpdate(taco2)
  const newAboutTacos = [newAboutT, newAboutT1, newAboutT2]
  console.log(newAboutTacos)






///CRUD

// don't change tacos array or change objects

// can hard code data (Don't need to get it from the users)


// CREATE

const addTaco = (tacoNew) => {
  return [...tacos, tacoNew];
}

taco3 = {id:4, name:'shrimp', price:35, about:'delioso'}

let additionalTaco = addTaco(taco3);
console.log(additionalTaco);




// READ (array of obj to array of html) 

tacos.forEach((tacoNum) => {
  console.log (
    `<h1>taco:</h1> <p>${tacoNum.id} ${tacoNum.name} ${tacoNum.price} ${tacoNum.about}</p>`
  );
});




// Update (update a taco) 

const updateTaco = (taco, newPrice, newDescr) => {
return { ...taco, price: newPrice, about: newDescr }
}
console.log(updateTaco(taco, 10, "amazing")) 





// Remove (delete a taco) 

const deleteTaco = (id) => tacos.filter((taco) => taco.id !== id);
console.log(deleteTaco(2))
console.log(tacos)



// bonus use reduce to return the sum of prices in tacos array

// bonus do in rails

// bonus create you own