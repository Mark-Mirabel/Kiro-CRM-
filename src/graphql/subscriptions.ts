/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateContact = /* GraphQL */ `subscription OnCreateContact(
  $filter: ModelSubscriptionContactFilterInput
  $owner: String
) {
  onCreateContact(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateContactSubscriptionVariables,
  APITypes.OnCreateContactSubscription
>;
export const onUpdateContact = /* GraphQL */ `subscription OnUpdateContact(
  $filter: ModelSubscriptionContactFilterInput
  $owner: String
) {
  onUpdateContact(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateContactSubscriptionVariables,
  APITypes.OnUpdateContactSubscription
>;
export const onDeleteContact = /* GraphQL */ `subscription OnDeleteContact(
  $filter: ModelSubscriptionContactFilterInput
  $owner: String
) {
  onDeleteContact(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteContactSubscriptionVariables,
  APITypes.OnDeleteContactSubscription
>;
export const onCreateLead = /* GraphQL */ `subscription OnCreateLead(
  $filter: ModelSubscriptionLeadFilterInput
  $owner: String
) {
  onCreateLead(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLeadSubscriptionVariables,
  APITypes.OnCreateLeadSubscription
>;
export const onUpdateLead = /* GraphQL */ `subscription OnUpdateLead(
  $filter: ModelSubscriptionLeadFilterInput
  $owner: String
) {
  onUpdateLead(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLeadSubscriptionVariables,
  APITypes.OnUpdateLeadSubscription
>;
export const onDeleteLead = /* GraphQL */ `subscription OnDeleteLead(
  $filter: ModelSubscriptionLeadFilterInput
  $owner: String
) {
  onDeleteLead(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLeadSubscriptionVariables,
  APITypes.OnDeleteLeadSubscription
>;
export const onCreateActivity = /* GraphQL */ `subscription OnCreateActivity(
  $filter: ModelSubscriptionActivityFilterInput
  $owner: String
) {
  onCreateActivity(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateActivitySubscriptionVariables,
  APITypes.OnCreateActivitySubscription
>;
export const onUpdateActivity = /* GraphQL */ `subscription OnUpdateActivity(
  $filter: ModelSubscriptionActivityFilterInput
  $owner: String
) {
  onUpdateActivity(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateActivitySubscriptionVariables,
  APITypes.OnUpdateActivitySubscription
>;
export const onDeleteActivity = /* GraphQL */ `subscription OnDeleteActivity(
  $filter: ModelSubscriptionActivityFilterInput
  $owner: String
) {
  onDeleteActivity(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteActivitySubscriptionVariables,
  APITypes.OnDeleteActivitySubscription
>;
