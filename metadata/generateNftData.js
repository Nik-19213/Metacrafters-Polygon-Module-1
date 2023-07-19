const fs = require('fs');
const path = require('path');
console.log(__dirname);

const nfts = require('./nfts');

for (let i = 0; i < nfts.length; i++) {

  const json = {
    name: nfts[i].name,
    description: nfts[i].description,
    image: `https://gateway.pinata.cloud/ipfs/${nfts[i].image}`,
  };

  const name = nfts[i].name;

  const fileName = `${name.replace(/[^a-zA-Z0-9]/g, '')}`;

  fs.writeFileSync(
    path.join(__dirname, 'nftcollection', String(fileName)),
    JSON.stringify(json)
  );
}

// run node metadata/generateNftData.js