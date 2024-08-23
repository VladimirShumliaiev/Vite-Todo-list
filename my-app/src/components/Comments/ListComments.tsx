import React from 'react'
import { useAppSelector } from '../../hooks/hooks'
import Item from './Item'

const ListComments = () => {

  const list = useAppSelector(state => state.comments.commentsList)
  return (
    <div>
        {
          list.map(e => <Item key={e.id} {...e}/>)
        }
    </div>
  )
}

export default ListComments
