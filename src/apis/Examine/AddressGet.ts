import request from "./request";

const addressAPI = (data?: any) => {
    return request({
      method: "patch",
      url: "/api/teacher/apply",
      data: data,
      withCredentials: true
    })
  }

  export default addressAPI;