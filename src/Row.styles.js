import styled from "styled-components";

export const RowBlock = styled.div`
  color: white;
  margin-left: 20px;
`;
export const RowPosters = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;

  &::-webkit-scrollbar {
    /* tell all over the browsers,  */
    display: none;
  }
`;

export const RowPoster = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: ${({ isLargeRow }) => (isLargeRow ? 250 : 100)}px;
  margin-right: 10px;
  transition: transtorm 450ms;

  &:hover {
    transform: ${({ isLargeRow }) =>
      isLargeRow ? "scale(1.09)" : "scale(1.08)"};
  }
`;
