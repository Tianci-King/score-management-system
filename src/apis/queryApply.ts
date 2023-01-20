import request from "./request";

const queryApply = (account: string) => {
    return request({
        "method": "post",
        "url": "/api/student/queryapply",
        "headers": {
            'Content-Type': 'application/json',
        },
        "data": {
            "account": account,
        }
    })
}

export default queryApply;