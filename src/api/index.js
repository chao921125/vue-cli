const baseURL = "/";
const userURL = baseURL + "/user";
const requestURL = {
  login: baseURL + "/login",
  logout: baseURL + "/logout",
  getPhoneCode: baseURL + "/getPhoneCode",
  getUserInfo: userURL + "/getUserInfo",
  payOrder: userURL + "/payOrder",
};
export default requestURL;
