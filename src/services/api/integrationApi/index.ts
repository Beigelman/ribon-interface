import { AxiosResponse } from "axios";
import api from "..";

const integrationApi = {
  donateThoughtIntegration: (
    nonProfit: string,
    user: string,
    amount: number
  ): Promise<AxiosResponse<any>> => {
    console.log(nonProfit, user, amount);
    return api.post(`/donationThroughIntegration`, {
      nonProfit: nonProfit,
      user: user,
      amount: amount,
    });
  },
};

export default integrationApi;
