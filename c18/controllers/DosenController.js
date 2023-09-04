import { rl } from "../Connector.js";
import { home } from "../c18.js";
import { option, listDosen, findResult } from "../views/DosenViews.js";
import Dosen from "../models/Dosen.js";

export default class DosenController {
    static option() {
        option();
        rl.question("Silahkan masukkan salah satu nomor dari opsi di atas : ", (index) => {
            switch (index) {
                case '1':
                    DosenController.listOf();
                    break;
                case '2':
                    DosenController.search();
                    break;
                case '3':
                    DosenController.add();
                    break;
                case '4':
                    DosenController.delete();
                    break;
                case '5':
                    home();
                    break;
                default:
                    console.log("Nomor yang anda masukkan salah. Silahkan masukkan nomor dengan benar");
                    DosenController.option()
            };
        })
    };

    static async listOf() {
        const dosen = await Dosen.list();
        if (dosen) {
            listDosen(dosen);
            DosenController.option()
        } else {
            console.log("Terjadi kesalahan dalam menampilkan data. Silahkan coba lagi")
            DosenController.option()
        }
    };

    static search() {
        rl.question("Masukkan NIP Dosen : ", async (nip) => {
            const dosen = await Dosen.find(nip);
            if (dosen) {
                findResult(dosen);
                DosenController.option();
            } else {
                console.log(`Dosen dengan NIP ${nip}, tidak terdaftar`);
                DosenController.option();
            }
        })
    };

    static async add() {
        console.log("Lengkapi data di bawah ini :");
        const dosen = await Dosen.list();
        if (dosen) {
            listDosen(dosen);
            rl.question("NIP Dosen : ", (nip) => {
                rl.question("Nama Dosen : ", async (nama) => {
                    if (await Dosen.find(nip)) {
                        console.log("\nGagal menambhakan Dosen. NIP Dosen telah terdaftar");
                        DosenController.option()
                    } else {
                        Dosen.add(nip, nama);
                        console.log("Dosen telah ditambahkan ke database");
                        listDosen(await Dosen.list());
                        DosenController.option()
                    }
                });
            });
        } else {
            console.log("Terjadi kesalahan dalam menampilkan data. Silahkan coba lagi")
            DosenController.option()
        }
    };

    static async delete() {
        const dosenList = await Dosen.list();
        if (dosenList) {
            listDosen(dosenList);
            rl.question("Masukkan NIP Dosen yang ingin dihapus: ", async (nip) => {
                const dosen = await Dosen.find(nip);
                if (dosen) {
                    console.log(`Data Dosen ${dosen.nip}, akan dihapus`);
                    rl.question("Apakah Anda yakin? (yes/no): ", async (confirmation) => {
                        if (confirmation.toLowerCase() === 'yes') {
                            await Dosen.delete(dosen.nip);
                            console.log(`Data Dosen ${dosen.nip}, telah dihapus`);
                        } else {
                            console.log(`Data Dosen ${dosen.nip}, tidak dihapus`);
                        }
                        DosenController.option();
                    });
                } else {
                    console.log("Gagal menghapus data Dosen. NIP Dosen tidak terdaftar");
                    DosenController.option();
                }
            });
        } else {
            console.log("Terjadi kesalahan dalam menampilkan data. Silahkan coba lagi");
            DosenController.option();
        }
    }    
}