import hre from "hardhat";

async function main() {
    const network = await hre.ethers.provider.getNetwork();
    const connection = hre.ethers.provider.connection;
    const blockNumber = await hre.ethers.provider.getBlockNumber();
    const accounts = await hre.ethers.provider.listAccounts();
    console.log({network, connection, blockNumber, accounts});

    console.log("artifacts", hre.artifacts);
    console.log(hre.artifacts.readArtifactSync("Hoge").abi);

    const address = "0x5fbdb2315678afecb367f032d93f642f64180aa3"
    const hoge = await hre.ethers.getContractAt("Hoge", address);
    const num = await hoge.getNum();
    console.log({num});
}

main().catch(err => {
    console.error(err);
    process.exitCode = 1;
})
