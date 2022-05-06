import React from 'react'
// import UserClass from '../data/User'
import FootComponent from './FootComponent'
import Navigation from './Navigation'
// import UserComponent from './User'
import users from '../data/usersList'
import UsersList from './UsersList'
import {users2} from '../data/userList2'
import {GeneralContainer} from './style/styling'

const App = () => {
  //console.log(users2)
  return (
    <GeneralContainer > 
          <Navigation />
          <UsersList users={users} users2={users2}/>
          <FootComponent />
    </GeneralContainer>
  )
}

export default App
