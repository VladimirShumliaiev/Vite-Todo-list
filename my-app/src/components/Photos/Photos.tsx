import React, { useEffect } from 'react'
import { useAppDispatch } from '../../hooks/hooks'
import { fetchPhotos } from '../../redux/photoSlice'
import PhotoList from './PhotoList'

const Photos = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPhotos())
    },[dispatch])
    
  return (
    <div>
      <PhotoList/>
    </div>
  )
}

export default Photos
