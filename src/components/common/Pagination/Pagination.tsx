import React, { FC } from "react";
import "./Pagination.scss";

import Icon from "../../common/Icon/Icon";

interface PaginationInt {
  currentPage: number;
  totalPages: number;
  handleClick: Function;
}

const Pagination: FC<PaginationInt> = ({
  currentPage,
  totalPages,
  handleClick,
}) => {
  const createLink = (i: number) => {
    return (
      <li key={i} className="pagination__item">
        {currentPage === i ? (
          <button
            disabled
            className="pagination__link pagination__link--active"
          >
            {i}
          </button>
        ) : (
          <button
            onClick={() => {
              handleClick(i);
            }}
            className="pagination__link"
          >
            {i}
          </button>
        )}
      </li>
    );
  };

  const content = () => {
    if (!totalPages) return <></>;

    if (totalPages === 1)
      return (
        <button disabled className="pagination__link pagination__link--active">
          1
        </button>
      );

    let paginationItems: JSX.Element[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        paginationItems.push(createLink(i));
      }
      return paginationItems;
    }

    paginationItems.push(createLink(1), createLink(2));

    if (currentPage > 4) {
      paginationItems.push(
        <li key="dots1" className="pagination__item">
          ...
        </li>
      );
      if (totalPages - currentPage > 3) {
        paginationItems.push(
          createLink(currentPage - 1),
          createLink(currentPage),
          createLink(currentPage + 1)
        );
      }
    } else {
      paginationItems.push(createLink(3), createLink(4), createLink(5));
    }

    if (totalPages - currentPage > 3) {
      paginationItems.push(
        <li key="dots2" className="pagination__item">
          ...
        </li>,
        createLink(totalPages - 1),
        createLink(totalPages)
      );
    } else {
      paginationItems.push(
        createLink(totalPages - 4),
        createLink(totalPages - 3),
        createLink(totalPages - 2),
        createLink(totalPages - 1),
        createLink(totalPages)
      );
    }

    return paginationItems;
  };

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {content()}
        <li>
          {currentPage === totalPages ? (
            <></>
          ) : (
            <button
              className="pagination__button"
              onClick={() => {
                handleClick(currentPage + 1);
              }}
            >
              <span>Volgende pagina</span>
              <Icon id="arrow-right" width={14} />
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
