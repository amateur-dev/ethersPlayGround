const { ethers } = require("ethers");
const Web3 = require('web3');
const HDWalletProvider = require("@truffle/hdwallet-provider");
const ALCHEMY_API_KEY = process.env['ALCHEMY_API_KEY']
const PRIVATE_KEY = process.env['PRIVATE_KEY']

let alchemy_provider = new ethers.providers.AlchemyProvider(
  "kovan",
  ALCHEMY_API_KEY
  );
// console.log(alchemy_provider.network.chainId);
let wallet = new ethers.Wallet(
  PRIVATE_KEY,
  alchemy_provider)

// let provider = new HDWalletProvider(PRIVATE_KEY,"https://eth-kovan.alchemyapi.io/v2/"+ALCHEMY_API_KEY)

// const web3 = new Web3(provider);

// var web3 = new Web3(new Web3.providers.HttpProvider('https://eth-kovan.alchemyapi.io/v2/'+ALCHEMY_API_KEY));

// web3.eth.getBalance("0x4337a3876c1a021762F8eDf16524ad09eF9F5166")
// .then(console.log);
// let account = null;

// let accounts = async () => {
//   let x = await web3.eth.getAccounts();
//   console.log(`the accounts are ${x}`);
//   account = x;
// }

// provider.engine.stop();



// const fx = async() => {
  
  // const message = "testing if this is working";
  // const signedMessage = await wallet.signMessage(message);
  // console.log(signedMessage);
  // console.log(ethers.utils.verifyMessage(message, signedMessage));
  // const signTransaction = await wallet.signTransaction(tx);
  // console.log(signTransaction);
  
  // getTx(txHash);
  // console.log(`the hash of the transaction is ${signTransaction}`);

  // const populatedTransaction = await wallet.populateTransaction(tx);
  // console.log(populatedTransaction);
  // const senttransaction = await wallet.sendTransaction(tx);;
  // console.log(senttransaction);
  
// }

// fx();

const signTx = async () => {
  walletNonce = await wallet.getTransactionCount();
  let tx = {
            to: "0x4337a3876c1a021762F8eDf16524ad09eF9F5166",
            value: ethers.utils.parseEther("0.02"),
            
          };
  // nonce: walletNonce,
  //           chainId: alchemy_provider.network.chainId
  const populatedTransaction = await wallet.populateTransaction(tx);
  console.log("POPULATED TX",populatedTransaction); // this has all the details required to broadcast the tx to the network through the provider
  signedTx = await wallet.signTransaction(populatedTransaction); // signing the valid transaction object
  // console.log("SIGNEDTX", signedTx)
  console.log("PARSED TRANSACTION AFTER SIGNING", ethers.utils.parseTransaction(signedTx)); // once parsed, it will give us all the details of r, s and v and also the hash of the tx, even before it is actually sent
  const senttransaction = await wallet.sendTransaction(populatedTransaction); // identical to the PARSED TRANSACTION
  console.log("TRANSACTION BROADCASETED OVER THE NETWORK",senttransaction);
  // const signature = ethers.utils.joinSignature(ethers.utils.parseTransaction(signedTx));
  // console.log("SIGNATURE", signature);
  // const serializedTransaction = ethers.utils.serializeTransaction(tx);
  // console.log("UNSIGNED SERIALIZED", serializedTransaction);
  // const signedSerialized = ethers.utils.serializeTransaction(tx, signature);
  // console.log("SIGNED SERIALIZED", signedSerialized);
  // console.log(signedSerialized == signedTx);
  // console.log("DECODED", ethers.utils.parseTransaction(signedSerialized));
  // var myJSON1 = JSON.stringify(ethers.utils.parseTransaction(signedTx));
  // var myJSON2 = JSON.stringify(ethers.utils.parseTransaction(signedSerialized));
  // console.log(myJSON1 == myJSON2)
}

signTx();
// console.log(signedTx);
    

    // "0x2e1fe98e926f10eeca5dd6d690fa5b24c026c46287c3f1a729ca2c596f3a772e4bd2d5fde3b848d58b45f958276b63ff54846fc9329dc68e9822c7fb699e9adf1c"

    // Note: no need for your await
    // 
    // console.log("UNSIGNED", serializedTransaction);
    // "0xea808477359400825208943e245df5a4de41e65cecd1f98b96ca06c3d319f087470de4df82000080038080"

    // Note: no need for your await
    // const signedSerialized = ethers.utils.serializeTransaction(tx, signature);
    // console.log("SIGNED", signedSerialized);
    // "0xf86a808477359400825208943e245df5a4de41e65cecd1f98b96ca06c3d319f087470de4df820000802aa02e1fe98e926f10eeca5dd6d690fa5b24c026c46287c3f1a729ca2c596f3a772ea04bd2d5fde3b848d58b45f958276b63ff54846fc9329dc68e9822c7fb699e9adf"

    // The decoded transaction
    // console.log("DECODED", ethers.utils.parseTransaction(signedSerialized));
    // { nonce: 0,
    //   gasPrice: BigNumber { _hex: '0x77359400', _isBigNumber: true },
    //   gasLimit: BigNumber { _hex: '0x5208', _isBigNumber: true },
    //   to: '0x3e245dF5a4dE41E65cecD1f98B96Ca06C3D319F0',
    //   value: BigNumber { _hex: '0x470de4df820000', _isBigNumber: true },
    //   data: '0x',
    //   chainId: 3,
    //   v: 42,
    //   r: '0x2e1fe98e926f10eeca5dd6d690fa5b24c026c46287c3f1a729ca2c596f3a772e',
    //   s: '0x4bd2d5fde3b848d58b45f958276b63ff54846fc9329dc68e9822c7fb699e9adf',
    //   from: '0x796C7619429805a2951f3eB9dAb6E87Ba6d8622b',
    //   hash:
    //    '0x844dbdc24fb59480bba8597e588302fc1430ed9f7944b4d9c0c2908dabb75c2f' }

    // Note: The addresses match :)


