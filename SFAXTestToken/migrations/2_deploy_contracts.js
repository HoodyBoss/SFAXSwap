const Token = artifacts.require('SAFEMOONmaxTEST');
const TokenReceiver = artifacts.require('TokenReceiver');

module.exports = async function (deployer) {
  await deployer.deploy(Token);
  const token = await Token.deployed();

  await deployer.deploy(TokenReceiver, token.address);
  const receiver = await TokenReceiver.deployed();

  await token.transfer(receiver.address, "100000000");
};