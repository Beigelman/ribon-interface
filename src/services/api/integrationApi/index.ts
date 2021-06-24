import { AxiosResponse } from "axios";
import api from "..";

const integrationApi = {
  donateThoughtIntegration: (user: string): Promise<AxiosResponse<any>> => {
    return api.get(`/`);
  },
};

export default integrationApi;
