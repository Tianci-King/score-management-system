import request from "./request";

const changePwd = (data: any,cookie: string) => {
    return request({
        data: data,
        method: "post",
        headers: {
            'Content-Type': 'application/json',
            "cookie": cookie,
        },
        url: "/api/resetpwd",
    })
}

export default changePwd;