import React, { useState, useEffect } from "react";
import "./Installation.css";
import Installation1 from "./Installation1";
import Installation2 from "./Installation2";
import Installation3 from "./Installation3";
import Installation4 from "./Installation4";
import Installation5 from "./Installation5";

const Installation = () => {
  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = localStorage.getItem("currentPage");
    return savedPage ? parseInt(savedPage, 10) : 1;
  });

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  const renderInstallation = () => {
    switch (currentPage) {
      case 1:
        return <Installation1 />;
      case 2:
        return <Installation2 />;
      case 3:
        return <Installation3 />;
      case 4:
        return <Installation4 />;
      case 5:
        return <Installation5 />;
      default:
        return <Installation1 />;
    }
  };

  const handleBack = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage < 5 ? prevPage + 1 : prevPage));
  };

  return (
    <div className="installation">
        <div className="installationTitle">
      <h1>Our Installations</h1>
        </div>
      {renderInstallation()}
      <div className="pagination">
        <button onClick={handleBack} disabled={currentPage === 1}>
          Back
        </button>
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNext} disabled={currentPage === 5}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Installation;
