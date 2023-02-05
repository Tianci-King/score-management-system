import request from "./utils/request";

export default class teacherService {
   static async queryScore(data: {tcount: string,scount: string,year: number}) {
      return request({
         "url": "/api/teacher/managescore",
         "method": "post",
         "data": data,
         "headers": {
            'Content-Type': 'application/json',
         }
      })
   }

   static async postScore(data: object) {
       return request({
          "url": "/api/teacher/managescore",
          "method": "PUT",
          "headers": {
             'Content-Type': 'application/json',
          },
          "data": data
       })
   }

   static async getSuggestion(data: {account: string}) {
      return request({
         "url": "/api/teacher/advice",
         "method": "POST",
         "headers": {
            'Content-Type': 'application/json',
         },
         "data": data
      })
   }



}