import request from "./utils/request";


export default class postService {
    static async getPosts(data: {
        mine: number,
        count: string,
    }){
        return request({
            "url": "/api/topic",
            "method": "PATCH",
            "data": data,
            "headers": {
                'Content-Type': 'application/json',
            }
        })
    }

    static async  postPost (data: {title: string,count: string,message: string}) {
        return request({
            "method": "POST",
            "url": "/api/topic",
            "headers": {
                'Content-Type': 'application/json',
            },
            "data": data
        })
    }

    static async  changePost (data: {id: number,title: string,count: string,message: string}) {
        return request({
            "method": "PUT",
            "url": "/api/topic",
            "headers": {
                'Content-Type': 'application/json',
            },
            "data": data
        })
    }

    static async delePost (data: {id: number}) {
        return request({
            "method": "DELETE",
            "url": "/api/topic",
            "headers": {
                'Content-Type': 'application/json',
            },
            "data": data
        })
    }


}