import React, { useState, useEffect, useCallback } from "react";
import Web3 from "web3";
import { Contract } from "web3-eth-contract";

const Ribon = require("../../contracts/Ribon.json");
const DonationToken = require("../../contracts/RibonGov.json");

declare global {
  interface Window {
    web3: any;
  }
}

export default function useContract() {
  const [ribonContract, setRibonContract] = useState<Contract>();
  const [donationTokenContract, setDonationTokenContract] =
    useState<Contract>();

  const setupWeb3 = useCallback(async () => {
    const web3 = new Web3(
      window.web3.currentProvider || "http://localhost:8545"
    );
    const id = await web3.eth.net.getId();
    const deployedRibonNetwork = Ribon.networks[id];
    const deployedDonationTokenNetwork = DonationToken.networks[id];

    setRibonContract(
      new web3.eth.Contract(Ribon.abi, deployedRibonNetwork.address)
    );
    setDonationTokenContract(
      new web3.eth.Contract(
        DonationToken.abi,
        deployedDonationTokenNetwork.address
      )
    );
  }, []);

  useEffect(() => {
    setupWeb3();
  }, [setupWeb3]);

  return { ribonContract, donationTokenContract };
}
