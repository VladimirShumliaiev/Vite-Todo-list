import React, { useEffect, useState } from 'react'
import { fetchUser } from '../../redux/usersSlice'
import { useAppDispatch } from '../../hooks/hooks'
import UserList from './UserList'

const Users = () => {
    const dispatch = useAppDispatch()
    const [time, setTime] = useState(new Date())

    setInterval(() => setTime(new Date),1000)
   
    useEffect(() => {
        dispatch(fetchUser())
    }, [])

  return (
    <div>
        {time.toLocaleString()}
        <UserList />
    </div>
  )
}

export default Users
