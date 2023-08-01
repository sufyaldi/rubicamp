function stringManipulation(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const firstLetter = word[0].toLowerCase();
  
    if (vowels.includes(firstLetter)) {
      console.log(word); 
    } else {
      console.log(word.slice(1) + firstLetter + 'nyo'); 
    }
  }
stringManipulation('ayam');
stringManipulation('bebek')