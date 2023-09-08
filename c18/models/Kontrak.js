import { db } from "../Connector.js";

export default class Kontrak {
    constructor(obj) {
        this.nim = obj.nim; this.id_matkul = obj.id_matkul;
        this.nip = obj.nip
    };

    static findByMatakuliah(id_matkul) {
        return new Promise((resolve, reject) => {
            db.all(
                'SELECT * FROM kontrak WHERE id_matkul = ?',
                [id_matkul],
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

    static findByNIP(nip) {
        return new Promise((resolve, reject) => {
            db.all(
                'SELECT * FROM kontrak WHERE nip = ?',
                [nip],
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

    save() {
        db.run("INSERT INTO kontrak (nim , id_matkul, nip) VALUES (?, ?, ?)",
            [this.nim, this.id_matkul, this.nip], (err, data) => {
                if (err) console.log(err)
                else data
            })
    };

    static list() {
        return new Promise(function (resolve, reject) {
            db.all("SELECT id_kontrak, kontrak.nim AS nim, mahasiswa.nama AS nama, mata_kuliah.nama AS matkul, dosen.nama AS dosen, nilai FROM kontrak LEFT JOIN mahasiswa ON kontrak.nim = mahasiswa.nim LEFT JOIN mata_kuliah ON kontrak.id_matkul = mata_kuliah.id_matkul LEFT JOIN dosen ON kontrak.nip = dosen.nip", (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    };

    static find(nim) {
        return new Promise(function (resolve, reject) {
            db.all("SELECT * FROM kontrak WHERE nim = ?", [nim], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        });
    };

    static add(nim, idmatkul, nip) {
        const kontrak = new Kontrak({ nim: nim, id_matkul: idmatkul, nip: nip });
        return kontrak.save()
    };

    static delete(idkontrak) {
        return new Promise(function (resolve, reject) {
            db.run("DELETE FROM kontrak WHERE id_kontrak = ?", [idkontrak], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    };

    static update(nilai, idkontrak, nim) {
        return new Promise(function (resolve, reject) {
            db.run("UPDATE kontrak SET nilai = ? WHERE id_kontrak = ? AND nim = ?", [nilai, idkontrak, nim], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    };

    static findForAdd(nim, idmatkul) {
        return new Promise((resolve, reject) => {
            db.get("SELECT * FROM kontrak WHERE nim = ? AND id_matkul = ?", [nim, idmatkul], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    };

    static findForDelete(id) {
        return new Promise((resolve, reject) => {
            db.get("SELECT * FROM kontrak WHERE id_kontrak = ?", [id], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    };

    static findForUpdate(id, nim) {
        return new Promise((resolve, reject) => {
            db.get("SELECT * FROM kontrak WHERE id_kontrak = ? AND nim = ?", [id, nim], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }
}