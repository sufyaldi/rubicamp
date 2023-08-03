// function stringManipulation(word) {
//     const hrfVkl = ['a', 'e', 'i', 'o', 'u'];
//     const hrfPrtm = word[0].toLowerCase();
  
//     if (hrfVkl.includes(hrfPrtm)) {
//       console.log(word); 
//     } else {
//       console.log(word.slice(1) + word[0] + 'nyo'); 
//     }
//   }

// stringManipulation('ayam');
// stringManipulation('bebek')

function stringManipulation(word) {
  const hrfVkl = ['a', 'e', 'i', 'o', 'u'];
  const hrfPrtm = word[0]; // Hapus toLowerCase() agar huruf pertama tetap huruf besar
  
  if (hrfVkl.includes(hrfPrtm.toLowerCase())) {
    console.log(word);
  } else {
    console.log(word.slice(1) + hrfPrtm.toLowerCase() + 'nyo'); // Gunakan toLowerCase() di sini agar kata pertama tetap huruf kecil
  }
}

stringManipulation('Ayam');
stringManipulation('Bebek');