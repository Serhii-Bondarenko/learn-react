import {axiosService} from './axios.cervice';
import {jsonEndpoints} from '../configs';

export const commentsService = {
    getAll: () => axiosService.users.get(jsonEndpoints.comments).then(response => response.data)
}