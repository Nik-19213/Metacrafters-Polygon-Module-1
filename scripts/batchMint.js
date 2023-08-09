const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  
  const privateKey = process.env.PRIVATE_KEY;

  const networkAddress = "https://eth-goerli.g.alchemy.com/v2/VIkC6xwUWz8l0z78bXGoCkXUjiGGmz52"; // Update accordingly

  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  const signer = new ethers.Wallet(privateKey, provider);

  const contractAddress = "0xd5F7924231b72E776C680408C8B3B0EE0C96DD89";  //Update the deployement address here

  const Mahabharata = await ethers.getContractFactory("Mahabharata", signer);
  const contract = await Mahabharata.attach(contractAddress);

  await contract.mint(5);

  console.log("Minted 5 Pandava's NFTs");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
