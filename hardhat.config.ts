import {HardhatUserConfig} from "hardhat/config";
import "@nomiclabs/hardhat-ethers";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      { 
        version: "0.5.4"
      },
      {
        version: "0.8.7"
      }
    ]
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    }
  }
}

export default config;