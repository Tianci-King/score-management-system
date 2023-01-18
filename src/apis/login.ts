import request from "./request";

const loginApi = (data: any) => {
    return request({
        data: data,
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'post',
        url: "/api/login",
    })
}

export default loginApi;