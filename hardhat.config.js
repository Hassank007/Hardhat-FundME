require("hardhat-deploy");
require("@nomiclabs/hardhat-ethers")
require("@nomicfoundation/hardhat-verify");
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("hardhat-gas-reporter");
require("solidity-coverage");

SEPOLIA_URL = process.env.SEPOLIA_URL;
PRIVATE_KEY = process.env.PRIVATE_KEY;
ETHERSCAN_APIKEY = process.env.ETHERSCAN_APIKEY;
COINMARKET_APIKEY = process.env.COINMARKET_APIKEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
      blockConfirmation: 6,
    },
  },
  // solidity: "0.8.19",
  solidity: {
    compilers: [
        {
            version: "0.8.19",
        },
        {
            version: "0.6.6",
        },
    ],
},
  etherscan: {
    apiKey: ETHERSCAN_APIKEY,
  },
  gasReporter: {
    enabled: false,
    outputFile: "gas-Reporter.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKET_APIKEY,
  },
  namedAccounts: {
    deployer: {
        default: 0, // here this will by default take the first account as deployer
        1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    }
}
}