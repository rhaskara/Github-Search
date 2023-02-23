import React from "react";
import { LoadingOverlay, Spinner } from "./styles";
import { LoadingComponentProps } from "../../interfaces";

const LoadingComponent = ({ isLoading }: LoadingComponentProps) => {
  if (!isLoading) {
    return;
  }

  return (
    <LoadingOverlay>
      <Spinner />
    </LoadingOverlay>
  );
};

export default LoadingComponent;