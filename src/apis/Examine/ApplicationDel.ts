import request from "./request";

const deleteAPI = (data?: any) => {
    return request({
      method: "delete",
      url: "/api/teacher/apply",
      data: data,
      withCredentials: true
    })
  }

  export default deleteAPI;