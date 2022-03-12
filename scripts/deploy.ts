import {ethers} from "hardhat";

async function main() {
    const Hoge = await ethers.getContractFactory("Hoge");
    const hoge = await Hoge.deploy();
    await hoge.deployed();
    console.log("Hoge deployed to:", hoge.address);
    const [owner] = await ethers.getSigners();
    getContractBalance(hoge);
    getOwnerBalance(owner);
    const amount = ethers.utils.parseEther("1.0");
    const tx = {
        to: hoge.address,
        value: amount
    };
    await owner.sendTransaction(tx);
    hr();
    console.log("owner send ether to contract.");
    getContractBalance(hoge);
    getOwnerBalance(owner);
    const getAmount = ethers.BigNumber.from("50000000000000000");
    await hoge.getEther(getAmount);
    hr();
    console.log("owner get ether from contract.");
    getContractBalance(hoge);
    getOwnerBalance(owner);
}

main().catch(err => {
    console.error(err);
    process.exitCode = 1;
})

async function getContractBalance(hoge: any) {
    const balance = await hoge.balance();
    console.log("Contract Balance:", balance);
}

async function getOwnerBalance(owner: any) {
    const balance = await owner.getBalance();
    console.log("Owner Balance:", balance);
}

function hr() {
    console.log("--------------------------");
}