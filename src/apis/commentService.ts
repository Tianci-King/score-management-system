import request from "./utils/request";


export default class commentService {
    static async getComments(data: {
         id: number
    }){
        return request({
            "url": "/api/topic/comment",
            "method": "PATCH",
            "data": data,
            "headers": {
                'Content-Type': 'application/json',
            }
        })
    }

    static async  postComment (data: {id: number,count: string,message: string}) {
        return request({
            "method": "POST",
            "url": "/api/topic/comment",
            "headers": {
                'Content-Type': 'application/json',
            },
            "data": data
        })
    }

    static async  changeComment (data: {id: number,count: string,message: string}) {
        return request({
            "method": "PUT",
            "url": "/api/topic/comment",
            "headers": {
                'Content-Type': 'application/json',
            },
            "data": data
        })
    }

    static async deleComment (data: {id: number}) {
        return request({
            "method": "DELETE",
            "url": "/api/topic/comment",
            "headers": {
                'Content-Type': 'application/json',
            },
            "data": data
        })
    }


}