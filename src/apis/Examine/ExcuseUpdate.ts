import request from "./request";

const updateExcuseAPI = (data?: any) => {
    return request({
      method: "post",
      url: "/api/teacher/reason",
      data: data,
      withCredentials: true
    })
  }

  export default updateExcuseAPI;