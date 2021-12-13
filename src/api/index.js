const baseURL = "/api";
const userURL = baseURL + "/user";
const requestURL = {
  demoMethods: baseURL + "/usr/get",
  login: baseURL + "/login",
  logout: baseURL + "/logout",
  getPhoneCode: baseURL + "/getPhoneCode",
  getUserInfo: userURL + "/getUserInfo",
  payOrder: userURL + "/payOrder",
};
export default requestURL;
