pragma solidity 0.4.24;

import "./Fanda.sol";

contract TokenManager {
    address public tokenAddr;

    struct fanToken {
        address host;
        uint256 startBlock;
        uint256 endBlock;
        uint256 typeId; 
        uint256 limit;
        uint256 minted;
        string uri;
    }
    mapping(uint256 => fanToken) public fanTokens;

    uint256 public fandaCount;

    constructor () public {
        tokenAddr = new Fanda();
        fandaCount = 0;
    }

    function isTokenManager() public pure returns (bool) {
        return true;
    }

    // TypeId should be less than 2^246
    // A single Fanda can mint upto 1000 tokens
    function openNewFanda(uint256 _typeId, uint256 _durationBlocks, uint256 _limit, string _uri) public {
        require(_typeId != 0);
        require(fanTokens[_typeId].host == address(0));

        fanToken memory newFanda = fanToken({
            host: msg.sender,
            startBlock: block.number,
            endBlock: block.number + _durationBlocks,
            typeId: _typeId,
            limit: _limit,
            minted: 0,
            uri: _uri
        });

        fanTokens[_typeId] = newFanda;

        fandaCount += 1;
    }

    function getFanda(uint256 _typeId) public view 
        returns (address, uint256, uint256, uint256, uint256, uint256, string) {
        fanToken storage ret = fanTokens[_typeId];
        return (ret.host, ret.startBlock, ret.endBlock, ret.typeId, ret.limit, ret.minted, ret.uri);
    }

    function mintFanda(uint256 _typeId) public {
        fanToken storage target = fanTokens[_typeId];
        // require(target.endBlock >= block.number);
        // require(target.limit >= target.minted);

        uint256 tokenId = _typeId * 1000 + target.minted;

        Fanda(tokenAddr).mint(msg.sender, tokenId, target.uri);

        fanTokens[_typeId].minted += 1;
    }

    function tokensOfOwner(address _owner) external view returns(uint256[] ownerTokens) {
        uint256 tokenCount = Fanda(tokenAddr).balanceOf(_owner);

        if (tokenCount == 0) {
            // Return an empty array
            return new uint256[](0);
        } else {
            uint256[] memory result = new uint256[](tokenCount);

            for (uint256 i = 0; i < tokenCount; i++) {
                result[i] = Fanda(tokenAddr).tokenOfOwnerByIndex(_owner, i);
            }

            return result;
        }
    }
}