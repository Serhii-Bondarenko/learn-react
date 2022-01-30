import {axiosService} from './axios.cervice';
import {carEndpoints} from '../configs';

export const carService = {
    getAll: () => axiosService.cars.get(carEndpoints.cars).then(response => response.data),
    create: (car) => axiosService.cars.post(carEndpoints.cars, car).then(response => response.data),
    deleteById: (id) => axiosService.cars.delete(`${carEndpoints.cars}/${id}`),
    updateById: (id, car) => axiosService.cars.patch(`${carEndpoints.cars}/${id}`, car)
        .then(response => response.data)
}