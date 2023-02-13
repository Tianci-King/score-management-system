import request from "./request";

const deleteAPI = (data?: any) => {
    return request({
      method: "delete",
      url: "/api/teacher/appeal",
      data: data,
      withCredentials: true
    })
  }

  export default deleteAPI;