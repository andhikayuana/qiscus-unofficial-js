import axios from 'axios'

export class QiscusApi {
    constructor({
        appId = null,
        secretKey = null,
        baseUrl = null
    }) {

        if (appId == null) {
            throw 'please setup valid appId first';
        }

        if (secretKey == null) {
            throw 'please setup valid secretKey first';
        }

        if (baseUrl == null) {
            throw 'please setup valid baseUrl first';
        }

        this.appId = appId
        this.secretKey = secretKey
        this.baseUrl = baseUrl

        this.client = axios.create({
            baseURL: baseUrl,
            headers: {
                'accept': 'application/json'
            }
        })
    }

    loginOrRegister({ user_id, password, username }) {
        return this.client.post('/api/v2.1/rest/login_or_register', arguments[0])
    }




}

// module.exports = QiscusApi
