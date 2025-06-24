import axios from "axios";

const API_URL = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

export const getOrders = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
