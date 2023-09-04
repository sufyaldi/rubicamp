import { db } from "../Connector.js";
import Mahasiswa from "./Mahasiswa.js";

export default class Dosen {
    constructor(obj) {
        this.nip = obj.nip; this.nama = obj.nama
    };

    save() {
        db.run("INSERT INTO dosen (nip, nama) VALUES (?, ?)", [this.nip, this.nama], (err, data) => {
            if (err) throw err
            else data
        });
    };

    static list() {
        return new Promise(function (resolve, reject) {
            db.all("SELECT * FROM dosen", (err, data) => {
                if (err) reject(err)
                else resolve(data);
            });
        })
    };

    static find(nip) {
        return new Promise(function (resolve, reject) {
            db.get("SELECT * FROM dosen WHERE nip = ?", [nip], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            });
        })
    };

    static add(nip, nama) {
        const dosen = new Dosen({ nip: nip, nama: nama });
        return dosen.save();
    };

    static delete(nip) {
        return new Promise(function (resolve, reject) {
            db.run("DELETE FROM dosen WHERE nip = ?", [nip], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            });
        })
    };
}