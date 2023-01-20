import request from "./request";

const postSuggestion = (data: object) => {
    return request({
        "method": "post",
        "data": data,
        "url": "/api/student/advice",
        "headers": {
            'Content-Type': 'application/json',
        }
    })
}

export default postSuggestion;