
// models/Mahasiswa.js
import { db } from '../Connector.js';

class Mahasiswa {
  constructor({ nim, nama, alamat, id_jurusan, lahir }) {
    this.nim = nim;
    this.nama = nama;
    this.alamat = alamat;
    this.id_jurusan = id_jurusan;
    this.lahir = lahir;
    

  }
  static async findByJurusan(id_jurusan) {
    return new Promise((resolve, reject) => {
      db.all(
        'SELECT * FROM mahasiswa WHERE id_jurusan = ?',
        [id_jurusan],
        (err, data) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(data);
          }
        }
      );
    });
  }

  async save() {
    return new Promise((resolve, reject) => {
      db.run(
        'INSERT INTO mahasiswa (nim, nama, alamat, id_jurusan, lahir) VALUES (?, ?, ?, ?, ?)',
        [this.nim, this.nama, this.alamat, this.id_jurusan, this.lahir],
        (err) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  }

  static async list() {
    return new Promise((resolve, reject) => {
      db.all(
        'SELECT nim, mahasiswa.nama, lahir, alamat, jurusan.id_jurusan, jurusan.nama AS namajurusan FROM mahasiswa LEFT JOIN jurusan ON mahasiswa.id_jurusan = jurusan.id_jurusan',
        (err, data) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(data);
          }
        }
      );
    });
  }

  static async find(nim) {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM mahasiswa WHERE nim = ?', [nim], (err, data) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  static async add(nim, nama, alamat, id_jurusan, lahir) {
    const mahasiswa = new Mahasiswa({ nim, nama, alamat, id_jurusan, lahir });
    return mahasiswa.save();
  }

  static async delete(nim) {
    return new Promise((resolve, reject) => {
      db.run('DELETE FROM mahasiswa WHERE nim = ?', [nim], (err) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}

export default Mahasiswa;