# SFAXSwap

## SFAXSwap Factory and LP-Pair Deployment To TestNet

Starting migrations...
======================
> Network name:    'binanceTestNet'
> Network id:      97
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0x34844f792e42b13d180ff53d1906421745fe5cc6cc9c462a9b4d0a0a5a82a275
   > Blocks: 1            Seconds: 5
   > contract address:    0xdAEAd92b90B34a4421e0d2545930577D3d8b3B73
   > block number:        10372268
   > block timestamp:     1625625610
   > account:             0xA9837B402F7Ae9ec391EE260c965F1D7c7824865
   > balance:             0.99629309
   > gas used:            164175 (0x2814f)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00164175 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00164175 ETH


2_deploy_contracts.js
=====================

   Deploying 'SFAXSwapFactory'
   ---------------------------
   > transaction hash:    0x1c5ef8ce12c3e76399f6e30c3ba6c5958ba6e96bddda930f89db1e718ff43ab5
   > Blocks: 3            Seconds: 9
   > contract address:    0x6C283dF7379bE4D3C72e60B92c02a52b4AB24346
   > block number:        10372275
   > block timestamp:     1625625631
   > account:             0xA9837B402F7Ae9ec391EE260c965F1D7c7824865
   > balance:             0.95409424
   > gas used:            4177544 (0x3fbe88)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.04177544 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.04177544 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.04341719 ETH

===============================================================================================================
===============================================================================================================


## SFAXSwap Router Deployment To TestNet

Starting migrations...
======================
> Network name:    'binanceTestNet'
> Network id:      97
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0xf0cd46be6a430c309696022cdfbd5f4c08ebbefb15819c9395a5e5b321d9820b
   > Blocks: 3            Seconds: 8
   > contract address:    0x54692E0E020189895007C0b39921CdAC388B2cD0
   > block number:        10374485
   > block timestamp:     1625632261
   > account:             0xA9837B402F7Ae9ec391EE260c965F1D7c7824865
   > balance:             0.92563523
   > gas used:            129186 (0x1f8a2)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00258372 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00258372 ETH


2_deploy_router.js
==================

   Deploying 'WBNB'
   ----------------
   > transaction hash:    0x4f458359eb9f918fc74054126e5385c55a82d4c9e2763271a4771bb893a38ead
   > Blocks: 1            Seconds: 4
   > contract address:    0x8C818908B5aB661e37b0906Aa65F70Cc6b3993F3
   > block number:        10374493
   > block timestamp:     1625632285
   > account:             0xA9837B402F7Ae9ec391EE260c965F1D7c7824865
   > balance:             0.90604611
   > gas used:            937190 (0xe4ce6)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0187438 ETH


   Deploying 'SFAXSwapRouter'
   --------------------------
   > transaction hash:    0xd07010b3a6c9e35b613177d06701becf896939df72bbfd1c84fdc48c16b9b970
   > Blocks: 1            Seconds: 4
   > contract address:    0x92Fb47b9C825A391c9BD3ae7A2AE4D5b9Fc38d65
   > block number:        10374497
   > block timestamp:     1625632297
   > account:             0xA9837B402F7Ae9ec391EE260c965F1D7c7824865
   > balance:             0.82776287
   > gas used:            3914162 (0x3bb9b2)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.07828324 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.09702704 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.09961076 ETH


#### NOTES

- ETH here is actually BNB when related to costs/fees/tx/gas etc
- Important piece of the truffle-config.js      
    binanceTestNet: {
      provider: () => provider,
      network_id: "97", // BSC TESTNET CHAIN ID,
      gas: 10000000,
      gasPrice: 20000000000
     },
- Would be a similar config for the mainnet.