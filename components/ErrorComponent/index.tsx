import React from 'react';
import { ErrorComponentProps } from '../../interfaces';
import { ErrorContainer, ErrorText } from './styles';

const ErrorComponent = ({ message = 'Error: Something Went Wrong' }: ErrorComponentProps) => (
  <ErrorContainer>
    <ErrorText>{message}</ErrorText>
  </ErrorContainer>
);

export default ErrorComponent;