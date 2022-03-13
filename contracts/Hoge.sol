// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.7;

contract Hoge {
    uint public num = 10;
    function getNum() public view returns (uint) {
        return num + 10;
    }
}