import request from "./utils/request";
import { Ref } from "vue";

export default class studentService {
    static async queryScore(data: object) {
        return request({
            "method": "post",
            "data": data,
            "url": "/api/student/queryscore",
            "headers": {
                'Content-Type': 'application/json',
            }
        })
    }

    static async queryApply(account: Ref<string>) {
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

    static async postSuggestion(data: object){
        return request({
            "method": "post",
            "data": data,
            "url": "/api/student/advice",
            "headers": {
                'Content-Type': 'application/json',
            }
        })
    }

    static async postComplaint(data: object) {
        return request({
            "data": data,
            "url": "/api/student/appeal",
            "method": "post",
            "headers": {
                'Content-Type': 'application/json',
            }
        })
    }

    static async postApply(data: object) {
        return request({
            "url": "/api/student/apply",
            "method": "post",
            "data": data,
            "headers": {
                'Content-Type': 'application/json',
            }
        })
    }
    static async getComplaint(account: string) {
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
}