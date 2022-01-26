import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const episodeService = {
    getByID: (id) => axiosService.get(`${urls.episodes}/${id}`)
        .then(response => response.data)
}