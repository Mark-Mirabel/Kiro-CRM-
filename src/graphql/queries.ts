/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getContact = /* GraphQL */ `query GetContact($id: ID!) {
  getContact(id: $id) {
    id
    firstName
    lastName
    email
    phone
    company
    position
    notes
    activities {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetContactQueryVariables,
  APITypes.GetContactQuery
>;
export const listContacts = /* GraphQL */ `query ListContacts(
  $filter: ModelContactFilterInput
  $limit: Int
  $nextToken: String
) {
  listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      email
      phone
      company
      position
      notes
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContactsQueryVariables,
  APITypes.ListContactsQuery
>;
export const getLead = /* GraphQL */ `query GetLead($id: ID!) {
  getLead(id: $id) {
    id
    firstName
    lastName
    email
    phone
    company
    status
    source
    value
    notes
    activities {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetLeadQueryVariables, APITypes.GetLeadQuery>;
export const listLeads = /* GraphQL */ `query ListLeads(
  $filter: ModelLeadFilterInput
  $limit: Int
  $nextToken: String
) {
  listLeads(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      email
      phone
      company
      status
      source
      value
      notes
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListLeadsQueryVariables, APITypes.ListLeadsQuery>;
export const getActivity = /* GraphQL */ `query GetActivity($id: ID!) {
  getActivity(id: $id) {
    id
    type
    title
    description
    dueDate
    completed
    contactID
    contact {
      id
      firstName
      lastName
      email
      phone
      company
      position
      notes
      createdAt
      updatedAt
      owner
      __typename
    }
    leadID
    lead {
      id
      firstName
      lastName
      email
      phone
      company
      status
      source
      value
      notes
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetActivityQueryVariables,
  APITypes.GetActivityQuery
>;
export const listActivities = /* GraphQL */ `query ListActivities(
  $filter: ModelActivityFilterInput
  $limit: Int
  $nextToken: String
) {
  listActivities(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      type
      title
      description
      dueDate
      completed
      contactID
      leadID
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListActivitiesQueryVariables,
  APITypes.ListActivitiesQuery
>;
export const activitiesByContactID = /* GraphQL */ `query ActivitiesByContactID(
  $contactID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelActivityFilterInput
  $limit: Int
  $nextToken: String
) {
  activitiesByContactID(
    contactID: $contactID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      type
      title
      description
      dueDate
      completed
      contactID
      leadID
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ActivitiesByContactIDQueryVariables,
  APITypes.ActivitiesByContactIDQuery
>;
export const activitiesByLeadID = /* GraphQL */ `query ActivitiesByLeadID(
  $leadID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelActivityFilterInput
  $limit: Int
  $nextToken: String
) {
  activitiesByLeadID(
    leadID: $leadID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      type
      title
      description
      dueDate
      completed
      contactID
      leadID
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ActivitiesByLeadIDQueryVariables,
  APITypes.ActivitiesByLeadIDQuery
>;
