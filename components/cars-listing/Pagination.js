import { useState, useEffect } from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const pagesArray = [];
    for (let i = 1; i <= totalPages; i++) {
      pagesArray.push(i);
    }
    setPages(pagesArray);
  }, [totalPages]);

  return (
    <div>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={currentPage === page ? 'active' : ''}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
