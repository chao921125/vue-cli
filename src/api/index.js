const baseURL = "/";
const userURL = baseURL + "/user";
const requestURL = {
  login: baseURL + "/login",
  logout: baseURL + "/logout",
  getPhoneCode: baseURL + "/getPhoneCode",
  getUserInfo: userURL + "/getUserInfo",
};
export default requestURL;
