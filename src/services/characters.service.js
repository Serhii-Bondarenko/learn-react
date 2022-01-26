import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const charactersService = {
    getAll: () => axiosService.get(urls.characters)
        .then(response => response.data),

    getByID: (id) => axiosService.get(`${urls.characters}/${id}`)
        .then(response => response.data),

    getPart: (arr) => axiosService.get(`${urls.characters}/${arr}`)
        .then(response => response.data),

    getByLink: (link) => axiosService(link)
        .then(response => response.data)
}