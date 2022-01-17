import axiosService from "./axios.service";
import {urls} from "../config/urls";

export const carService = {
    create: (car) => axiosService.post(urls.cars, car).then(response => response.data),
    getAll: () => axiosService.get(urls.cars).then(response => response.data),
    geyById: (id) => axiosService.get(`${urls.cars}/${id}`).then(response => response.data),
    updateById: (id, car) => axiosService.patch(`${urls.cars}/${id}`, car).then(response => response.data),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`)
 }