import {defineStore} from "pinia";
import {ref} from "vue";
const cookieStore = defineStore("account",() => {
    const cookie = ref("");
    const account = ref("");
    const beginTime = ref();
    const endTime = ref();
    const identity = ref("");
    const cookieIs = (tmp: string) => {
        cookie.value = "account="+tmp;
        account.value = tmp;
        localStorage.setItem("account",account.value);
    }
   const identityIs = (id: string) => {
        identity.value = id;
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
        endTime,
        identityIs,
        identity,
    }
})

export default cookieStore;