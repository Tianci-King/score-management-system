import {defineStore} from "pinia";
import {ref} from "vue";
const cookieStore = defineStore("account",() => {
    const cookie = ref("");
    const account = ref("");
    const beginTime = ref();
    const endTime = ref();
    const cookieIs = (tmp: string) => {
        cookie.value = "account="+tmp;
        account.value = tmp;
    }
    const timeIs = (begin:string , end:string) => {
        beginTime.value = begin;
        endTime.value = end;
    }

    return {
        cookie,
        cookieIs,
        account,
        timeIs,
        beginTime,
        endTime
    }
})

export default cookieStore;