const Migrations = artifacts.require("Migrations");
const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');


module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
