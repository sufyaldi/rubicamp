
function sum() {
  let total = 0;
  for (let if=0; i < arguments.length; i++) {
    total += arguments[i];
  }
return total;
}
console.log(sum(1, 2, 7)); 
console.log(sum(1, 4));    
console.log(sum(11));      
console.log(sum(10, 3, 6, 7, 9)); 

