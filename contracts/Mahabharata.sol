// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract Mahabharata is ERC721A{

    address public owner;

    // Maximum number of NFT's that can be minted should be 5
    uint256 public maxQuantityOf_NFTs = 5;     // as there were only 5 Pandavas in Mahabharata

    string baseUrl = "https://app.pinata.cloud/pinmanager#";    // Update accordingly

    
    string public prompt =
        "Create a Eye capturing NFT artwork for Pandavas warrior of Mahbharat war."; 
        // Prompt description used to generate the Ai images

    constructor() ERC721A("Pandavas", "PND") {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner is allowed to perform this function");
        _;
    }

    function mint(uint256 amount) external payable onlyOwner{
        require(totalSupply() + amount <= maxQuantityOf_NFTs ,"You can not mint more than 5 NFTs");
        _mint(msg.sender, amount);
    }

    function _baseURI() internal view override returns (string memory){
        return baseUrl;
    }

    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}
