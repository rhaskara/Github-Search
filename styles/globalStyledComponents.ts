import styled from 'styled-components';

export const PageContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  padding: 0 5rem;
  color: ${props => props?.theme?.colors?.primary};
`;

export const PageTitle = styled.h1`
  text-decoration: underline;
  color: ${props => props?.theme?.colors?.primary};
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  border: 1px solid ${props => props?.theme?.colors?.tertiary};
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 1rem;
  width: 300px;
  margin-right: 0.5rem;

  &:focus-visible {
    outline-color: ${props => props?.theme?.colors?.primary} !important;
  }
`;

export const SearchButton = styled.button`
  background-color: ${props => props?.theme?.colors?.primary};
  color: ${props => props?.theme?.colors?.highlight};
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;

  &:disabled {
    background-color: ${props => props?.theme?.colors?.secondary};
    cursor: unset;
  }
`;
