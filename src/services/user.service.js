import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const userService = {
    getAll: () => axiosService.get(urls.users)
        .then(response => response.data),

    getById: (id) => axiosService.get(`${urls.users}/${id}`)
        .then(response => response.data),

    getPostsById: (id) => axiosService.get(`${urls.users}/${id}${urls.posts}`)
        .then(response => response.data),

    getAlbumsById: (id) => axiosService.get(`${urls.users}/${id}${urls.albums}`)
        .then(response => response.data)
}