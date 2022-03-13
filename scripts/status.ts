import {ethers} from "hardhat";

async function main() {
    const network = await ethers.provider.getNetwork();
    const connection = ethers.provider.connection;
    const blockNumber = await ethers.provider.getBlockNumber();
    const accounts = await ethers.provider.listAccounts();
    console.log({network, connection, blockNumber, accounts});
}

main().catch(err => {
    console.error(err);
    process.exitCode = 1;
})
