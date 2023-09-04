import { db } from "../Connector.js";

export default class Matakuliah {
    constructor(obj) {
        this.id_matkul = obj.id_matkul; this.nama = obj.nama;
        this.sks = obj.sks;
    };

    save() {
        db.run("INSERT INTO mata_kuliah (id_matkul, nama, sks) VALUES (?, ?, ?)",
            [this.id_matkul, this.nama, this.sks], (err, data) => {
                if (err) console.log(err)
                else data
            })
    };

    static list() {
        return new Promise(function (resolve, reject) {
            db.all("SELECT * FROM mata_kuliah", (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    };

    static find(idmatkul) {
        return new Promise(function (resolve, reject) {
            db.get("SELECT * FROM mata_kuliah WHERE id_matkul = ?", [idmatkul], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        });
    };

    static add(idmatkul, nama, sks) {
        const matkul = new Matakuliah({ id_matkul: idmatkul, nama: nama, sks: sks });
        return matkul.save()
    };

    static delete(idmatkul) {
        return new Promise(function (resolve, reject) {
            db.run("DELETE FROM mata_kuliah WHERE id_matkul = ?", [idmatkul], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }
}