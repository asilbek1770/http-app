import axios from "axios"
import { toast } from "react-toastify";
import logger from"./loggerservices"
axios.interceptors.response.use(null, (ex) => {
    const except =
        ex.response &&
        ex.response.status >= 400 &&
        ex.response.status < 500;

    if(!except){
        // alert("siz amalni bajarishda xatolikka yo'l qo'ydingiz !!")
       logger.log(ex)
        toast.error("Siz xatolikka uchradingiz !")
    }

    return Promise.reject(ex)
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}