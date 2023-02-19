import request from "./request";

const timeAPI = (data?: any) => {
    return request({
      method: "post",
      url: "/api/teacher/applytime",
      data: data,
      withCredentials: true
    })
  }

  export default timeAPI;