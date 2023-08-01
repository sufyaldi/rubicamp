function stringManipulation(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const firstLetter = word[0].toLowerCase();
  
    if (vowels.includes(firstLetter)) {
      console.log(word); // Jika huruf pertama adalah vokal, cetak string apa adanya
    } else {
      console.log(word.slice(1) + firstLetter + 'nyo'); // Jika huruf pertama adalah konsonan, manipulasi dan cetak hasilnya
    }
  }
stringManipulation('ayam');
stringManipulation('bebek')