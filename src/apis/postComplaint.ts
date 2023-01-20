import request from "./request";

const postComplaint = (data: any) => {
    return request({
        "data": data,
        "url": "/api/student/appeal",
        "method": "post",
        "headers": {
            'Content-Type': 'application/json',
        }
    })
}

export default postComplaint;