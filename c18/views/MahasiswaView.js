// views/MahasiswaView.js
import Table from 'cli-table';
import { lines } from '../c18.js';

export function option() {
  lines();
  console.log(`
    Silahkan pilih opsi di bawah ini
    [1] Daftar Mahasiswa
    [2] Cari Mahasiswa
    [3] Tambah Mahasiswa
    [4] Hapus Mahasiswa
    [5] Kembali
  `);
  lines();
}

export function listMahasiswa(array) {
  array.sort((a, b) => a.nim.localeCompare(b.nim));
  const table = new Table({
    head: ['Nim', 'Nama', 'Tanggal Lahir', 'Alamat', 'Kode Jurusan', 'Nama Jurusan'],
  });
  array.forEach((item) => {
    table.push([item.nim, item.nama, item.lahir, item.alamat, item.id_jurusan, item.namajurusan]);
  });
  console.log(table.toString());
}

export function findResult(data) {
  lines();
  console.log(`
    Detail mahasiswa dengan Nim '${data.nim}' :
    Nim     : ${data.nim}
    Nama    : ${data.nama}
    Kelahiran : ${data.lahir}
    Alamat  : ${data.alamat}
    Jurusan : ${data.id_jurusan}
  `);
}