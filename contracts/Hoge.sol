// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.7;

contract Hoge {
    address payable admin;

    receive() external payable {}

    constructor() {
        admin = payable(msg.sender);
    }

    function balance() public view returns (uint) {
        return address(this).balance;
    }

    function getEther(uint amount) public payable {
        require(amount <= 1000000000000000000);
        admin.transfer(amount);
    }
}