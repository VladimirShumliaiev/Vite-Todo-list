import React from 'react'
import { useAppSelector } from '../../hooks/hooks'
import UserItem from './UserItem'

const UserList = () => {
    const list = useAppSelector(state => state.users.userList)
  return (
    <div>
        {
            list.map(e => <UserItem key={e.id} {...e}/>)
        }
    </div>
  )
}

export default UserList
