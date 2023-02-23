import React from "react";
import { PaginationProps } from '../../interfaces';
import { COMMON_TEXTS } from "../../utilities/constants";
import {
  PaginationContainer,
  DirectionalButtons,
  PageNumber,
} from "./styles";

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 2 && i <= currentPage + 2)
    ) {
      pageNumbers.push(i);
    }
  }

  return (
    <PaginationContainer>
      { currentPage !== 1 && (
        <DirectionalButtons
          onClick={() => onPageChange(currentPage - 1)}
        >
          { COMMON_TEXTS.PREVIOUS }
        </DirectionalButtons>
      )}
      {pageNumbers.map((page) => (
        <PageNumber
          disabled={currentPage === page}
          key={page}
          active={currentPage === page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageNumber>
      ))}
      { currentPage !== totalPages && (
        <DirectionalButtons
          onClick={() => onPageChange(currentPage + 1)}
        >
          { COMMON_TEXTS.NEXT }
        </DirectionalButtons>
      )}
    </PaginationContainer>
  );
};

export default Pagination;