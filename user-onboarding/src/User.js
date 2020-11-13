import React from 'react';
import UserCard from './Card'

const User = (props) => {
    const {users} = props
    return (

    <div className='user-container'>
     
        {users.map((user, index) => { 
            return <UserCard user={user} key={index} />
        })}
     </div>  
     );
}
 
export default User;