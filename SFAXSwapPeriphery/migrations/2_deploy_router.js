const Router = artifacts.require('SFAXSwapRouter.sol');
const WBNB = artifacts.require('WBNB.sol');

module.exports = async function (deployer, _network, addresses) {
    let wbnb;
    const FACTORY_ADDRESS = '0x6C283dF7379bE4D3C72e60B92c02a52b4AB24346';

    if(_network === 'mainnet') {
        weth = await WBNB.at('wbnbaddress');
    } else {
        await deployer.deploy(WBNB);
        wbnb = await WBNB.deployed();
    }

    await deployer.deploy(Router, FACTORY_ADDRESS, wbnb.address);
}