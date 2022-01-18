import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const postService = {
    getAll: ()=> axiosService.get(urls.posts)
        .then(response => response.data),

    getById: (id) => axiosService.get(`${urls.posts}/${id}`)
        .then(response => response.data),

    getCommentsById: (id) => axiosService.get(`${urls.posts}/${id}${urls.comments}`)
        .then(response => response.data)
}