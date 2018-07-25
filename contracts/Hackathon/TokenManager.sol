pragma solidity 0.4.24;

import "./KP.sol";

contract TokenManager {
    address public tokenAddr;

    constructor () public {
        tokenAddr = new KP();
    }

    function isTokenManager() public pure returns (bool) {
        return true;
    }
}