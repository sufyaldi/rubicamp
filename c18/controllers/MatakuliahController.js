import { rl } from "../Connector.js";
import Matakuliah from "../models/Matakuliah.js";
import Kontrak from "../models/Kontrak.js"; 
import { option, listMatakuliah, findResult } from "../views/MatakuliahView.js";
import { home } from "../c18.js";

export default class MatakuliahController {
    static option() {
        option()
        rl.question("Masukkan salah satu nomor dari opsi di atas : ", (index) => {
            switch (index) {
                case '1':
                    MatakuliahController.listOf();
                    break;
                case '2':
                    MatakuliahController.search();
                    break;
                case '3':
                    MatakuliahController.add();
                    break;
                case '4':
                    MatakuliahController.delete();
                    break;
                case '5':
                    home();
                    break;
                default:
                    console.log("Nomor yang anda masukkan salah. Silahkan masukkan nomor dengan benar");
                    MatakuliahController.option()
            }
        });
    };

    static async listOf() {
        const matkul = await Matakuliah.list();
        if (matkul) {
            listMatakuliah(matkul);
            MatakuliahController.option();
        } else {
            console.log("Terjadi kesalahan dalam menampilkan data. Silahkan coba lagi");
            MatakuliahController.option();
        }
    };

    static search() {
        rl.question("Masukkan Kode Mata Kuliah : ", async (kode) => {
            const search = await Matakuliah.find(kode);
            if (search) {
                findResult(search);
                MatakuliahController.option();
            } else {
                console.log(`Mata Kuliah dengan kode ${kode}, tidak terdaftar`);
                MatakuliahController.option();
            }

        });
    };

    static async add() {
        console.log("Lengkapi data di bawah ini :")
        const matkul = await Matakuliah.list();
        if (matkul) {
            listMatakuliah(matkul);
            rl.question("Kode Mata Kuliah : ", (kode) => {
                rl.question("Nama Mata Kuliah : ", (nama) => {
                    rl.question("SKS : ", async (sks) => {
                        if (await Matakuliah.find(kode)) {
                            console.log("\nGagal menambahkan Mata Kuliah. Kode Mata Kuliah telah terdaftar");
                            MatakuliahController.option()
                        } else {
                            Matakuliah.add(kode, nama, sks);
                            console.log("Mata Kuliah telah ditambahkan ke database");
                            listMatakuliah(await Matakuliah.list());
                            MatakuliahController.option();
                        }
                    })
                });
            });
        } else {
            console.log("Terjadi kesalahan dalam menampilkan data. Silahkan coba lagi");
            MatakuliahController.option();
        }
    };

    static async delete() {
        rl.question("Masukkan Kode Mata Kuliah : ", async (kode) => {
            const matkul = await Matakuliah.find(kode);
            if (matkul) {
                // Periksa apakah ada kontrak (Kontrak) yang terkait dengan Mata Kuliah ini
                const kontrakData = await Kontrak.findByMatakuliah(kode);
    
                if (kontrakData && kontrakData.length > 0) {
                    console.log(
                        `Matakuliah dengan Kode ${kode} memiliki data di tabel Kontrak. Tidak dapat dihapus.`
                    );
                    MatakuliahController.option();
                } else {
                    rl.question("Apakah Anda yakin ingin menghapus Mata Kuliah ini? (ya/tidak) : ", async (confirmation) => {
                        if (confirmation.toLowerCase() === "ya") {
                            try {
                                // Tidak ada kontrak terkait, dilanjutkan dengan penghapusan Mata Kuliah
                                await Matakuliah.delete(matkul.id_matkul);
                                console.log(`Data Matakuliah ${kode}, telah dihapus`);
                            } catch (error) {
                                console.log(
                                    "Gagal menghapus data Matakuliah. Terjadi kesalahan dalam menghapus data"
                                );
                            }
                        } else {
                            console.log(`Data Matakuliah ${kode}, tidak dihapus`);
                        }
                        MatakuliahController.option();
                    });
                }
            } else {
                console.log("Kode Mata Kuliah tidak terdaftar");
                MatakuliahController.option();
            }
        });
    }
}
