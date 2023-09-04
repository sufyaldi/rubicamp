import { rl } from '../Connector.js'
import { account } from "../models/Login.js";
import { home } from "../c18.js";
import { greeting } from "../views/LoginView.js";

export default function loginAccount() {
    rl.question("username: ", async (asnwer) => {
        await account(asnwer).then((x) => {
            if (asnwer == x.username) {
                rl.question("Password: ", (answer2) => {
                    if (answer2 == x.password) {
                        greeting(x)
                        home()
                    }
                    else {
                        console.log('Password salah, silahkan coba lagi')
                        loginAccount()
                    }
                })
            }
        }).catch(() => {
            console.log("Username tdak ditemukan")
            loginAccount()
        })
    })
}