import Table from 'cli-table';
import { lines } from '../c18.js';

export function option() {
    lines()
    console.log(`
silahkan pilih opsi di bawah ini
[1] Daftar Kontrak
[2] Cari Kontrak
[3] Tambah Kontrak
[4] Hapus Kontrak
[5] Update Nilai
[6] Kembali
`)
    lines()
};

export function listKontrak(array) {
    let table = new Table({
        head: ['ID', 'Nim', 'Nama', 'Mata Kuliah', 'Dosen', 'Nilai']
    });
    array.forEach(item => {
        const nama = item.nama || ''; // Mengatasi nilai null dengan string kosong
        table.push([item.id_kontrak, item.nim, item.nama, item.matkul, item.dosen, item.nilai])
    });
    console.log(table.toString())
};

export function findResult(array) {
    let table = new Table({
        head: ['ID', 'Nim', 'Kode Mata Kuliah', 'Nip', 'Nilai']
    });
    array.forEach(item => {
        table.push([item.id_kontrak, item.nim, item.id_matkul, item.nip, item.nilai])
    });
    console.log(table.toString())
};

export function findKontrak(array) {
    let table = new Table({
        head: ['ID', 'Mata Kuliah', 'Nilai']
    });
    array.forEach(item => {
        table.push([item.id_kontrak, item.id_matkul, item.nilai])
    });
    console.log(table.toString())
};
