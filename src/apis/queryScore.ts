import request from "./request";

const queryScore = (cookie: string,year: number,account: string) => {
    return request({
        "method": "post",
        "data": JSON.stringify({
            "year": year,
            "account": account,
        }),
        "url": "/api/student/queryscore",
        "headers": {
            'Content-Type': 'application/json',
            "cookie": cookie,
        }
    })
}

export default queryScore;