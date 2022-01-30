import axios from 'axios';

import owuURL from '../configs/cars.urls';
import jsonURL from '../configs/users.urls';

export const axiosService = {
   cars: axios.create({baseURL: owuURL}),
   users: axios.create({baseURL: jsonURL})
};

