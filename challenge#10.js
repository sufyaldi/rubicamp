const readline = require('node:readline');
const barisBaca = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'tulis kalimatmu disini > ',
});

barisBaca.prompt();

barisBaca.on('line', (line) => {
  const vokal = ['a', 'e','i','o','u'];
  let teks = '';
  const kata = line.split(' ');

  for (let i = 0; i < kata.length; i++) {
    if (vokal.includes(kata[i][0])) {
      teks += kata[i] + ' ';
    } else {
      teks += kata[i].slice(1) + kata[i][0] + 'nyo' + ' ';
    }
  }
  console.log(`hasil konversi: ${teks}`);

  barisBaca.prompt();
}).on('close', () => {
  console.log('Selamat tinggal!');
  process.exit(0);
});