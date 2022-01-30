import {axiosService} from './axios.cervice';
import {jsonEndpoints} from '../configs';

export const postsService = {
    getAll: () => axiosService.users.get(jsonEndpoints.posts).then(response => response.data)
}