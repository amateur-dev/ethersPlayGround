const { ethers } = require("ethers");
var abi = require('./artifacts/transferFunction').abi;
var bytecode = require('./artifacts/transferFunction').byteCode;
require('dotenv').config();

const ALCHEMY_API_KEY = process.env['ALCHEMY_API_KEY']
const PRIVATE_KEY = process.env['PRIVATE_KEY']

const deployTransactionData = require("./deployment.js").deployTransactionData;

const alchemy_provider = new ethers.providers.AlchemyProvider(
  "kovan",
  ALCHEMY_API_KEY
  );

const wallet = new ethers.Wallet(
  PRIVATE_KEY,
  alchemy_provider)

  
// deployTransactionData(wallet, abi, bytecode).then(response => {console.log(response)});


// // const fx = async() => {
  
//   // const message = "testing if this is working";
//   // const signedMessage = await wallet.signMessage(message);
//   // console.log(signedMessage);
//   // console.log(ethers.utils.verifyMessage(message, signedMessage));
//   // const signTransaction = await wallet.signTransaction(tx);
//   // console.log(signTransaction);
  
//   // getTx(txHash);
//   // console.log(`the hash of the transaction is ${signTransaction}`);

//   // const populatedTransaction = await wallet.populateTransaction(tx);
//   // console.log(populatedTransaction);
//   // const senttransaction = await wallet.sendTransaction(tx);;
//   // console.log(senttransaction);
  
// // }

// // fx();

// const signTx = async () => {
//   walletNonce = await wallet.getTransactionCount();
//   let tx = {
//             to: "0x4337a3876c1a021762F8eDf16524ad09eF9F5166",
//             value: ethers.utils.parseEther("0.02"),
            
//           };
//   // nonce: walletNonce,
//   // chainId: alchemy_provider.network.chainId
//   const populatedTransaction = await wallet.populateTransaction(tx);
//   console.log("POPULATED TX",populatedTransaction); // this has all the details required to broadcast the tx to the network through the provider
//   signedTx = await wallet.signTransaction(populatedTransaction); // signing the valid transaction object
//   // console.log("SIGNEDTX", signedTx)
//   console.log("PARSED TRANSACTION AFTER SIGNING", ethers.utils.parseTransaction(signedTx)); // once parsed, it will give us all the details of r, s and v and also the hash of the tx, even before it is actually sent
//   const senttransaction = await wallet.sendTransaction(populatedTransaction); // identical to the PARSED TRANSACTION
//   console.log("TRANSACTION BROADCASETED OVER THE NETWORK",senttransaction);
//   // const signature = ethers.utils.joinSignature(ethers.utils.parseTransaction(signedTx));
//   // console.log("SIGNATURE", signature);
//   // const serializedTransaction = ethers.utils.serializeTransaction(tx);
//   // console.log("UNSIGNED SERIALIZED", serializedTransaction);
//   // const signedSerialized = ethers.utils.serializeTransaction(tx, signature);
//   // console.log("SIGNED SERIALIZED", signedSerialized);
//   // console.log(signedSerialized == signedTx);
//   // console.log("DECODED", ethers.utils.parseTransaction(signedSerialized));
//   // var myJSON1 = JSON.stringify(ethers.utils.parseTransaction(signedTx));
//   // var myJSON2 = JSON.stringify(ethers.utils.parseTransaction(signedSerialized));
//   // console.log(myJSON1 == myJSON2)
// }

// // signTx();


// let contractInterface = new ethers.utils.Interface(abi);
// let contract1 = new ethers.ContractFactory(contractInterface,bytecode);
// // console.log(contract1);
// let contractTxPopulated = contract1.interface.encodeFunctionData("transfer", [ "0x1234567890123456789012345678901234567890", ethers.utils.parseEther("1.0") ])
// // .functions.transfer.encode(wallet.address, ethers.utils.parseEther("1.0"))
// console.log(contractTxPopulated);