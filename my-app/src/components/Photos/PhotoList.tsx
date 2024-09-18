import React from 'react'
import { useAppSelector } from '../../hooks/hooks'
import PhotoItem from './PhotoItem'

const PhotoList = () => {
    const list = useAppSelector(state => state.photo.photoList)
  return (
    <div>
        {
            list.map(e => <PhotoItem key={e.id}{...e}/>)
        }
    </div>
  )
}

export default PhotoList
