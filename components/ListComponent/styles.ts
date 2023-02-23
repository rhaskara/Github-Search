import styled from "styled-components";

export const EmptyListMessage = styled.div`
  font-size: 1rem;
  color: ${(props) => props?.theme?.colors?.secondary};
  margin: 1rem 0;
`;

export const ListCollection = styled.ul`
  list-style: none;
  padding: 0;
  width: 50%;
`;

export const ListItem = styled.li`
  margin: 1rem 0;
  padding: 1rem;
`;

export const ItemLink = styled.a`
  font-size: 1rem;
  color: ${(props) => props?.theme?.colors?.primary};
  text-decoration: none;
  margin-right: 1rem;

  &:hover {
    text-decoration: underline;
    color: ${(props) => props?.theme?.colors?.textHighlight};
  }
`;

export const ItemDescription = styled.p`
  font-size: 0.8rem;
  color: ${(props) => props?.theme?.colors?.secondary};
`;