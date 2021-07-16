/**
 * 订单
 */
import axios from "@/plugins/axios";
import requestURL from "./index";

export function payOrder(data) {
  return axios({
    url: requestURL.payOrder,
    method: "POST",
    data,
  });
}
