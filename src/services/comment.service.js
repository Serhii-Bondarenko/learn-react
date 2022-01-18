import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const commentService = {
    getById: (id) => axiosService.get(`${urls.posts}/${id}/${urls.comments}`)
        .then(response => response.data)
}