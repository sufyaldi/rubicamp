function pola(str) {
    let komponen = str.split(' ');
    let angkaPertama = komponen[0];
    let angkaKedua = komponen[2];
    let hasil = komponen[4];  
    for (let i = 0; i < 10; i++){
        for (let j = 0; j < 20; j++) {            
            if (parseInt(angkaPertama.replace('#', i)) * parseInt(angkaKedua) == parseInt(hasil.replace('#', j))) {
                return [i, j];
            }           
        }
    }
}

console.log(pola('42#3 * 188 = 80#204'));  
console.log(pola('8#61 * 895 = 78410#5'));  