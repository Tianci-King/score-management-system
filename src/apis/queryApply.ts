import request from "./request";

const queryApply = (cookie: string) => {
    return request({
        "method": "get",
        "url": "/api/student/queryapply",
        "headers": {
            'Content-Type': 'application/json',
            "cookie": cookie,
        }
    })
}

export default queryApply;