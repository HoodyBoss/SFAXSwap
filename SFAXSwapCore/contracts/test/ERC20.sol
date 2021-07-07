pragma solidity =0.5.16;

import '../SFAXSwapERC20.sol';

contract ERC20 is SFAXSwapERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
