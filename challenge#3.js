function romawi(n){
    let r, angkaDec, angkaRmw, i;
    r = ""; //Variabel r digunakan untuk menyimpan hasil akhir dari konversi angka menjadi huruf Romawi.
    angkaDec = [1000,900,500,400,100,90,50,40,10,9,5,4,1]; //Variabel angkaDec berisi array yang menyimpan nilai desimal untuk setiap simbol huruf Romawi
    angkaRmw = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']; //berisi array yang menyimpan simbol huruf Romawi 
        for (i=0; i < angkaDec.length; i++) { //Loop for digunakan untuk melakukan iterasi melalui setiap elemen dalam array angkaDec.
        while (n >= angkaDec[i]){ //Di dalam loop, menggunakan loop while untuk mengulangi beberapa langkah, Memeriksa apakah angka n lebih besar atau sama dengan nilai desimal saat ini dalam array (angkaDec[i]). 
            n -= angkaDec[i]; 
            r += angkaRmw[i];
        }
    }
    return r; //Setelah selesai loop, fungsi akan mengembalikan hasil akhir berupa huruf Romawi dari angka n yang telah dikonversi dan disimpan di dalam variabel r.
}

console.log("Script Testing untuk Konversi Romawi"); //Hasil output dari console.log() adalah hasil dari konversi beberapa angka ke huruf Romawi yang sesua
console.log("input | expected | result");
console.log("------|----------|-------");
console.log("4     |IV        |", romawi(4));
console.log("9     |IX        |", romawi(9));
console.log("13    |XIII      |", romawi(13));
console.log("1453  |MCDLIII   |", romawi(1453));
console.log("1646  |MDCXLVI   |", romawi(1646));