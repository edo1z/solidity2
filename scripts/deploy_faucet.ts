import {ethers} from "hardhat";

async function main() {
    const Faucet = await ethers.getContractFactory("Faucet");
    const faucet = await Faucet.deploy();
    await faucet.deployed();
    console.log("Faucet deployed to:", faucet.address);
    const [owner] = await ethers.getSigners();
    getContractBalance(faucet);
    getOwnerBalance(owner);
    const amount = ethers.utils.parseEther("1.0");
    const tx = {
        to: faucet.address,
        value: amount
    };
    await owner.sendTransaction(tx);
    hr();
    console.log("owner send ether to contract.");
    getContractBalance(faucet);
    getOwnerBalance(owner);
    const getAmount = ethers.BigNumber.from("50000000000000000");
    await faucet.getEther(getAmount);
    hr();
    console.log("owner get ether from contract.");
    getContractBalance(faucet);
    getOwnerBalance(owner);
}

main().catch(err => {
    console.error(err);
    process.exitCode = 1;
})

async function getContractBalance(faucet: any) {
    const balance = await faucet.balance();
    console.log("Contract Balance:", balance);
}

async function getOwnerBalance(owner: any) {
    const balance = await owner.getBalance();
    console.log("Owner Balance:", balance);
}

function hr() {
    console.log("--------------------------");
}