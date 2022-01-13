import axios from 'axios';

let axiosInstance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/'});

const getAll = () => {return axiosInstance.get('/users/')}

const getFilteredData = (setState, formState) => {

    getAll().then(response => {
        let filteredUsers = response.data.filter(value => value.name.toLowerCase().includes(formState.name.toLowerCase())
            && value.username.toLowerCase().includes(formState.userName.toLowerCase())
            && value.email.toLowerCase().includes(formState.email.toLowerCase())
        );
        setState(filteredUsers);
    })

}

export const services = {getAll, getFilteredData}

