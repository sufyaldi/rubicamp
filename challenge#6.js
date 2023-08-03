function sentenceManipulation(sentence) {
  const vokal = ['a', 'e','i','o','u'];
  const kata = sentence.toLowerCase().split(' '); 
  const hasil = [];

  for (let i = 0; i < kata.length; i++) {
    const k = kata[i];
    const hurufPertama = k.charAt(0);

    if (vokal.includes(hurufPertama)) {
      hasil.push(k);      
    } else {
      const kataBaru = k.substring(1) + hurufPertama + 'nyo';      
      hasil.push(kataBaru.toLowerCase()); 
    }
  }
  console.log(hasil.join(' '));
}

sentenceManipulation('ibu pergi ke pasar bersamas aku');
