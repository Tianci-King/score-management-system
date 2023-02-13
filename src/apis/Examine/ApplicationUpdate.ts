import request from "./request";

const updateAPI = (data?: any) => {
    return request({
      method: "post",
      url: "/api/teacher/apply",
      data: data,
      withCredentials: true
    })
  }

  export default updateAPI;