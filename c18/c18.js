import { rl } from "./Connector.js";
import loginAccount from './controllers/LogInController.js'
import MahasiswaController from "./controllers/MahasiswaController.js";
import JurusanController from "./controllers/JurusanController.js";
import DosenController from "./controllers/DosenController.js";
import MatakuliahController from "./controllers/MatakuliahController.js";
import KontrakController from "./controllers/KontrakController.js";

export function lines() {
    let line = ''
    for (let i = 0; i < 100; i++) line += '='
    return console.log(line)
}

export function start() {
    lines()
    console.log("Welcome To Universitas Rubicamp\nJl. Cinambo Lorong Mahdi II No. 123")
    lines()

    loginAccount()
}


export function home() {
    lines()
    console.log(`
silahkan pilih opsi dibawah ini
[1] Mahasiswa
[2] Jurusan
[3] Dosen
[4] Mata Kuliah
[5] Kontrak
[6] Keluar
`)
    lines()

    rl.question("Masukkan salah satu nomor diatas : ", (index) => {
        switch (index) {
            case '1':
                MahasiswaController.option()
                break;
            case '2':
                JurusanController.option();
                break;
            case '3':
                DosenController.option();
                break;
            case '4':
                MatakuliahController.option();
                break;
            case '5':
                KontrakController.option()
                break;
            case '6':
                lines();
                console.log('Anda Telah Keluar');
                start();
                break;
            default:
                console.log("Nomor yang anda masukkan salah. Masukkan nomor dengan benar");
                home()
        };
    });
};

start()