pragma solidity 0.4.24;

import "../mocks/NFTokenMetadataEnumerableMock.sol";

contract Fanda is NFTokenMetadataEnumerableMock {
    constructor () public
        NFTokenMetadataEnumerableMock("Fandom Badges", "FB") {
    }
}