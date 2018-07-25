module.exports = {
  app: {
    id: '655c5046-b608-4223-81b6-484f57a2ec7c' //change this to your app's client id
  },
  appWallet: {
    client: {
      //if you have an app wallet, add your client id and secret here
      id: 'YOUR-APP-WALLET-ClIENT-ID',
      secret: 'YOUR-APP-WALLET-SECRET'
    },
    auth: {
      tokenHost: 'https://account.bitski.com',
      tokenPath: '/oauth2/token'
    }
  },
  environments: {
    // development: {
    //   network: 'development', //ethereum network to use for local dev
    //   redirectURL: 'http://localhost:3000/callback.html' //url the popup will redirect to when logged in
    // },
    // production: {
    //   network: 'kovan', //ethereum network to use for production
    //   redirectURL: 'https://mydomain.com/callback.html' //url the popup will redirect to when logged in
    // }
    production: {
      network: 'rinkeby', //ethereum network to use for production
      redirectURL: 'https://localhost:3000/callback.html' //url the popup will redirect to when logged in
    }
  },
  networkIds: {
    kovan: 'kovan',
    rinkeby: 'rinkeby',
    live: 'mainnet',
    development: 'http://localhost:9545' //Update this if you use Ganache or another local blockchain
  }
};
