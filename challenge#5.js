function stringManipulation(word) {
    const hrfVkl = ['a', 'e', 'i', 'o', 'u'];
    const hrfPrtm = word[0].toLowerCase();
  
    if (hrfVkl.includes(hrfPrtm)) {
      console.log(word); 
    } else {
      console.log(word.slice(1) + word[0] + 'nyo'); 
    }
  }

stringManipulation('ayam');
stringManipulation('bebek')