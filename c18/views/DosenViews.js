import Table from 'cli-table';
import { lines } from '../c18.js';

export function option() {
    lines()
    console.log(`
Silahkan pilih opsi di bawah ini
[1] Daftar dosen
[2] Cari Dosen
[3] Tambah Dosen
[4] Hapus Dosen
[5] Kembali
    `)
    lines()
};

export function listDosen(array) {
    const table = new Table({
        head: ["NIP", "Nama"]
    });
    array.forEach(item => { table.push([item.nip, item.nama]) });
    console.log(table.toString());
};

export function findResult(data) {
    lines()
    console.log(`
Detail Dosen dengan NIP '${data.nip}'
NIP Dosen   : ${data.nip}
Nama Dosen  : ${data.nama}
    `)
}