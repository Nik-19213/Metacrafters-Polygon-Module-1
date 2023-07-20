# Polygon Mapping 🌍 and Bridging 🎢🔗

In this project, we wil deploy an NFT collection on the Ethereum blockchain - goerli testnet, Map the collection to Polygon Mumbai network, and Transfer assets over via the Polygon Bridge using FXportal Bridging.

## Contract Info 📑

This ERC721A contract named Mahabharata, as the name suggest is made on the theme of MAHABHARATA WAR , which is basically designed to mint 5 NFTs of legendary Warriors five Pandavas.
I have named The NFTs `PANDAVA` and its abbreviation is `PND`. I have generated AI images of the legends and stored them in `Pinata cloud`. Contract has `mint()` function which can be only
used by an contract owner to mint NFTs. 

## Getting Started ⚙

### Contract deployement and Program Execution 🔧💻

Git clone the repository in your local environment which will give you access to other contents of the repository. Navigate to the project directory,  run:

```shell

 npm install

```

After installing the dependencies, run the test file by using the following command:

```shell
npx hardhat test
```

### Deploying the ERC721 Contract 💻🔧

Before deploying, make sure to make ".env" and provide your wallet private key in it i.e. "PRIVATE_KEY=`your wallet private key`". Run the following command to deploy the ERC721 contract to the Goerli Ethereum Testnet:

``` shell
npx hardhat run scripts/deploy.js --network goerli 
```
## NOTE:
After deploying the address will generate. So, copy that address into `batchMint.js` and also in `approveDeposit.js`(Both stored in scripts folder).

 
The script will deploy the contract 
### Batch Mint NFTs

Run the following command to batch-mint NFTs using the deployed ERC721 contract:

``` shell
npx hardhat run scripts/batchMint.js --network goerli
```

The script will mint the 5 number of `PANDAVA` NFTs and assign them to your address.

### Mapping 🌏🔗

Go to https://mapper.polygon.technology/map and by using deployed contract address Map it to the Polygon Mumbai Network, copy the address provided by the site after maaping and update it in the `approveDeposit.js`.

### Approve and Deposit NFTs to Polygon Mumbai

Run the following commands to approve and deposit the minted `PANDAVA` NFTs from Ethereum `Goerli Testnet` to the `Polygon Mumbai` network using the FxPortal Bridge:

```shell
npx hardhat run scripts/approveDeposit.js --network goerli
```

## License 🧾

This project is licensed under the [MIT License]- // SPDX-License-Identifier: MIT
