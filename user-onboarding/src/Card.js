
import React from 'react';

const UserCard = (props) => {
    const {user} = props
    return ( 

        <div>
            <h2>{user.first_name}</h2>
            <img src={user.avatar} />
            <p>{user.email}</p>
        </div>
     );
}
 
export default UserCard;