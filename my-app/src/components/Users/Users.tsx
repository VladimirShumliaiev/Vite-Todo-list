import React, { useEffect } from 'react'
import { fetchUser } from '../../redux/usersSlice'
import { useAppDispatch } from '../../hooks/hooks'
import UserList from './UserList'

const Users = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUser())
    }, [])

  return (
    <div>
        <UserList />
    </div>
  )
}

export default Users
