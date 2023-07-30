function indexPrime(param1) {
  function bilPrm(num) { 
    if (num <= 1) {
      return false; 
    }

    for (let i = 2; i <= Math.sqrt(num); i++) { 
      if (num % i === 0) { 
        return false; 
      }
    }

    return true; 
  }

  let count = 0; 
  let number = 2; 

  while (count < param1) { 
    if (bilPrm(number)) { 
      count++; 
    }
    number++;
  }

  return number - 1; 
}
console.log(indexPrime(4))
console.log(indexPrime(500))
console.log(indexPrime(37786))