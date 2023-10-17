import request from "../utils/Axios";

export const apiRegister = (data) => {
  return request({
    url: "/auth/register",
    method: "post",
    data,
  });
};
