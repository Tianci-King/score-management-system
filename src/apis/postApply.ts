import request from "./request";

const postApply = (data: any) => {
    return request({
        "url": "/api/student/apply",
        "method": "post",
        "data": data,
        "headers": {
            'Content-Type': 'application/json',
        }
    })
}
export default postApply;
//TODO: 优化接口
