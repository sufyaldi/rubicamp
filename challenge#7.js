function weirdMultiply(sentence){
    if (sentence <= 9) {
        return sentence;
      }
          let angkaString = sentence.toString();
      let result = 1;
          for (let i = 0; i < angkaString.length; i++) {
        let digit = parseInt(angkaString[i]);
        result *= digit;
      }
          return weirdMultiply(result);
    }
    
    console.log (weirdMultiply(39));
    console.log (weirdMultiply(999));
    console.log (weirdMultiply(3));