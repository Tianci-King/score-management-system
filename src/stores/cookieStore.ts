import {defineStore} from "pinia";
import {ref} from "vue";
const cookieStore = defineStore("account",() => {
    const cookie = ref("");
    const cookieIs = (tmp: string) => {
        cookie.value = "account="+tmp;
    }

    return {
        cookie,
        cookieIs,
    }
})

export default cookieStore;