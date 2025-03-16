import axios from "../untils/axiosCustomize";

export const getACloth = (clothId) => {
  return axios.post("api/v1/get-a-cloth?clothId=" + clothId);
};
