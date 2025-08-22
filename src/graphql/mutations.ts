/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createContact = /* GraphQL */ `mutation CreateContact(
  $input: CreateContactInput!
  $condition: ModelContactConditionInput
) {
  createContact(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateContactMutationVariables,
  APITypes.CreateContactMutation
>;
export const updateContact = /* GraphQL */ `mutation UpdateContact(
  $input: UpdateContactInput!
  $condition: ModelContactConditionInput
) {
  updateContact(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateContactMutationVariables,
  APITypes.UpdateContactMutation
>;
export const deleteContact = /* GraphQL */ `mutation DeleteContact(
  $input: DeleteContactInput!
  $condition: ModelContactConditionInput
) {
  deleteContact(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteContactMutationVariables,
  APITypes.DeleteContactMutation
>;
export const createLead = /* GraphQL */ `mutation CreateLead(
  $input: CreateLeadInput!
  $condition: ModelLeadConditionInput
) {
  createLead(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateLeadMutationVariables,
  APITypes.CreateLeadMutation
>;
export const updateLead = /* GraphQL */ `mutation UpdateLead(
  $input: UpdateLeadInput!
  $condition: ModelLeadConditionInput
) {
  updateLead(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateLeadMutationVariables,
  APITypes.UpdateLeadMutation
>;
export const deleteLead = /* GraphQL */ `mutation DeleteLead(
  $input: DeleteLeadInput!
  $condition: ModelLeadConditionInput
) {
  deleteLead(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteLeadMutationVariables,
  APITypes.DeleteLeadMutation
>;
export const createActivity = /* GraphQL */ `mutation CreateActivity(
  $input: CreateActivityInput!
  $condition: ModelActivityConditionInput
) {
  createActivity(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateActivityMutationVariables,
  APITypes.CreateActivityMutation
>;
export const updateActivity = /* GraphQL */ `mutation UpdateActivity(
  $input: UpdateActivityInput!
  $condition: ModelActivityConditionInput
) {
  updateActivity(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateActivityMutationVariables,
  APITypes.UpdateActivityMutation
>;
export const deleteActivity = /* GraphQL */ `mutation DeleteActivity(
  $input: DeleteActivityInput!
  $condition: ModelActivityConditionInput
) {
  deleteActivity(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteActivityMutationVariables,
  APITypes.DeleteActivityMutation
>;
