function indexPrime(param1) { 
  function bilPrima(num) {
    if (num <= 1) return false; 
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false; 

    let i = 5;
    while (i * i <= num) { 
      if (num % i === 0 || num % (i + 2) === 0) return false; 
      i += 6;
    }
    return true; 
  }

  let primeCount = 0;
  let num = 2;
  let result;

  while (primeCount < param1) {
    if (bilPrima(num)) {
      result = num;
      primeCount++;
    }
    num++;
  }

  return result;
}

console.log(indexPrime(4));   
console.log(indexPrime(500));  
console.log(indexPrime(37786));