import React from 'react';
import { ErrorComponentProps } from '../../interfaces';
import { ErrorContainer, ErrorText, ReloadButton } from './styles';

const ErrorComponent = ({ message = 'Error: Something Went Wrong' }: ErrorComponentProps) => {
  const handleReload = () => {
    window.location.reload();
  }

  return (<ErrorContainer>
    <ErrorText>{message}</ErrorText>
    <ReloadButton onClick={handleReload}>Reload</ReloadButton>
  </ErrorContainer>)
};

export default ErrorComponent;