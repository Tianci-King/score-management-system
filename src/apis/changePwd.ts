import request from "./request";

const changePwd = (data: any) => {
    return request({
        data: data,
        method: "post",
        headers: {
            'Content-Type': 'application/json',
        },
        url: "/api/resetpwd",
    })
}

export default changePwd;