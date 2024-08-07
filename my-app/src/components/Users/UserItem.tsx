import React, { FC } from 'react'
import Users from './UserType'
import { useAppDispatch } from '../../hooks/hooks'
import { deleteUser } from '../../redux/usersSlice'

type PropsUsers = Users

const UserItem: FC<PropsUsers> = (props) => {
    const {id,  username, email,  address: {street,suite, city,zipcode, geo: {lat,lng }},  phone,website, company: {name, catchPhrase, bs} } = props

    const dispatch = useAppDispatch()

    const handleOnclick = () => {
        dispatch(deleteUser(id))
    }


  return (
    <li>
        <div>
           id: {id}
        </div>
        <div>
        name: {name}
        </div>
        <div>
        username: {username}
        </div>
        <div>
        email: {email}
        </div>
       <div>
       address: 
        <div>street: {street}</div>
        <div>suite: {suite}</div>
        <div>city: {city}</div>
        <div>zipcode: {zipcode}</div>
        <div>
            geo: 
                <div>
                    lat: {lat}
                </div>
                 <div>
                 lng: {lng}
               </div>
        </div>
        <div>phone:{phone}</div>
        <div>website:{website}</div>
       <div>
         company:
            <div>name:{name}</div>
            <div>catchPhrase:{catchPhrase}</div>
            <div>bs:{bs}</div>
       </div>
       </div>
            <button onClick={handleOnclick}> delete </button>
        <hr />

    </li>
  )
}

export default UserItem
