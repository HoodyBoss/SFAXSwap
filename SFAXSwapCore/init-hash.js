// var bytecode = require("./build/contracts/SFAXSwapPair.json")
var keccak256 = require("@ethersproject/solidity")
const bytecode = '0x60806040526001600c5534801561001557600080fd5b5060004690506040518080613bd760529139605201905060405180910390206040518060400160405280600c81526020017f5346415853776170204c50730000000000000000000000000000000000000000815250805190602001206040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250805190602001208330604051602001808681526020018581526020018481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200195505050505050604051602081830303815290604052805190602001206003819055505033600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550613a62806101756000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80636a627842116100f9578063ba9a7a5611610097578063d21220a711610071578063d21220a7146108c4578063d505accf1461090e578063dd62ed3e146109a'
+ '7578063fff6cae914610a1f576101a9565b8063ba9a7a5614610818578063bc25cf7714610836578063c45a01551461087a576101a9565b80637ecebe00116100d35780637ecebe001461067857806389afcb44146106d057806395d89b411461072f578063a9059cbb146107b2576101a9565b80636a627842146105aa57806370a08231146106025780637464fc3d1461065a576101a9565b806323b872dd116101665780633644e515116101405780633644e515146104ec578063485cc9551461050a5780635909c0d51461056e5780635a3d54931461058c576101a9565b806323b872dd1461042457806330adf81f146104aa578063313ce567146104c8576101a9565b8063022c0d9f146101ae57806306fdde031461025b5780630902f1ac146102de578063095ea7b3146103565780630dfe1681146103bc57806318160ddd14610406575b600080fd5b610259600480360360808110156101c457600080fd5b810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561021557600080fd5b82018360208201111561022757600080fd5b8035906020019184600183028401116401000000008311171561024957600080fd5b9091929391929390505050610a29565b005b610263611233565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102a3578082015181840152602081019050610288565b50505050905090810190601f1680156102d05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102e661126c565b60405180846dffffffffffffffffffffffffffff166dffffffffffffffffffffffffffff168152602001836dffffffffffffffffffffffffffff166dffffffffffffffffffffffffffff1681526020018263ffffffff1663ffffffff168152602001935050505060405180910390f35b6103a26004803603604081101561036c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506112c9565b604051808215151515815260200191505060405180910390f35b6103c46112e0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff'
+ '16815260200191505060405180910390f35b61040e611306565b6040518082815260200191505060405180910390f35b6104906004803603606081101561043a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061130c565b604051808215151515815260200191505060405180910390f35b6104b26114d7565b6040518082815260200191505060405180910390f35b6104d06114fe565b604051808260ff1660ff16815260200191505060405180910390f35b6104f4611503565b6040518082815260200191505060405180910390f35b61056c6004803603604081101561052057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611509565b005b610576611652565b6040518082815260200191505060405180910390f35b610594611658565b6040518082815260200191505060405180910390f35b6105ec600480360360208110156105c057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061165e565b6040518082815260200191505060405180910390f35b6106446004803603602081101561061857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611b0f565b6040518082815260200191505060405180910390f35b610662611b27565b6040518082815260200191505060405180910390f35b6106ba6004803603602081101561068e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611b2d565b6040518082815260200191505060405180910390f35b610712600480360360208110156106e657600080fd5b81019080803573'
+ 'ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611b45565b604051808381526020018281526020019250505060405180910390f35b610737612132565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561077757808201518184015260208101905061075c565b50505050905090810190601f1680156107a45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6107fe600480360360408110156107c857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061216b565b604051808215151515815260200191505060405180910390f35b610820612182565b6040518082815260200191505060405180910390f35b6108786004803603602081101561084c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612188565b005b610882612463565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6108cc612489565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6109a5600480360360e081101561092457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803560ff16906020019092919080359060200190929190803590602001909291905050506124af565b005b610a09600480360360408110156109bd57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506127f3565b6040518082815260200191505060405180910390f35b610a27612818565b005b6001600c5414610aa1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f53464158537761703a204c4f434b45440000000000000000000000000000000081525060200191505060405180910390fd5b6000600c819055506000851180610ab85750600084115b610b0d576040517f08c379a0000000'
+ '0000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806139996024913960400191505060405180910390fd5b600080610b1861126c565b5091509150816dffffffffffffffffffffffffffff1687108015610b4b5750806dffffffffffffffffffffffffffff1686105b610bbd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f53464158537761703a20494e53554646494349454e545f4c495155494449545981525060200191505060405180910390fd5b6000806000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508173ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff1614158015610c7657508073ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff1614155b610ce8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f53464158537761703a20494e56414c49445f544f00000000000000000000000081525060200191505060405180910390fd5b60008b1115610cfd57610cfc828a8d612a98565b5b60008a1115610d1257610d11818a8c612a98565b5b6000888890501115610dfa578873ffffffffffffffffffffffffffffffffffffffff166384800812338d8d8c8c6040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b158015610de157600080fd5b505af1158015610df5573d6000803e3d6000fd5b505050505b8173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610e7757600080fd5b505afa158015610e8b573d6000803e3d6000fd5b505050506040513d6020811015610ea157600080fd5b810190808051906020019092919050505093508073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158'
+ '015610f3157600080fd5b505afa158015610f45573d6000803e3d6000fd5b505050506040513d6020811015610f5b57600080fd5b810190808051906020019092919050505092505050600089856dffffffffffffffffffffffffffff16038311610f92576000610fa8565b89856dffffffffffffffffffffffffffff160383035b9050600089856dffffffffffffffffffffffffffff16038311610fcc576000610fe2565b89856dffffffffffffffffffffffffffff160383035b90506000821180610ff35750600081115b611048576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806139bd6023913960400191505060405180910390fd5b6000611084611061600285612ce590919063ffffffff16565b6110766103e888612ce590919063ffffffff16565b612d7a90919063ffffffff16565b905060006110c261109f600285612ce590919063ffffffff16565b6110b46103e888612ce590919063ffffffff16565b612d7a90919063ffffffff16565b905061110c620f42406110fe896dffffffffffffffffffffffffffff168b6dffffffffffffffffffffffffffff16612ce590919063ffffffff16565b612ce590919063ffffffff16565b61111f8284612ce590919063ffffffff16565b1015611193576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f53464158537761703a204b00000000000000000000000000000000000000000081525060200191505060405180910390fd5b50506111a184848888612dfd565b8873ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d82284848f8f6040518085815260200184815260200183815260200182815260200194505050505060405180910390a35050505050506001600c819055505050505050565b6040518060400160405280600c81526020017f5346415853776170204c5073000000000000000000000000000000000000000081525081565b6000806000600860009054906101000a90046dffffffffffffffffffffffffffff1692506008600e9054906101000a90046dffffffffffffffffffffffffffff1691506008601c9054906101000a900463ffffffff169050909192565b60006112d633848461317b565b6001905092915050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60005481565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054146114c15761144082600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612d7a90919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373fffffffffffffffffff' 
+ 'fffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b6114cc848484613266565b600190509392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960001b81565b601281565b60035481565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146115cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f53464158537761703a20464f5242494444454e0000000000000000000000000081525060200191505060405180910390fd5b81600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60095481565b600a5481565b60006001600c54146116d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f53464158537761703a204c4f434b45440000000000000000000000000000000081525060200191505060405180910390fd5b6000600c819055506000806116eb61126c565b50915091506000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561179157600080fd5b505afa1580156117a5573d6000803e3d6000fd5b505050506040513d60208110156117bb57600080fd5b810190808051906020019092919050505090506000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561186f57600080fd5b505afa158015611883573d6000803e3d6000fd5b505050506040513d602081101561189957600080fd5b8101908080519060200190929190505050905060006118d1856dffffffffffffffffffffffffffff1684612d7a90919063ffffffff16565b905060006118f8856dffffffffffffffffffffffffffff1684612d7a90919063ffffffff16565b9050600061190687876133fa565b9050600080549050600081141561195a576119466103e86119386119338688612ce590919063ffffffff16565b6135db565b612d7a90919063ffffffff16565b985061195560006103e861363d565b6119bd565b6119ba886dffffffffffffffffffffffffffff1'
+ '66119818387612ce590919063ffffffff16565b8161198857fe5b04886dffffffffffffffffffffffffffff166119ad8487612ce590919063ffffffff16565b816119b457fe5b04613757565b98505b60008911611a16576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180613a076027913960400191505060405180910390fd5b611a208a8a61363d565b611a2c86868a8a612dfd565b8115611aa457611a9d6008600e9054906101000a90046dffffffffffffffffffffffffffff166dffffffffffffffffffffffffffff16600860009054906101000a90046dffffffffffffffffffffffffffff166dffffffffffffffffffffffffffff16612ce590919063ffffffff16565b600b819055505b3373ffffffffffffffffffffffffffffffffffffffff167f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f8585604051808381526020018281526020019250505060405180910390a250505050505050506001600c81905550919050565b60016020528060005260406000206000915090505481565b600b5481565b60046020528060005260406000206000915090505481565b6000806001600c5414611bc0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f53464158537761703a204c4f434b45440000000000000000000000000000000081525060200191505060405180910390fd5b6000600c81905550600080611bd361126c565b50915091506000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008273ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611ca557600080fd5b505afa158015611cb9573d6000803e3d6000fd5b505050506040513d6020811015611ccf57600080fd5b8101908080519060200190929190505050905060008273ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611d6157600080fd5b505afa158015611d75573d6000803e3d6000fd5b505050506040513d6020811015611d8b57600080fd5b810190808051906020019092919050505090506000600160003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000611dee88886133fa565b905060008054905080611e0a8685612ce590919063ffffffff16565b81611e1157fe5b049a5080611e288585612ce590919063ffffffff16565b81611e2f57fe5b04995060008b118015611e42575060008a115b611e97576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806139e06027913960400191505060405180910390fd5b611ea13084613770565b611eac878d8d612a98565b611eb7868d8c612a98565b8673ffffffffffffffffffffffffffffffffffffffff166370a08'
+ '231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611f3457600080fd5b505afa158015611f48573d6000803e3d6000fd5b505050506040513d6020811015611f5e57600080fd5b810190808051906020019092919050505094508573ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611fee57600080fd5b505afa158015612002573d6000803e3d6000fd5b505050506040513d602081101561201857600080fd5b8101908080519060200190929190505050935061203785858b8b612dfd565b81156120af576120a86008600e9054906101000a90046dffffffffffffffffffffffffffff166dffffffffffffffffffffffffffff16600860009054906101000a90046dffffffffffffffffffffffffffff166dffffffffffffffffffffffffffff16612ce590919063ffffffff16565b600b819055505b8b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d819364968d8d604051808381526020018281526020019250505060405180910390a35050505050505050506001600c81905550915091565b6040518060400160405280600781526020017f534641582d4c500000000000000000000000000000000000000000000000000081525081565b6000612178338484613266565b6001905092915050565b6103e881565b6001600c5414612200576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f53464158537761703a204c4f434b45440000000000000000000000000000000081525060200191505060405180910390fd5b6000600c819055506000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506123568284612351600860009054906101000a90046dffffffffffffffffffffffffffff166dffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561230857600080fd5b505afa15801561231c573d6000803e3d6000fd5b505050506040513d602081101561233257600080fd5b8101908080519060200190929190505050612d7a90919063ffffffff16565b612a98565b61245681846124516008600e9054906101000a90046dffffffffffffffffffffffffffff166dffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff16'
+ '60e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561240857600080fd5b505afa15801561241c573d6000803e3d6000fd5b505050506040513d602081101561243257600080fd5b8101908080519060200190929190505050612d7a90919063ffffffff16565b612a98565b50506001600c8190555050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b42841015612525576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f53464158537761703a204558504952454400000000000000000000000000000081525060200191505060405180910390fd5b60006003547f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960001b898989600460008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050558a604051602001808781526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182815260200196505050505050506040516020818303038152906040528051906020012060405160200180807f190100000000000000000000000000000000000000000000000000000000000081525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050600060018286868660405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa1580156126f7573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415801561276b57508873ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b6127dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f53464158537761703a20494e56414c49445f5349474e4154555245000000000081525060200191505060405180910390fd5b6127e889898961317b565b505050505050505050565b6002602052816000526040600020602052806000526040600020600091509150505481565b6001600c5414612890576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f53464158537761703a204c4f434b45440000000000000000000000000000000081525060200191505060405180910390fd5b60006'
+ '00c81905550612a8e600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561293a57600080fd5b505afa15801561294e573d6000803e3d6000fd5b505050506040513d602081101561296457600080fd5b8101908080519060200190929190505050600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015612a1457600080fd5b505afa158015612a28573d6000803e3d6000fd5b505050506040513d6020811015612a3e57600080fd5b8101908080519060200190929190505050600860009054906101000a90046dffffffffffffffffffffffffffff166008600e9054906101000a90046dffffffffffffffffffffffffffff16612dfd565b6001600c81905550565b600060608473ffffffffffffffffffffffffffffffffffffffff166040518060400160405280601981526020017f7472616e7366657228616464726573732c75696e743235362900000000000000815250805190602001208585604051602401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b60208310612bc55780518252602082019150602081019050602083039250612ba2565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612c27576040519150601f19603f3d011682016040523d82523d6000602084013e612c2c565b606091505b5091509150818015612c6c5750600081511480612c6b5750808060200190516020811015612c5957600080fd5b81019080805190602001909291905050505b5b6'
+ '12cde576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f53464158537761703a205452414e534645525f4641494c45440000000000000081525060200191505060405180910390fd5b5050505050565b600080821480612d025750828283850292508281612cff57fe5b04145b612d74576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f64732d6d6174682d6d756c2d6f766572666c6f7700000000000000000000000081525060200191505060405180910390fd5b92915050565b6000828284039150811115612df7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f64732d6d6174682d7375622d756e646572666c6f77000000000000000000000081525060200191505060405180910390fd5b92915050565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6dffffffffffffffffffffffffffff168411158015612e6d57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6dffffffffffffffffffffffffffff168311155b612edf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f53464158537761703a204f564552464c4f57000000000000000000000000000081525060200191505060405180910390fd5b60006401000000004281612eef57fe5b06905060006008601c9054906101000a900463ffffffff168203905060008163ffffffff16118015612f3257506000846dffffffffffffffffffffffffffff1614155b8015612f4f57506000836dffffffffffffffffffffffffffff1614155b15613031578063ffffffff16612f9485612f688661388a565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166138b590919063ffffffff16565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16026009600082825401925050819055508063ffffffff1661300284612fd68761388a565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166138b590919063ffffffff16565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1602600a600082825401925050819055505b85600860006101000a8154816dffffffffffffffffffffffffffff02191690836dffffffffffffffffffffffffffff160217905550846008600e6101000a8154816dffffffffffffffffffffffffffff02191690836dffffffffffffffffffffffffffff160217905550816008601c6101000a81548163ffffffff021916908363ffffffff1602179055507f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1600860009054906101000a90046dffffffffffffffffffffffffffff166008600e9054906101000a90046dffffffffffffffffffffffffffff1660405180836dffffffffffffffffffffffffffff166dffffffffffffffffffffffffffff168152602001826dffffffffffffffffffff'
+ 'ffffffff166dffffffffffffffffffffffffffff1681526020019250505060405180910390a1505050505050565b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b6132b881600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612d7a90919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061334d81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461391590919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b600080600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b15801561346557600080fd5b505afa158015613479573d6000803e3d6000fd5b505050506040513d602081101561348f57600080fd5b81019080805190602001909291905050509050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141591506000600b54905082156135c157600081146135bc576000613527613522866dffffffffffffffffffffffffffff16886dffffffffffffffffffffffffffff16612ce590919063ffffffff16565b6135db565b90506000613534836135db565b9050808211156135b95760006135676135568385612d7a90919063ffffffff16565b600054612ce590919063ffffffff16565b9050600061359183613583600387612ce590919063ffffffff16565b61391590919063ffffffff16565b9050600081838161359e57fe5b04905060008111156135b5576135b4878261363d565b5b5050505b50505b6135d3565b600081146135d2576000600b819055505b5b505092915050565b6000600382111561362a5781905060006001600284816135f757fe5b040190505b818110156136245780915060028182858161361357fe5b04018161361c57fe5b0490506135fc565b50613638565b600082'
+ '1461363757600190505b5b919050565b6136528160005461391590919063ffffffff16565b6000819055506136aa81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461391590919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b60008183106137665781613768565b825b905092915050565b6137c281600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612d7a90919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061381a81600054612d7a90919063ffffffff16565b600081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b60006e010000000000000000000000000000826dffffffffffffffffffffffffffff16029050919050565b6000816dffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168161390c57fe5b04905092915050565b6000828284019150811015613992576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f64732d6d6174682d6164642d6f766572666c6f7700000000000000000000000081525060200191505060405180910390fd5b9291505056fe53464158537761703a20494e53554646494349454e545f4f55545055545f414d4f554e5453464158537761703a20494e53554646494349454e545f494e5055545f414d4f554e5453464158537761703a20494e53554646494349454e545f4c49515549444954595f4255524e454453464158537761703a20494e53554646494349454e545f4c49515549444954595f4d494e544544a265627a7a7231582079d851c92b952ca0fed597ebc3352fa54b6277cd3125bdc39c2fb42225857b3c64736f6c63430005100032454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429'

function computeHash() {
    let COMPUTED_INIT_CODE_HASH = keccak256.keccak256(['bytes'], [`${bytecode}`])
    console.log(COMPUTED_INIT_CODE_HASH);
}
computeHash();
// 0x01c2d3771be8c971c6412f88360e49a46ac89d5c1c7b5b6eb0be84caf1d0b677