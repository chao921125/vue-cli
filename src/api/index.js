const baseURI = "/";
const userURI = baseURI + "/user";
const baseURL = {
  login: baseURI + "/login",
  logout: baseURI + "/logout",
  getPhoneCode: baseURI + "/getPhoneCode",
  getUserInfo: userURI + "/getUserInfo",
};
export default baseURL;
