import {ethers} from "hardhat";

async function main() {
    const Hoge = await ethers.getContractFactory("Hoge");
    const hoge = await Hoge.deploy();
    console.log(hoge.deployTransaction);
    await hoge.deployed();
    console.log("Hoge deployed to:", hoge.address);
    console.log(await hoge.hoge());
}

main().catch(err => {
    console.error(err);
    process.exitCode = 1;
})