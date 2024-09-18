import React, { FC } from 'react'
import style from './Photo.module.css'

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
        <div>
           Title: {title}
        </div>
      <div>
        id: {id}
      </div>
      <div>
        albumId: {albumId}
      </div>
      <div className={style.item}>
         <img src={thumbnailUrl} alt="" />
      </div>
      <div className={style.two}>
            <img src={url} alt="" />
      </div>
    </div>
  )
}

export default PhotoItem

