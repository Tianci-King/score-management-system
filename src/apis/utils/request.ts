import axios from "axios";

const request = (config: any) => {
    const serve = axios.create({
        timeout: 1000,
    })
    return serve(config);
};

export default request;