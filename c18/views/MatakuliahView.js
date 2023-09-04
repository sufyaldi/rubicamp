import Table from 'cli-table';
import { lines } from '../c18.js';

export function option() {
    lines()
    console.log(`
silahkan pilih opsi di bawah ini
[1] Daftar Mata Kuliah
[2] Cari Mata Kuliah
[3] Tambah Mata Kuliah
[4] Hapus Mata Kuliah
[5] Kembali
`)
    lines()
};

export function listMatakuliah(array) {
    let table = new Table({
        head: ['Kode Mata Kuliah', 'Nama Mata Kuliah', 'SKS']
    });
    array.forEach(item => {
        table.push([item.id_matkul, item.nama, item.sks])
    });
    console.log(table.toString())
};

export function findResult(data) {
    lines()
    console.log(`
Detail Mata Kuliah dengan Kode '${data.id_matkul}' :
Kode Mata Kuliah     : ${data.id_matkul}
Nama Mata Kuliah     : ${data.nama}
SKS                  : ${data.sks}
    `)
};
