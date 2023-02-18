import request from "./utils/request";

export default class adminService {
    static async getTeacher () {
        return request({
            "url": "/api/admin/teacher",
            "method": "PATCH",
            "headers": {
                'Content-Type': 'application/json',
            }
        })
    }
    static async addTeacher (data: object) {
        return request({
            "url": "/api/admin/teacher",
            "method": "POST",
            "data": data,
            "headers": {
                'Content-Type': 'application/json',
            }
        })
    }
    static async changeTeacher (data: object) {
        return request({
            "url": "/api/admin/teacher",
            "method": "PUT",
            "data": data,
            "headers": {
                'Content-Type': 'application/json',
            }
        })
    }
    static async deleteTeacher (data: {account: string}) {
        return request({
            "url": "/api/admin/teacher",
            "method": "DELETE",
            "data": data,
            "headers": {
                'Content-Type': 'application/json',
            }
        })
    }
    static async changeStudent(data: object) {
        return request({
            "url": "/api/admin/student",
            "method": "PUT",
            "data": data,
            "headers": {
                'Content-Type': 'application/json',
            }
        })
    }
    static async addStudent (data: {account: string}) {
        return request({
            "url": "/api/admin/student",
            "method": "POST",
            "data": data,
            "headers": {
                'Content-Type': 'application/json',
            }
        })
    }
    static async deleteStudent (data: {account: string}) {
        return request({
            "url": "/api/admin/student",
            "method": "DELETE",
            "data": data,
            "headers": {
                'Content-Type': 'application/json',
            }
        })
    }
    static async getStudent () {
        return request({
            "url": "/api/admin/student",
            "method": "PATCH",
            "headers": {
                'Content-Type': 'application/json',
            }
        })
    }
}