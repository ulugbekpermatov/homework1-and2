import React from 'react'
import WithData from '../higher-order';

const UsersList = ({user}) => {

    const UsersView = user.map(({username,email,id}) =>(
        <li key={`user-${id}`}> {username} {email}</li>
      ));


  return <ul>{UsersView}</ul>
}

export default WithData(UsersList)
