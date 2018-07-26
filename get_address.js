const CLIENTID = "183c85aa-ec18-4267-aada-01825ebdb210";
const SECRET = "182QqonEdP88ALF5[Kk57{f+Da9Du0Tf[N8NJqBCh[BDJb5dvIF5I7kymuOBygs+[V";
// A simple utility to get your app wallet's address
const bignumber = require('bignumber.js');
const BitskiTruffleProvider = require('bitski-truffle-provider');
const Web3 = require('web3');

function getAppWalletAddress(clientID, secret) {
    return new Promise(function(fulfill, reject) {
        const config = {
            client: {
                id: CLIENTID,
                secret: SECRET
            },
            auth: {
                tokenHost: 'https://account.bitski.com',
                tokenPath: '/oauth2/token'
            }
        };
        const provider = new BitskiTruffleProvider("rinkeby", config);
        const web3 = new Web3(provider);
        web3.eth.getAccounts((error, accounts) => {
            if (error) {
                reject(error);
            } else {
                fulfill(accounts[0]);
            }
        });
    });
}
async function doh() {
	const yoess = await getAppWalletAddress();
	console.log(yoess);
}
		
doh();
