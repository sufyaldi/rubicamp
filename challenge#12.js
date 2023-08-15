if(!process.argv[2]) {
    console.log("Tolong sertakan nama file sebagai inputan soal-soalnya, Misalnya \'node c12.js data.json'\. \n")
    process.exit()
}

const fs = require("fs");
const readline = require("readline");
const data = fs.readFileSync(`./${process.argv[2]}`, "utf-8");
const barisBaca = readline.createInterface({
    input:process.stdin, 
    output: process.stdout, 
    prompt: "Jawaban: \n",
});
const obj = JSON.parse(data);

let penampung = 0;
let kesalahan = 0;

obj.push({"definition":"Sebutkan kota yang memiliki julukan kota Intan?", "term":"Garut"});

console.log("Selamat datang di permainan Tebak-tebakan, kamu akan di berikan pertanyaan dari file ini \'data.json'\. untuk bermain, Jawablah dengan jawab yang sesuai.")
console.log("Gunakan skip untuk menangguhkan pertanyaannya, dan di akhir pertanyaan akan ditanyakan lagi. \n")

console.log('pertanyaan: ', obj[penampung].definition)

barisBaca.prompt();

barisBaca.on('line', (jawaban) => {
    if(jawaban.toString() == obj[penampung].term) {
        console.log('Anda beruntung! \n ');
        penampung++;

        if(penampung == obj.length) {
            console.log('Anda berhasil! \n')
            barisBaca.close()
        }
        console.log('Pertanyaan: ', obj[penampung].definition)
    

    } else if(jawaban == "skip") {
        obj.push(obj[penampung])
        console.log('\t')
        penampung++
        console.log('pertanyaan', obj[penampung].definition)
        kesalahan = 0;
    } else {
        kesalahan++;
        console.log(`Anda Kurang Beruntung, anda telah salah ${kesalahan} silahkan coba lagi`)
    }

    barisBaca.prompt()
}).on('close', () => {
    process.exit(0);
})