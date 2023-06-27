import request from "@/utils/http.js";

export const loginAPI = ({ account, password }) => {
  return request({
    url: "/login",
    method: "post",
    data() {
      return {
        account,
        password,
      };
    },
  });
};
