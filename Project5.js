
// Project 5 - Capitalize first letter of name

function CapitalizeName (name){
   const  modifiedName = name.charAt(0).toUpperCase() + name.slice(1);
   return modifiedName
}



let myMotherName = CapitalizeName("sunita");
console.log(myMotherName)

