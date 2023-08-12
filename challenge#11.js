const fs = require("fs");
const readline = require("readline");

// Baca data dari file data.json
const data = fs.readFileSync("data.json", "utf-8");
const obj = JSON.parse(data);

obj.push({"definition": "Sebutkan kota yang memiliki julukan kota Intan ?", "term": "Garut"});

const barisBaca = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Tebakan: ',
});

let indeksPertanyaan = 0;

console.log("Selamat datang di permainan Tebak Kata, silakan isi jawabannya dengan benar!\n");

function tampilPertanyaan(index) {
    console.log("Pertanyaan:", obj[index].definition);
    barisBaca.prompt();
}

tampilPertanyaan(indeksPertanyaan);

barisBaca.on('line', (input) => {
    const jawabPengguna = input.trim().toLowerCase();
    const jawabBenar = obj[indeksPertanyaan].term.toLowerCase();

    if (jawabPengguna === jawabBenar) {
        console.log('Selamat, jawaban Anda benar!\n');
        indeksPertanyaan++;

        if (indeksPertanyaan < obj.length) {
            tampilPertanyaan(indeksPertanyaan);
        } else {
            console.log("Hore, Anda Menang!");
            barisBaca.close();
        }
    } else {
        console.log('Wkwkwkwk, Anda kurang beruntung!\n');
        barisBaca.prompt();
    }
}).on('close', () => {    
    process.exit(0);
});