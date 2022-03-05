import api from "../../services/api";

export const userInformations = async () => {
  try {
    const response = await api.get("/ps/me");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
