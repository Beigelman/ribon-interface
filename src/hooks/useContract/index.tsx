import React, { useState, useEffect, useCallback } from "react";
import Web3 from "web3";
import { Contract } from "web3-eth-contract";

const Ribon = require("../../contracts/Ribon.json");
const DonationToken = require("../../contracts/RibonGov.json");

export default function useContract() {
  const [accounts, setAccounts] = useState([]);
  const [ribonContract, setRibonContract] = useState<Contract>();
  const [donationTokenContract, setDonationTokenContract] =
    useState<Contract>();

  const setupWeb3 = useCallback(async () => {
    const web3 = new Web3("http://localhost:8545");
    const id = await web3.eth.net.getId();
    const deployedNetwork = Ribon.networks[id];

    setRibonContract(new web3.eth.Contract(Ribon.abi, deployedNetwork.address));
    setDonationTokenContract(
      new web3.eth.Contract(DonationToken.abi, deployedNetwork.address)
    );
  }, []);

  useEffect(() => {
    setupWeb3();
  }, [setupWeb3]);

  return { ribonContract, donationTokenContract };
}
