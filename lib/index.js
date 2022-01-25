const wallet = require("ethereumjs-wallet").default;

const generateKeys = (count = 1) => {
  for (let index = 0; index < count; index++) {
    let addressData = wallet.generate();

    console.log(`Private key: ${addressData.getPrivateKeyString()}`);
    console.log(`Address: ${addressData.getAddressString()}`);
  }
};

module.exports = {
  generateKeys,
};
