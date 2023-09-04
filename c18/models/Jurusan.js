import { db } from "../Connector.js";

export default class Jurusan {
    constructor(obj) {
        this.id_jurusan = obj.id_jurusan; this.nama = obj.nama
    };

    save() {
        db.run("INSERT INTO jurusan (id_jurusan, nama) VALUES (?, ?)",
            [this.id_jurusan, this.nama], (err, data) => {
                if (err) console.log(err)
                else data
            })
    };

    static list() {
        return new Promise(function (resolve, reject) {
            db.all("SELECT * FROM jurusan", (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    };

    static find(idjurusan) {
        return new Promise(function (resolve, reject) {
            db.get("SELECT * FROM jurusan WHERE id_jurusan = ?", [idjurusan], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        });
    };

    static add(idjurusan, nama) {
        const jurusan = new Jurusan({ id_jurusan: idjurusan, nama: nama });
        return jurusan.save()
    };

    static delete(idjurusan) {
        return new Promise(function (resolve, reject) {
            db.run("DELETE FROM jurusan WHERE id_jurusan = ?", [idjurusan], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }
}