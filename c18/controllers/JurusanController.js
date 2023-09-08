import { rl } from "../Connector.js";
import Jurusan from "../models/Jurusan.js";
import { option, listJurusan, findResult } from "../views/JurusanView.js";
import { home } from "../c18.js";
import Mahasiswa from "../models/Mahasiswa.js";

export default class JurusanController {
    static option() {
        option()
        rl.question("Masukkan salah satu nomor dari opsi di atas : ", (index) => {
            switch (index) {
                case '1':
                    JurusanController.listOf();
                    break;
                case '2':
                    JurusanController.search();
                    break;
                case '3':
                    JurusanController.add();
                    break;
                case '4':
                    JurusanController.delete();
                    break;
                case '5':
                    home();
                    break;
                default:
                    console.log("Nomor yang anda masukkan salah. Silahkan masukkan nomor dengan benar");
                    JurusanController.option()
            }
        });
    };

    static async listOf() {
        const jurusan = await Jurusan.list();
        if (jurusan) {
            listJurusan(jurusan);
            JurusanController.option();
        } else {
            console.log("Terjadi kesalahan dalam menampilkan data. Silahkan coba lagi");
            JurusanController.option();
        }
    };

    static search() {
        rl.question("Masukkan Kode Jurusan : ", async (kode) => {
            const search = await Jurusan.find(kode);
            if (search) {
                findResult(search);
                JurusanController.option();
            } else {
                console.log(`Jurusan dengan kode ${kode}, tidak terdaftar`);
                JurusanController.option();
            }

        });
    };

    static async add() {
        console.log("Lengkapi data di bawah ini :")
        const jurusan = await Jurusan.list();
        if (jurusan) {
            listJurusan(jurusan);
            rl.question("Kode Jurusan : ", async (kode) => {
                rl.question("Nama Jurusan : ", async (nama) => {
                    if (await Jurusan.find(kode)) {
                        console.log("\nGagal menambhakan Jurusan. Kode Jurusan telah terdaftar");
                        JurusanController.option()
                    } else {
                        Jurusan.add(kode, nama);
                        console.log("Jurusan telah ditambahkan ke database");
                        listJurusan(await Jurusan.list());
                        JurusanController.option();
                    }
                });
            });
        } else {
            console.log("Terjadi kesalahan dalam menampilkan data. Silahkan coba lagi");
            JurusanController.option();
        }
    };

    static async delete() {
        rl.question("Masukkan Kode Jurusan : ", async (kode) => {
            const jurusan = await Jurusan.find(kode);
            if (jurusan) {
                // Check if there are students (Mahasiswa) associated with this Jurusan
                const mahasiswaList = await Mahasiswa.findByJurusan(jurusan.id_jurusan);

                if (mahasiswaList && mahasiswaList.length > 0) {
                    console.log(
                        `Jurusan tidak dapat dihapus. Sudah ada Mahasiswa yang terdaftar pada Jurusan dengan Kode ${kode}.`
                    );
                    JurusanController.option();
                } else {
                    try {

                        await Jurusan.delete(jurusan.id_jurusan);
                        console.log(`Data Jurusan ${kode}, telah dihapus`);
                    } catch (error) {
                        console.log(
                            "Gagal menghapus data Jurusan. Terjadi kesalahan dalam menghapus data"
                        );
                    }
                    JurusanController.option();
                }
            } else {
                console.log("Kode Jurusan tidak terdaftar");
                JurusanController.option();
            }
        });
    }
}
