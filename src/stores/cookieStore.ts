import {defineStore} from "pinia";
import {ref} from "vue";
const cookieStore = defineStore("account",() => {
    const cookie = ref("");
    const account = ref("")
    const identity = ref("");
    const cookieIs = (tmp: string) => {
        cookie.value = "account="+tmp;
        account.value = tmp;
        localStorage.setItem("account",account.value);
    }
   const identityIs = (id: string) => {
        identity.value = id;
    }
    return {
        cookie,
        cookieIs,
        account,
        identityIs,
        identity,
    }
})

export default cookieStore;