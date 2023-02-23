import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const PageNumber = styled.div<{ active: boolean }>`
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border: 1px solid lightgray;
  border-radius: 5px;
  cursor: ${(props) => (props?.disabled ? 'default' : 'pointer')};
  color: ${(props) => props?.theme?.colors?.primary};
  background-color: ${(props) => (props?.active ? props?.theme?.colors?.tertiary : props?.theme?.colors?.highlight)};
  &:hover {
    background-color: ${(props) => !props?.disabled && props?.theme?.colors?.tertiary};
    color: ${(props) => !props?.disabled && props?.theme?.colors?.textHighlight};
    transition: all 0.5s ease;
  };
`;

export const DirectionalButtons = styled.button`
  background-color: transparent;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  cursor: pointer;
  color: ${(props) => props?.theme?.colors?.primary};
  background-color: ${(props) => props?.theme?.colors?.highlight};
  &:hover {
    background-color: ${(props) => props?.theme?.colors?.tertiary};
    color: ${(props) => props?.theme?.colors?.textHighlight};
    transition: all 0.5s ease;
  };
`;