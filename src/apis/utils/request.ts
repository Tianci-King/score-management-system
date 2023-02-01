import axios from "axios";

const request = (config: any) => {
    const serve = axios.create({
        timeout: 1000,
        baseURL: "http://127.0.0.1:4523/m1/2202253-0-default",
    })
    return serve(config);
};

export default request;