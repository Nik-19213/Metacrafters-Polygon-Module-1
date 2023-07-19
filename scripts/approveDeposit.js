const { ethers } = require("hardhat");
const { FXRootContractAbi } = require('../artifacts/FXRootContractAbi.js');
const ABI = require('../artifacts/contracts/Mahabharata.sol/Mahabharata.json');
require('dotenv').config();

async function main() {
  const networkAddress = 'https://eth-goerli.g.alchemy.com/v2/VIkC6xwUWz8l0z78bXGoCkXUjiGGmz52';
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  const [signer] = await ethers.getSigners();

  const NFT = await ethers.getContractFactory("Mahabharata");
  const nft = await NFT.attach('0xA454A43147f0B1bCb69f0DF939eF76CC2599b210');  //Update the deployement address here

  const fxRootAddress = '0xF9bc4a80464E48369303196645e876c8C7D972de';
  const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

  const tokenIds = [0, 1, 2, 3, 4];

  const approveTx = await nft.connect(signer).setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log('Transfer Approval confirmed');

  // Replace this with the actual Mumbai addresses obtained from mapping

  const receiverMumbaiAddress = '0xE430EA707bEFb29F478674310833b7D7e697F147'; // Mumbai address

  for (let i = 0; i < tokenIds.length; i++) {
    const tokenId = tokenIds[i];


    const depositTx = await fxRoot.connect(signer).deposit(
      nft.address,
      receiverMumbaiAddress,
      tokenId,
      '0x6566'
    );

    await depositTx.wait();
    console.log(`NFT ${tokenId} transferred and deposited to Mumbai address ${receiverMumbaiAddress}`);
  }

  console.log("Approved and deposited");

  const nft2 = await NFT.attach('0xE430EA707bEFb29F478674310833b7D7e697F147');

  const balance = await nft2.balanceOf(receiverMumbaiAddress);
  console.log("Mahabharata wallet balance", receiverMumbaiAddress, "is: ", balance.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
