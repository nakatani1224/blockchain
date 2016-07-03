//Create web3 instance
web3 = new Web3();

//Set RPC Provider
if(!web3.currentProvider)
       web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));

//Initialization of EthAccounts
EthAccounts.init();

//Initialization of EthBlocks
EthBlocks.init();

//Initialization of Session Variable
initSessionVars();

//Transactionsコレクションの初期化
Transactions = new Mongo.Collection('transactions', {connection: null});

//Initialization of Observer
observeNode();