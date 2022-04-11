require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski strategy cost misery unusual install office army gift'; 
let testAccounts = [
"0x9a8fde0d91931ded3fcbd1060094cf727d703acc84c5ccc54bafcacaf824433c",
"0x6e597958e1c99243ac558ecef788ae13081e035c68dfb3e3289265e1e7a76eae",
"0x811f865b5d580d35b54e42ba49d2e33149d37b12b03ade9f9fc6aee61653a1c3",
"0xaf992f0141411dfdba2e8b2f42351415e3032c2741de8cc3fa6cd2aa9fa2abc2",
"0xc78a8053a738937488966edbffda5d560b2fce6b1ace169319d70e99a73aa4dd",
"0x4cfc3c344a54d7dc413923e1fc5cfa29a4748cc8156a51c2d1701a0ebca66d2f",
"0xf0913dc0da0a4850646571182ec2cc2783db61019dacb6b29dac5f2c2e3b6e9e",
"0x587f5989bf9c007dd28fd86ff51160ec6e8c90dbc20ec4caea05e15fbfa49f2b",
"0x2ad930c1e55f1ee7058e63c87879f9e6000f487b052a742b8594c8179013e5a2",
"0x00be76337cebeb9f7171404fb19492912202586a5ac3c789e90a762af0321dbd"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

