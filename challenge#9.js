function spiral(param1) {
    const matriks = [];
    let kolomMulai = 0;
    let barisMulai = 0;
    let kolomAkhir = param1 - 1;
    let barisAkhir = param1 - 1;
    let penampung = 0;

    for (let h = 0; h < param1; h++) {
        matriks.push([]);
    }

    for (let i = 0; i < param1; i++) {
        for (let j = 0; j < param1; j++) {
            matriks[i][j] = penampung;
            penampung++;
        }
    }
    const hasil = [];
    while (kolomMulai <= kolomAkhir && barisMulai <= barisAkhir) {

        for (let i = kolomMulai; i <= kolomAkhir; i++) {
            hasil.push(matriks[barisMulai][i]);
        }
        barisMulai++;

        for (let i = barisMulai; i <= barisAkhir; i++) {
            hasil.push(matriks[i][kolomAkhir]);
        }
        kolomAkhir--;

        if (barisMulai <= barisAkhir) {
            for (let i = kolomAkhir; i >= kolomMulai; i--) {
                hasil.push(matriks[barisAkhir][i]);
            }
        }
        barisAkhir--;

        if (kolomMulai <= kolomAkhir) {
            for (let i = barisAkhir; i >= barisMulai; i--) {
                hasil.push(matriks[i][kolomMulai]);
            }
            kolomMulai++;
        }
    }
    return hasil;
}

console.log(spiral(5));