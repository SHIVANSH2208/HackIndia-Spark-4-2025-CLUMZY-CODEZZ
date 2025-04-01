require("@nomicfoundation/hardhat-toolbox");


module.exports = {
  solidity: "0.8.28", // Specify the Solidity version
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545", // Ensure Hardhat node is running here
    },
  },
};
