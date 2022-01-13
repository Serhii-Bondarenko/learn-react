import {urls} from "../configs/urls";

const getAll = () => {

    return fetch(urls.users)
        .then(response => response.json())

}

const getById = (id) => {
    
    return fetch(`${urls.users}/${id}`)
        .then(response => response.json())
    
}

const getUserPosts = (id) => {
  
    return fetch(`${urls.posts}/?userId=${id}`)
        .then(response => response.json())
    
}

export const userService = {getAll, getById, getUserPosts}