import UserComponent from './User'
import Title from './style/Title'
import {UserItem} from './style/styling'


const UsersList = ({users, users2}) =>{
    console.log(users2)
    return(
        <>
            <Title>List of users</Title>
            <ul>
                {users2.map(user => 
                <UserItem key={user.id}><UserComponent user={user}/></UserItem>)}
            </ul>
        </>
        
    )
}

export default UsersList