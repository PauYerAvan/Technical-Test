
//Function common multiple number 

function isMultiple(value, mult) {
    let result = value % mult;
    if(result === 0)
        return true;
    else
        return false
}


//Function common multiple of a number

function multiple() {
    
  for(let i = 1; i <= 100; i++) {
      let mult3 = isMultiple(i, 3);
      let mult5 = isMultiple(i, 5);

      if (mult3 & mult5) {
        console.log("cyberclick")
      }
      else if (mult3) {
        console.log("click")
      }
      else if (mult5) {
        console.log("cyber")
      }
      else {
        console.log(i)
      }     
  }
}

console.log(multiple())