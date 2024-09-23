import React from "react";

const Book = () => {

  function book() {
    console.log('hello')
  }

  const book2 = function() {
    console.log('hi')
  }

  const book3 = () => {
    console.log('yo')
  }

  return (
    <div>
        {book()}
        {book2()}
        {book3()}
    </div>
  )
};

export default Book;
