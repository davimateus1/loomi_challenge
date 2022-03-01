import api from "../../services/api";

export const authenticatedUser = async (data) => {
  try {
    const response = await api.post("/ps/login", data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};