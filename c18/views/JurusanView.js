import Table from 'cli-table';
import { lines } from '../c18.js';

export function option() {
    lines()
    console.log(`
silahkan pilih opsi di bawah ini
[1] Daftar Jurusan
[2] Cari Jurusan
[3] Tambah Jurusan
[4] Hapus Jurusan
[5] Kembali
`)
    lines()
};

export function listJurusan(array) {
    let table = new Table({
        head: ['Kode Jurusan', 'Nama Jurusan']
    });
    array.forEach(item => {
        table.push([item.id_jurusan, item.nama])
    });
    console.log(table.toString())
};

export function findResult(data) {
    lines()
    console.log(`
Detail Jurusan dengan Kode '${data.id_jurusan}' :
Kode Jurusan     : ${data.id_jurusan}
Nama Jurusan     : ${data.nama}
    `)
};
