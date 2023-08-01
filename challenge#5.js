function stringManipulation(word) {
    const hrfVkl = ['a', 'e', 'i', 'o', 'u'];
    const hrfPrtm = word[0].toLowerCase();
  
    if (hrfVkl.includes(hrfPertama)) {
      console.log(word); 
    } else {
      console.log(word.slice(1) + hrfPrtm + 'nyo'); 
    }
  }
  
stringManipulation('ayam');
stringManipulation('bebek')