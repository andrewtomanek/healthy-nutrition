import axios, { AxiosResponse, AxiosRequestConfig, Method } from "axios";

const baseUrl = process.env.REACT_APP_FIREBASE_DATABASE;

const axiosApi = async (
  method: Method,
  url: string,
  data?: any
): Promise<AxiosResponse> => {
  const config: AxiosRequestConfig = {
    method,
    url: baseUrl + "/" + url,
    data,
  };

  return await axios(config);
};

export default axiosApi;
