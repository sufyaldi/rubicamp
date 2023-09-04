import { lines } from "../c18.js";

export function greeting(account) {
    lines()
    console.log(`Selamat Datang, ${account.username}. Level Akses Anda Sebagai: ${account.status.toUpperCase()}`)
}