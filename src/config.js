import axios from "axios"

export const axiosInstance   =axios.create({
    baseURL : "https://beyond-theblog.herokuapp.com/"
})