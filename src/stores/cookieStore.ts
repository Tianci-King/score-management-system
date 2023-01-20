import {defineStore} from "pinia";
import {ref} from "vue";
const cookieStore = defineStore("account",() => {
    const cookie = ref("");
    const account = ref("");
    const cookieIs = (tmp: string) => {
        cookie.value = "account="+tmp;
        account.value = tmp;
    }

    return {
        cookie,
        cookieIs,
        account,
    }
})

export default cookieStore;