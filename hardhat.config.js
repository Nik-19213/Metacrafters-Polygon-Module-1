require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/uNqpnI0GCfDUmrOZzLZOWxHmvRA_bmi5',
      accounts: [process.env.PRIVATE_KEY],
    },
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/VIkC6xwUWz8l0z78bXGoCkXUjiGGmz52',
      accounts: [process.env.PRIVATE_KEY],
    },
  }
};
