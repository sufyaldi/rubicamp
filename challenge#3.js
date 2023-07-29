function romawi(n){
    let r, angkaDec, angkaRmw, i;
    r = "";
    angkaDec = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    angkaRmw = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
        for (i=0; i < angkaDec.length; i++) { 
        while (n >= angkaDec[i]){  
            n -= angkaDec[i]; 
            r += angkaRmw[i];
        }
    }
    return r;
}

console.log("Script Testing untuk Konversi Romawi"); 
console.log("input | expected | result");
console.log("------|----------|-------");
console.log("4     |IV        |", romawi(4));
console.log("9     |IX        |", romawi(9));
console.log("13    |XIII      |", romawi(13));
console.log("1453  |MCDLIII   |", romawi(1453));
console.log("1646  |MDCXLVI   |", romawi(1646));