import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks/hooks'
import ListItem from './ListItem'
import { ReactPaginateProps } from 'react-paginate'
import ReactPaginate from 'react-paginate'
import style from './Todo.module.css'

const List = () => {
  const list = useAppSelector(state => state.todo.todoList)

  const [currentItems, setCurrentItems] = useState(list);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(list.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(list.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, list]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = event.selected * itemsPerPage % list.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <div>
        {
          currentItems.map(todo => <ListItem key={todo.id} {...todo}/>)
        }
  <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName={style.pageItem}
        pageLinkClassName={style.pageNum}
        previousClassName={style.previousClassName}
        previousLinkClassName={style.pageNum}
        nextClassName={style.previousClassName}
        nextLinkClassName={style.pageNum}
        breakLabel="..."
        breakClassName={style.pageItem}
        breakLinkClassName={style.pageNum}
        containerClassName={style.Pagination}
        activeClassName={style.active}
        activeLinkClassName={style.active}
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default List
