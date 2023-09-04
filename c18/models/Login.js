import { db } from '../Connector.js'

export const account = (username) => new Promise(function (resolve, reject) {
    db.get(`SELECT * FROM akun WHERE username = ?`, [username], (err, data) => {
        if (err) reject(err)
        else resolve(data)
    })
})