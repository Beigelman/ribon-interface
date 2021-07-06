import React, { useState, useEffect, useCallback } from "react";
import Web3 from "web3";
import { Contract } from "web3-eth-contract";

const Ribon = require("../../contracts/Ribon.json");
const DonationToken = require("../../contracts/DonationToken.json");

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
    const deployedDonationTokenNetwork = 80001;

    setRibonContract(
      new web3.eth.Contract(
        Ribon.abi,
        "0xbdd84418006C7C0C7aF0f57fdFDa55F7e6827a9C"
      )
    );
    setDonationTokenContract(
      new web3.eth.Contract(
        DonationToken.abi,
        "0x56816571CBC82aa4Ee84584291c353bC469C9f13"
      )
    );
  }, []);

  useEffect(() => {
    setupWeb3();
  }, [setupWeb3]);

  return { ribonContract, donationTokenContract };
}
