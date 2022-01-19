import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const albumService = {
    getPhotosById: (id) => axiosService.get(`${urls.albums}/${id}${urls.photos}`)
        .then(response => response.data)
}