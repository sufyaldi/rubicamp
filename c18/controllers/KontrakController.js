import { rl } from "../Connector.js";
import DosenController from "./DosenController.js";
import Matakuliah from "../models/Matakuliah.js";
import { listMatakuliah } from "../views/MatakuliahView.js";
import Mahasiswa from "../models/Mahasiswa.js";
import { listMahasiswa } from "../views/MahasiswaView.js";
import Dosen from "../models/Dosen.js";
import { listDosen } from "../views/DosenViews.js";
import { option, listKontrak, findResult, findKontrak } from "../views/KontrakView.js";
import Kontrak from "../models/Kontrak.js";
import { home, lines } from "../c18.js";

export default class KontrakController {
    static option() {
        option()
        rl.question("Masukkan salah satu nomor dari opsi di atas : ", (index) => {
            switch (index) {
                case '1':
                    KontrakController.listOf();
                    break;
                case '2':
                    KontrakController.search();
                    break;
                case '3':
                    KontrakController.add();
                    break;
                case '4':
                    KontrakController.delete();
                    break;
                case '5':
                    KontrakController.update();
                    break;
                case '6':
                    home();
                    break;
                default:
                    console.log("Nomor yang anda masukkan salah. Silahkan masukkan nomor dengan benar");
                    KontrakController.option()
            }
        });
    };

    static async listOf() {
        const kontrak = await Kontrak.list();
        if (kontrak) {
            listKontrak(kontrak);
            KontrakController.option();
        } else {
            console.log("Terjadi kesalahan dalam menampilkan data. Silahkan coba lagi");
            KontrakController.option();
        }
    };

    static async search() {
        const kontrak = await Kontrak.list();
        if (kontrak) {
            listKontrak(kontrak);
            rl.question("Masukkan NIM Mahasiswa : ", async (nim) => {
                const kontrak = await Kontrak.find(nim)
                if (!kontrak.toString()) {
                    console.log(`Tidak ada kontrak dengan NIM ${nim}`);
                    KontrakController.option();
                } else {
                    console.log(`Daftar kontrak mahasiswa dengan NIM ${nim}`)
                    findResult(kontrak);
                    KontrakController.option();
                }
            });
        } else {
            console.log("Terjadi kesalahan dalam menampilkan data. Silahkan coba lagi");
            KontrakController.option();
        }
    };

    static async add() {
        console.log("Lengkapi data di bawah ini :");
        const mahasiswa = await Mahasiswa.list();
        if (mahasiswa) {
            listMahasiswa(mahasiswa);
            rl.question("Masukkan NIM Mahasiswa : ", async (nim) => {
                // Cek Apakah Mahasiswa terdaftar di tabel Mahasiswa
                const cekMahasiswa = await Mahasiswa.find(nim);
                if (cekMahasiswa) {
                    const matkul = await Matakuliah.list(nim);
                    if (matkul) {
                        listMatakuliah(matkul);
                        rl.question("Masukkan Kode Mata Kuliah : ", async (kode) => {
                            const dosen = await Dosen.list();
                            if (dosen) {
                                listDosen(dosen);
                                rl.question("Masukkan NIP Dosen : ", async (nip) => {
                                    if (await Kontrak.findForAdd(nim, kode)) {
                                        console.log("Gagal menambahkan kontrak. Kontrak telah terdaftar");
                                        KontrakController.option();
                                    } else {
                                        Kontrak.add(nim, kode, nip);
                                        console.log("Kontrak telah ditambahkan ke database");
                                        KontrakController.listOf();
                                        KontrakController.option();
                                    }
                                });
                            } else {
                                console.log("Terjadi kesalahan dalam menampilkan data. Silahkan coba lagi");
                                DosenController.option();
                            }
                        });
                    }
                } else {
                    console.log(`Mahasiswa dengan NIM ${nim} tidak terdaftar.Coba lagi !`);
                    KontrakController.option();
                }
            });
        } else {
            console.log("Terjadi kesalahan dalam menampilkan data. Silahkan coba lagi");
            KontrakController.option();
        }
    }
    
    static delete() {
        rl.question("Masukkan ID Kontrak : ", async (id) => {
            const kontrak = await Kontrak.findForDelete(id)
            if (kontrak) {
                console.log(`Data Kontrak dengan ID ${kontrak.id_kontrak}, telah dihapus`);
                await Kontrak.delete(kontrak.id_kontrak),
                    KontrakController.option();
            } else {
                console.log("Gagal menghapus data Kontrak. ID Kontrak tidak terdaftar");
                KontrakController.option();
            }
        })

    };

    static async update() {
        const kontrak = await Kontrak.list();
        if (kontrak) {
            listKontrak(kontrak);
            rl.question("Masukkan NIM Mahasiswa : ", async (nim) => {
                lines()
                const kontrak = await Kontrak.find(nim)
                if (kontrak.toString()) {
                    console.log(`Detail mahasiswa dengan NIM ${nim}`)
                    findKontrak(kontrak);
                    lines()
                    rl.question("Masukkan ID yang akan diubah nilainya : ", async (id) => {
                        lines()
                        if (await Kontrak.findForUpdate(id, nim)) {
                            rl.question("Masukkan nilai yang baru : ", async (nilai) => {
                                lines()
                                await Kontrak.update(nilai, id, nim)
                                console.log("Nilai telah diupdate")
                                await KontrakController.listOf();
                            })
                        } else {
                            console.log("ID kontrak dan NIM tidak cocok. Silahkan masukkan ID dan NIM dengan benar")
                            KontrakController.option()
                        }
                    })
                } else {
                    console.log(`Tidak ada kontrak dengan NIM ${nim}`);
                    KontrakController.option();
                }
            })
        } else {
            console.log("Terjadi kesalahan dalam menampilkan data. Silahkan coba lagi");
            KontrakController.option();
        }
    };
}