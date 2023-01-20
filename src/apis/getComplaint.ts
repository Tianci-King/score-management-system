import request from "./request";

const queryComplaint = (account: string) => {
    return request({
        "method": "post",
        "url": "/api/student/queryappeal",
        "headers": {
            'Content-Type': 'application/json',
        },
        "data": {
            "account": account,
        }
    })
}

export default queryComplaint;