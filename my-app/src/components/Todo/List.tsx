import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/hooks";
import ListItem from "./ListItem";
import ReactPaginate from "react-paginate";
import style from './Todo.module.css'

const List = () => {
  const todoList = useAppSelector((state) => state.todo.list);

   const [currentItems, setCurrentItems] = useState(todoList);
   const [pageCount, setPageCount] = useState(0);
   const [itemOffset, setItemOffset] = useState(0);
   const itemsPerPage = 11
 
   useEffect(() => {
     const endOffset = itemOffset + itemsPerPage;
     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
     setCurrentItems(todoList.slice(itemOffset, endOffset));
     setPageCount(Math.ceil(todoList.length / itemsPerPage));
   }, [itemOffset, itemsPerPage, todoList]);
 
   const handlePageClick = (event: { selected: number; }) => {
     const newOffset = event.selected * itemsPerPage % todoList.length;
     setItemOffset(newOffset);
   };

  return (
    <div>
      {currentItems.map((todo) => (
        <ListItem key={todo.id} {...todo} />
      ))}

      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName={style.Pagination}
        pageLinkClassName={style.pageNum}
        previousClassName={style.pageNum}
        // previousLinkClassName={style.pageNum}
        nextClassName={style.pageNum}
        // nextLinkClassName={style.pageNum}
        breakLabel="..."
        breakClassName={style.pageNum}
        // breakLinkClassName={style.pageNum}
        containerClassName={style.Pagination}
        // activeClassName={style.active}
        activeLinkClassName={style.active}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default List;
