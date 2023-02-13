import request from "./request";

const getAPI = (data?: any) => {
    return request({
      method: "put",
      url: "/api/teacher/appeal",
      data: data,
      withCredentials: true
    })
  }

  export default getAPI;