// import React from 'react'


const User = ({user}) => {
    return(
        <>
            <p>{user.first} {user.last}</p>
            <p>email: {user.email}, phone: {user.phone}</p>
        </>
    )    
}

export default User