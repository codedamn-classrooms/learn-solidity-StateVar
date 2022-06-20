const StateVar = artifacts.require("StateVar");

module.exports = function (deployer) {
  deployer.deploy(StateVar);
};
