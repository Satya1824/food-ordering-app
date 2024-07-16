import React from "react";
import { useStore } from "../../hooks/useStore";

const Paginator = () => {
  const { page, setPage, totalMeals, limit } = useStore();

  const totalPages = Math.ceil(totalMeals / limit);
  const maxVisiblePages = 5;

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  const getVisiblePages = () => {
    const startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex justify-end items-center space-x-2 bg-white p-5 rounded-md shadow-sm mt-1">
      {getVisiblePages().map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePageClick(pageNumber)}
          className={`px-3 py-1 border rounded ${
            pageNumber === page
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700"
          }`}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Paginator;
