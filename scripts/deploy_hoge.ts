import {ethers} from "hardhat";

async function main() {
    const Hoge = await ethers.getContractFactory("Hoge");
    const hoge = await Hoge.deploy();
    await hoge.deployed();
    const result = await hoge.getNum();
    console.log("result:", result);
}

main().catch(err => {
    console.error(err);
    process.exitCode = 1;
})
