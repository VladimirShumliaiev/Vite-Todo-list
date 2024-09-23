import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks/hooks'
import PhotoItem from './PhotoItem'
import ReactPaginate from 'react-paginate'
import style from './Photo.module.css'

const PhotoList = () => {
    const list = useAppSelector(state => state.photo.photoList)
     // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(list);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 10
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(list.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(list.length / itemsPerPage));
  }, [itemOffset, itemsPerPage,list]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: {selected: number}) => {
    const newOffset = event.selected * itemsPerPage % list.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };
  return (
    <div>
        {
            currentItems.map(e => <PhotoItem key={e.id}{...e}/>)
        }
         <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName={style.pageNumber}
        previousClassName={style.paginationColor}
        previousLinkClassName={style.pageNumber}
        nextClassName={style.paginationColor}
        nextLinkClassName={style.pageNumber}
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName={style.pageNumber}
        containerClassName={style.pagination}
        activeClassName={style.active}
        activeLinkClassName={style.active}
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default PhotoList
