import {useEffect, useState} from "react";

import {userService} from "../../servises/user.service";
import User from "./User";
import UserInfo from "./UserInfo";
import UserPost from "./UserPost";

const Users = () => {

    const [users, serUsers] = useState([]);
    const [chosenUser, setChosenUser] = useState(null);
    const [targetPosts, setTargetPosts] = useState([]);

    useEffect(() => {
        userService.getAll().then(response => serUsers([...response]))
    }, [])

    const getItem = (item) => {
        setChosenUser(item);
        document.querySelector('.users-list').style.flexBasis = '70%';
    }

    const getItemPosts = (id) => {
        userService.getUserPosts(id).then(response => setTargetPosts([...response]))
    }

    return (
        <div className={'users'}>

            <div className={'users-list'}>
                {users.map(user =>
                    <User
                        key={user.id}
                        user={user}

                        getItem={getItem}
                    />
                )}
            </div>

            {chosenUser && (
                <UserInfo
                    chosenUser={chosenUser}
                    address={chosenUser.address}
                    geo={chosenUser.address.geo}
                    company={chosenUser.company}

                    getItemPosts={getItemPosts}
                />
            )}

            <div className={'user-posts'}>
                {targetPosts.map(post =>
                    <UserPost
                        key={post.id}
                        post={post}
                    />
                )}
            </div>

        </div>
    );
};

export default Users;