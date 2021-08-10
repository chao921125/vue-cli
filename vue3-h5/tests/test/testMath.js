import Web3 from 'web3';
import tradeFlowJson from "@/data/Math.json";

export async function testCon() {
    let web3Provider;
    if (window.ethereum) {
        web3Provider = window.ethereum;
        try {
            // Request account access
            await window.ethereum.enable();
        } catch (error) {
            // User denied account access...
            console.error("User denied account access");
        }
    } else {
        // web3Provider = new Web3.providers.HttpProvider('http://localhost8545');
        web3Provider = new Web3.providers.HttpProvider('http://10.144.106.175:7545');
    }
    let web3 = new Web3(web3Provider);
    // window.mathAddress = tradeFlowJson['networks']['10']['address'];
    window.mathFlow = new web3.eth.Contract(tradeFlowJson['abi'], "0x65e023CBB1012298923b2B3FF2FcEb94d46506Be");
    mathFlow.setProvider(web3);
    let result = await mathFlow.methods.addFunc(11, 33).encodeABI();
    let version = web3.version;
    console.log(version);
    console.log(result);

}
