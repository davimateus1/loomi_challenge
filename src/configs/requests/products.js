import api from "../../services/api";

export const totalProducts = async () => {
  try {
    const response = await api.get("/ps/products-by-status");
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const deliveryAvg = async () => {
  try {
    const response = await api.get("/ps/delivery-avgs");
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};