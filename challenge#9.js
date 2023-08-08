// function spiral(param1) {
//     let arr = [];
//     let col = 0;
//     let row = 0;
//     let colEnd = param1 - 1 ;
//     let rowEnd = param1 - 1 ;
//     let penampung = 0;

//     for(let h = 0; h < param1; h++) {
//         arr.push([]);
//     }
    
//     for(let i = 0; i < param1; i++) {
//         for(let j = 0; j < param1; j++){
//             arr[i][j] = penampung;
//             penampung++;
//         }
//     }
//     let kurung = [];
//     while(col <= colEnd && row <= rowEnd) {

//         for(let i = col; i <= colEnd; i++) {
//             kurung.push(arr[row][i])
//         }
//         row++;

        
//         for(let i = row; i <= rowEnd; i++) {
//             kurung.push(arr[i][colEnd])
//         }
//         colEnd--;

//         if(row <= rowEnd)   
//         for(let i = colEnd; i >= col; i--) {
//             kurung.push(arr[rowEnd][i])
//         }
//         rowEnd--;

//         if(col <= colEnd) {
//             for(let i = rowEnd; i >= row; i--) {
//             kurung.push(arr[i][col])
//             }
//         col++;
//         }
//     }
//     return kurung;
// }


// console.log(spiral(5))

function spiral(param1) {
    const matriksSpiral = [];
    let nilai = 0;

    const matriks = new Array(param1
        ).fill(null).map(() => new Array(param1
        ).fill(null));

    let brsAwal = 0, brsAkhir = param1
     - 1;
    let klmAwal = 0, klmAkhir = param1
     - 1;

    while (nilai < param1
         * param1
        ) {
        for (let i = klmAwal; i <= klmAkhir; i++) {
            matriks[brsAwal][i] = nilai;
            nilai++;
        }
        brsAwal++;

        for (let i = brsAwal; i <= brsAkhir; i++) {
            matriks[i][klmAkhir] = nilai;
            nilai++;
        }
        klmAkhir--;

        if (brsAwal <= brsAkhir) {
            for (let i = klmAkhir; i >= klmAwal; i--) {
                matriks[brsAkhir][i] = nilai;
                nilai++;
            }
            brsAkhir--;
        }

        if (klmAwal <= klmAkhir) {
            for (let i = brsAkhir; i >= brsAwal; i--) {
                matriks[i][klmAwal] = nilai;
                nilai++;
            }
            klmAwal++;
        }
    }

    const spiralArray = [];
    for (const baris of matriks) {
        for (const nilaiElemen of baris) {
            spiralArray.push(nilaiElemen);
        }
    }

    return spiralArray;
}

console.log(spiral(5));

