import React from "react"
import { ListComponentProps } from "../../interfaces"
import ErrorComponent from "../ErrorComponent";
import { EmptyListMessage, ItemDescription, ItemLink, ListCollection, ListItem } from "./styles";

export const ListComponent = ({ cleanSearch, repositories, loading, errorEvent }: ListComponentProps) => {

  return errorEvent ? <ErrorComponent message={errorEvent} />
    : <>
      { repositories?.length === 0 && !loading && !errorEvent && !cleanSearch && (
        <EmptyListMessage>No repositories found.</EmptyListMessage>
      )}
      { repositories?.length > 0 && (
        <ListCollection>
          {repositories?.map((repository) => (
            <ListItem key={repository.html_url}>
              <ItemLink href={repository.html_url} target="_blank">{repository.name}</ItemLink>
              <ItemDescription>{repository.description}</ItemDescription>
            </ListItem>
          ))}
        </ListCollection>
      )}
    </>;
}