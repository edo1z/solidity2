// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.7;

contract Faucet {
    address payable admin;

    receive() external payable {}

    constructor() {
        admin = payable(msg.sender);
    }

    function balance() public view returns (uint) {
        return address(this).balance;
    }

    function getEther(uint amount) public payable {
        require(amount <= 0.1 ether);
        admin.transfer(amount);
    }
}