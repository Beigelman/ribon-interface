import { AxiosResponse } from "axios";
import api from "..";

const integrationApi = {
  donateThoughtIntegration: (
    user: string,
    amount: number
  ): Promise<AxiosResponse<any>> => {
    return api.post(`/`, {
      user: user,
      amount: amount,
    });
  },
};

export default integrationApi;
