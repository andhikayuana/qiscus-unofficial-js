const QiscusApi = require('qiscus-unofficial').QiscusApi

const sdk = new QiscusApi({
    appId: 'sdksample',
    secretKey: '2820ae9dfc5362f7f3a10381fb89afc7a',
    baseUrl: 'https://api3.qiscus.com'
})

sdk.loginOrRegister({
    user_id: 'jarjit@spam4.me',
    password: 'jarjit123!@#',
    username: 'jarjit singh'
}).then(response => {
    console.log(response.data)
}).catch(err => {
    console.log(err)
})