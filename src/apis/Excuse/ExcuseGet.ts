import request from "./request";

const getExcuseAPI = (data?: any) => {
    return request({
      method: "put",
      url: "/api/teacher/reason",
      data: data,
      withCredentials: true
    })
  }

  export default getExcuseAPI;