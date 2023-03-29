import styled from "styled-components";
import ReactPaginate from "react-paginate";

export const StyledPagination = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  li {
    display: inline-block;
    margin-right: 5px;
    border-radius: 3px;
    padding: 5px 10px;
    cursor: pointer;
  }

  li.active {
    background-color: #4CAF50;
    color: #fff;
  }

  li:hover:not(.active) {
    background-color: #ddd;
  }

  li:first-child,
  li:last-child {
    margin-right: 10px;
  }

  li.break-me {
    padding: 5px 10px;
    border-radius: 3px;
    border: none;
    background-color: transparent;
    cursor: default;
    pointer-events: none;
  }
`;