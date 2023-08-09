const { ethers } = require("hardhat");
const { FXRootContractAbi } = require('../artifacts/FXRootContractAbi.js');
const ABI = require('../artifacts/contracts/Mahabharata.sol/Mahabharata.json');
require('dotenv').config();

async function main() {
  const networkAddress = 'https://eth-goerli.g.alchemy.com/v2/VIkC6xwUWz8l0z78bXGoCkXUjiGGmz52';
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  const wallet = new ethers.Wallet(privateKey, provider);

  const [signer] = await ethers.getSigners();

  const NFT = await ethers.getContractFactory("Mahabharata");
  const nft = await NFT.attach('0xd5F7924231b72E776C680408C8B3B0EE0C96DD89');  //Update the deployement address here

  const fxRootAddress = '0xF9bc4a80464E48369303196645e876c8C7D972de';
  const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

  const tokenIds = [0, 1, 2, 3, 4];

  const approveTx = await nft.connect(signer).setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log('Transfer Approval confirmed');

  for (let i = 0; i < tokenIds; i++) {
    const depositTx = await fxRoot.connect(signer).deposit(
      nft.address,
      wallet.address,
      tokenIds[i],
      '0x6566'
    );

    await depositTx.wait();
  }

  console.log("Approved and deposited");

  const balance = await nft.balanceOf(wallet.address);

  console.log("Mahabharata wallet balance: ", balance.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
