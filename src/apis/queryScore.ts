import request from "./request";

const queryScore = (data: any) => {
    return request({
        "method": "post",
        "data": data,
        "url": "/api/student/queryscore",
        "headers": {
            'Content-Type': 'application/json',
        }
    })
}

export default queryScore;