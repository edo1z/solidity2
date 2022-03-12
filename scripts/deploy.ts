import {ethers} from "hardhat";

async function main() {
    const Hoge = await ethers.getContractFactory("Hoge");
    const hoge = await Hoge.deploy();
    await hoge.deployed();
    console.log("Hoge deployed to:", hoge.address);
}

main().catch(err => {
    console.error(err);
    process.exitCode = 1;
})