module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", 
      port: 8545,
      network_id: "*" // Match any network id
    },
    ganache: {
      host: "127.0.0.1", 
      port: 7545,
      network_id: "*" // Match any network id
    }
  },
  compilers: {
    solc: {
      version: "0.5.3",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
};
