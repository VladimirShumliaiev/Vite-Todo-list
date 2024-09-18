import React, { FC } from 'react'

type PhotoProps = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

const PhotoItem: FC<PhotoProps> = (props) => {
    const {id, albumId, title, thumbnailUrl, url} = props
  return (
    <div>
       Title: {title}
       id: {id}
       albumId: {albumId}
       <img src={thumbnailUrl} alt="" />
       <img src={url} alt="" />
    </div>
  )
}

export default PhotoItem

