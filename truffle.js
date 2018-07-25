const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "upgrade surround surprise cage swim angle page ladder ability boost horror ability upset bread narrow"
// 0x57e5F8c2f8d8AEd8C73732BAd1b537911e9fA20E

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*",
    },
    rinkeby: {
			provider: function() {
				return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/sZoUPUrIYWbpve0L2tFq", 0);
			},
			network_id: 4
		}
  }
};
