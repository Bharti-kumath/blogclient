import axios from "axios"

export const axiosInstance   =axios.create({
    baseURL : "https://beyondthe-blog.herokuapp.com/"
})