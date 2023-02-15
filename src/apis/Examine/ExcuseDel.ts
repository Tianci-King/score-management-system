import request from "./request";

const deleteExcuseAPI = (data?: any) => {
    return request({
      method: "delete",
      url: "/api/teacher/reason",
      data: data,
      withCredentials: true
    })
  }

  export default deleteExcuseAPI;