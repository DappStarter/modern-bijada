require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope kite bone tooth tissue raise pizza equip good another army gather'; 
let testAccounts = [
"0xf2adbbaa1ee2f3f45a8d16483cf39028f099f29363038dd14b7f9e2dd29444da",
"0x637d06ba53a688dbc9d0f25936d8847299ef0167170030ade94bbfd1ce7a9a71",
"0x3d0da204911d5a07daf007fee6c481b9984350c2a7634fb3f004c9976d8d5104",
"0xa86882530ac5700cf2ae59a0ee6707978f9c56a6cbe8d23b3b165b24feb32c1e",
"0xd37464218e3f2f053abbb15333473cd864a5c923b004f88d4ab8338f4a802602",
"0xcabce1ef9aeb91e66c5c5db996ffa0839fbe82c9c2c38b30182e3b646376100e",
"0x19f8551a322c07825bb310c9b1b7d78fa8ec1f7c881cb3475afc10941e2da052",
"0x6e3660a90eff95e150c43439a759fee911570f3d3da3c47052aba139ad18b0fe",
"0x7632bbef0c9327f8389cec1ef07a91ead8456682ddd1d60683f438dfc7439ad0",
"0xd957014dce9c5bf38eae82e38f75afb95cc223f46c4ccd0153e68081da1fbe0f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
