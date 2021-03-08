
const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const CKGToken = artifacts.require('CKGToken');

module.exports = async function (deployer, network, accounts) {
  const instance = await deployProxy(
    CKGToken,
    ["Cryptocurrency Knowledge Group", "CKG"],
    { deployer, initializer: "initialize", unsafeAllowCustomTypes: true });
  //unsafeAllowCustomTypes Ignores struct mapping in AccessControl, which is fine because it's used in a mapping
  //See: https://solidity.readthedocs.io/en/v0.6.2/miscellaneous.html#mappings-and-dynamic-arrays
  console.log('Deployed', instance.address);
};