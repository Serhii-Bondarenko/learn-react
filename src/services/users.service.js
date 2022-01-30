import {axiosService} from './axios.cervice';
import {jsonEndpoints} from '../configs';

export const usersService = {
    getAll: () => axiosService.users.get(jsonEndpoints.users).then(response => response.data)
}