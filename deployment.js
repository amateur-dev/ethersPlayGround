const { ethers } = require("ethers");

const deployTransactionData = async (wallet, abi, bytecode) => {
  let contract_interface = new ethers.utils.Interface(abi);
  let contract_factory = await new ethers.ContractFactory(contract_interface,bytecode,wallet);
  let deployTransaction = await contract_factory.getDeployTransaction();
  return deployTransaction;
}

module.exports = {
  deployTransactionData
}
