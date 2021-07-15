const Router = artifacts.require('SFAXSwapRouter.sol');
const WBNB = artifacts.require('WBNB.sol');

module.exports = async function (deployer, _network, addresses) {
    let wbnb;
    const FACTORY_ADDRESS = '0xF1Cc7a06947734EfBfbDfe42C3F5Fdac396790f0';

    if(_network === 'mainnet') {
        weth = await WBNB.at('wbnbaddress');
    } else {
        await deployer.deploy(WBNB);
        wbnb = await WBNB.deployed();
    }

    await deployer.deploy(Router, FACTORY_ADDRESS, wbnb.address);
}