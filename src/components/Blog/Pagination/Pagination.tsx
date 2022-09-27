import React from "react";
import "./Pagination.scss";

const Pagination = () => {
  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item">
          <a href="" className="pagination__link">
            1
          </a>
        </li>
        <li className="pagination__item">
          <a href="" className="pagination__link">
            2
          </a>
        </li>
        <li className="pagination__item">
          <a href="" className="pagination__link pagination__link--current">
            3
          </a>
        </li>
        <li className="pagination__item">
          <a href="" className="pagination__link">
            4
          </a>
        </li>
        <li className="pagination__item">
          <a href="" className="pagination__link">
            5
          </a>
        </li>
        <li className="pagination__item">...</li>
        <li className="pagination__item">
          <a href="" className="pagination__link">
            18
          </a>
        </li>
        <li className="pagination__item">
          <a href="" className="pagination__link">
            19
          </a>
        </li>
        <li>
          <button className="pagination__button">Volgende pagina</button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
