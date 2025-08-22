/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateContactInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  email: string,
  phone?: string | null,
  company?: string | null,
  position?: string | null,
  notes?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelContactConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  company?: ModelStringInput | null,
  position?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelContactConditionInput | null > | null,
  or?: Array< ModelContactConditionInput | null > | null,
  not?: ModelContactConditionInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Contact = {
  __typename: "Contact",
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  phone?: string | null,
  company?: string | null,
  position?: string | null,
  notes?: string | null,
  activities?: ModelActivityConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelActivityConnection = {
  __typename: "ModelActivityConnection",
  items:  Array<Activity | null >,
  nextToken?: string | null,
};

export type Activity = {
  __typename: "Activity",
  id: string,
  type: ActivityType,
  title: string,
  description?: string | null,
  dueDate?: string | null,
  completed: boolean,
  contactID?: string | null,
  contact?: Contact | null,
  leadID?: string | null,
  lead?: Lead | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export enum ActivityType {
  CALL = "CALL",
  EMAIL = "EMAIL",
  MEETING = "MEETING",
  TASK = "TASK",
  NOTE = "NOTE",
}


export type Lead = {
  __typename: "Lead",
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  phone?: string | null,
  company?: string | null,
  status: LeadStatus,
  source?: string | null,
  value?: number | null,
  notes?: string | null,
  activities?: ModelActivityConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export enum LeadStatus {
  NEW = "NEW",
  CONTACTED = "CONTACTED",
  QUALIFIED = "QUALIFIED",
  PROPOSAL = "PROPOSAL",
  NEGOTIATION = "NEGOTIATION",
  CLOSED_WON = "CLOSED_WON",
  CLOSED_LOST = "CLOSED_LOST",
}


export type UpdateContactInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  phone?: string | null,
  company?: string | null,
  position?: string | null,
  notes?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteContactInput = {
  id: string,
};

export type CreateLeadInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  email: string,
  phone?: string | null,
  company?: string | null,
  status: LeadStatus,
  source?: string | null,
  value?: number | null,
  notes?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelLeadConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  company?: ModelStringInput | null,
  status?: ModelLeadStatusInput | null,
  source?: ModelStringInput | null,
  value?: ModelFloatInput | null,
  notes?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLeadConditionInput | null > | null,
  or?: Array< ModelLeadConditionInput | null > | null,
  not?: ModelLeadConditionInput | null,
  owner?: ModelStringInput | null,
};

export type ModelLeadStatusInput = {
  eq?: LeadStatus | null,
  ne?: LeadStatus | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateLeadInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  phone?: string | null,
  company?: string | null,
  status?: LeadStatus | null,
  source?: string | null,
  value?: number | null,
  notes?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteLeadInput = {
  id: string,
};

export type CreateActivityInput = {
  id?: string | null,
  type: ActivityType,
  title: string,
  description?: string | null,
  dueDate?: string | null,
  completed: boolean,
  contactID?: string | null,
  leadID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelActivityConditionInput = {
  type?: ModelActivityTypeInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  contactID?: ModelIDInput | null,
  leadID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelActivityConditionInput | null > | null,
  or?: Array< ModelActivityConditionInput | null > | null,
  not?: ModelActivityConditionInput | null,
  owner?: ModelStringInput | null,
};

export type ModelActivityTypeInput = {
  eq?: ActivityType | null,
  ne?: ActivityType | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateActivityInput = {
  id: string,
  type?: ActivityType | null,
  title?: string | null,
  description?: string | null,
  dueDate?: string | null,
  completed?: boolean | null,
  contactID?: string | null,
  leadID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteActivityInput = {
  id: string,
};

export type ModelContactFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  company?: ModelStringInput | null,
  position?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelContactFilterInput | null > | null,
  or?: Array< ModelContactFilterInput | null > | null,
  not?: ModelContactFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelContactConnection = {
  __typename: "ModelContactConnection",
  items:  Array<Contact | null >,
  nextToken?: string | null,
};

export type ModelLeadFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  company?: ModelStringInput | null,
  status?: ModelLeadStatusInput | null,
  source?: ModelStringInput | null,
  value?: ModelFloatInput | null,
  notes?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLeadFilterInput | null > | null,
  or?: Array< ModelLeadFilterInput | null > | null,
  not?: ModelLeadFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelLeadConnection = {
  __typename: "ModelLeadConnection",
  items:  Array<Lead | null >,
  nextToken?: string | null,
};

export type ModelActivityFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelActivityTypeInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  contactID?: ModelIDInput | null,
  leadID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelActivityFilterInput | null > | null,
  or?: Array< ModelActivityFilterInput | null > | null,
  not?: ModelActivityFilterInput | null,
  owner?: ModelStringInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionContactFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  company?: ModelSubscriptionStringInput | null,
  position?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionContactFilterInput | null > | null,
  or?: Array< ModelSubscriptionContactFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionLeadFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  company?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  source?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionFloatInput | null,
  notes?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLeadFilterInput | null > | null,
  or?: Array< ModelSubscriptionLeadFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionActivityFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  dueDate?: ModelSubscriptionStringInput | null,
  completed?: ModelSubscriptionBooleanInput | null,
  contactID?: ModelSubscriptionIDInput | null,
  leadID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionActivityFilterInput | null > | null,
  or?: Array< ModelSubscriptionActivityFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateContactMutationVariables = {
  input: CreateContactInput,
  condition?: ModelContactConditionInput | null,
};

export type CreateContactMutation = {
  createContact?:  {
    __typename: "Contact",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone?: string | null,
    company?: string | null,
    position?: string | null,
    notes?: string | null,
    activities?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateContactMutationVariables = {
  input: UpdateContactInput,
  condition?: ModelContactConditionInput | null,
};

export type UpdateContactMutation = {
  updateContact?:  {
    __typename: "Contact",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone?: string | null,
    company?: string | null,
    position?: string | null,
    notes?: string | null,
    activities?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteContactMutationVariables = {
  input: DeleteContactInput,
  condition?: ModelContactConditionInput | null,
};

export type DeleteContactMutation = {
  deleteContact?:  {
    __typename: "Contact",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone?: string | null,
    company?: string | null,
    position?: string | null,
    notes?: string | null,
    activities?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateLeadMutationVariables = {
  input: CreateLeadInput,
  condition?: ModelLeadConditionInput | null,
};

export type CreateLeadMutation = {
  createLead?:  {
    __typename: "Lead",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone?: string | null,
    company?: string | null,
    status: LeadStatus,
    source?: string | null,
    value?: number | null,
    notes?: string | null,
    activities?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateLeadMutationVariables = {
  input: UpdateLeadInput,
  condition?: ModelLeadConditionInput | null,
};

export type UpdateLeadMutation = {
  updateLead?:  {
    __typename: "Lead",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone?: string | null,
    company?: string | null,
    status: LeadStatus,
    source?: string | null,
    value?: number | null,
    notes?: string | null,
    activities?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteLeadMutationVariables = {
  input: DeleteLeadInput,
  condition?: ModelLeadConditionInput | null,
};

export type DeleteLeadMutation = {
  deleteLead?:  {
    __typename: "Lead",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone?: string | null,
    company?: string | null,
    status: LeadStatus,
    source?: string | null,
    value?: number | null,
    notes?: string | null,
    activities?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateActivityMutationVariables = {
  input: CreateActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type CreateActivityMutation = {
  createActivity?:  {
    __typename: "Activity",
    id: string,
    type: ActivityType,
    title: string,
    description?: string | null,
    dueDate?: string | null,
    completed: boolean,
    contactID?: string | null,
    contact?:  {
      __typename: "Contact",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      phone?: string | null,
      company?: string | null,
      position?: string | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    leadID?: string | null,
    lead?:  {
      __typename: "Lead",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      phone?: string | null,
      company?: string | null,
      status: LeadStatus,
      source?: string | null,
      value?: number | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateActivityMutationVariables = {
  input: UpdateActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type UpdateActivityMutation = {
  updateActivity?:  {
    __typename: "Activity",
    id: string,
    type: ActivityType,
    title: string,
    description?: string | null,
    dueDate?: string | null,
    completed: boolean,
    contactID?: string | null,
    contact?:  {
      __typename: "Contact",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      phone?: string | null,
      company?: string | null,
      position?: string | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    leadID?: string | null,
    lead?:  {
      __typename: "Lead",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      phone?: string | null,
      company?: string | null,
      status: LeadStatus,
      source?: string | null,
      value?: number | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteActivityMutationVariables = {
  input: DeleteActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type DeleteActivityMutation = {
  deleteActivity?:  {
    __typename: "Activity",
    id: string,
    type: ActivityType,
    title: string,
    description?: string | null,
    dueDate?: string | null,
    completed: boolean,
    contactID?: string | null,
    contact?:  {
      __typename: "Contact",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      phone?: string | null,
      company?: string | null,
      position?: string | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    leadID?: string | null,
    lead?:  {
      __typename: "Lead",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      phone?: string | null,
      company?: string | null,
      status: LeadStatus,
      source?: string | null,
      value?: number | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetContactQueryVariables = {
  id: string,
};

export type GetContactQuery = {
  getContact?:  {
    __typename: "Contact",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone?: string | null,
    company?: string | null,
    position?: string | null,
    notes?: string | null,
    activities?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListContactsQueryVariables = {
  filter?: ModelContactFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContactsQuery = {
  listContacts?:  {
    __typename: "ModelContactConnection",
    items:  Array< {
      __typename: "Contact",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      phone?: string | null,
      company?: string | null,
      position?: string | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLeadQueryVariables = {
  id: string,
};

export type GetLeadQuery = {
  getLead?:  {
    __typename: "Lead",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone?: string | null,
    company?: string | null,
    status: LeadStatus,
    source?: string | null,
    value?: number | null,
    notes?: string | null,
    activities?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListLeadsQueryVariables = {
  filter?: ModelLeadFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLeadsQuery = {
  listLeads?:  {
    __typename: "ModelLeadConnection",
    items:  Array< {
      __typename: "Lead",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      phone?: string | null,
      company?: string | null,
      status: LeadStatus,
      source?: string | null,
      value?: number | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetActivityQueryVariables = {
  id: string,
};

export type GetActivityQuery = {
  getActivity?:  {
    __typename: "Activity",
    id: string,
    type: ActivityType,
    title: string,
    description?: string | null,
    dueDate?: string | null,
    completed: boolean,
    contactID?: string | null,
    contact?:  {
      __typename: "Contact",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      phone?: string | null,
      company?: string | null,
      position?: string | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    leadID?: string | null,
    lead?:  {
      __typename: "Lead",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      phone?: string | null,
      company?: string | null,
      status: LeadStatus,
      source?: string | null,
      value?: number | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListActivitiesQueryVariables = {
  filter?: ModelActivityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActivitiesQuery = {
  listActivities?:  {
    __typename: "ModelActivityConnection",
    items:  Array< {
      __typename: "Activity",
      id: string,
      type: ActivityType,
      title: string,
      description?: string | null,
      dueDate?: string | null,
      completed: boolean,
      contactID?: string | null,
      leadID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ActivitiesByContactIDQueryVariables = {
  contactID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelActivityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ActivitiesByContactIDQuery = {
  activitiesByContactID?:  {
    __typename: "ModelActivityConnection",
    items:  Array< {
      __typename: "Activity",
      id: string,
      type: ActivityType,
      title: string,
      description?: string | null,
      dueDate?: string | null,
      completed: boolean,
      contactID?: string | null,
      leadID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ActivitiesByLeadIDQueryVariables = {
  leadID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelActivityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ActivitiesByLeadIDQuery = {
  activitiesByLeadID?:  {
    __typename: "ModelActivityConnection",
    items:  Array< {
      __typename: "Activity",
      id: string,
      type: ActivityType,
      title: string,
      description?: string | null,
      dueDate?: string | null,
      completed: boolean,
      contactID?: string | null,
      leadID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateContactSubscriptionVariables = {
  filter?: ModelSubscriptionContactFilterInput | null,
  owner?: string | null,
};

export type OnCreateContactSubscription = {
  onCreateContact?:  {
    __typename: "Contact",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone?: string | null,
    company?: string | null,
    position?: string | null,
    notes?: string | null,
    activities?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateContactSubscriptionVariables = {
  filter?: ModelSubscriptionContactFilterInput | null,
  owner?: string | null,
};

export type OnUpdateContactSubscription = {
  onUpdateContact?:  {
    __typename: "Contact",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone?: string | null,
    company?: string | null,
    position?: string | null,
    notes?: string | null,
    activities?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteContactSubscriptionVariables = {
  filter?: ModelSubscriptionContactFilterInput | null,
  owner?: string | null,
};

export type OnDeleteContactSubscription = {
  onDeleteContact?:  {
    __typename: "Contact",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone?: string | null,
    company?: string | null,
    position?: string | null,
    notes?: string | null,
    activities?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateLeadSubscriptionVariables = {
  filter?: ModelSubscriptionLeadFilterInput | null,
  owner?: string | null,
};

export type OnCreateLeadSubscription = {
  onCreateLead?:  {
    __typename: "Lead",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone?: string | null,
    company?: string | null,
    status: LeadStatus,
    source?: string | null,
    value?: number | null,
    notes?: string | null,
    activities?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateLeadSubscriptionVariables = {
  filter?: ModelSubscriptionLeadFilterInput | null,
  owner?: string | null,
};

export type OnUpdateLeadSubscription = {
  onUpdateLead?:  {
    __typename: "Lead",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone?: string | null,
    company?: string | null,
    status: LeadStatus,
    source?: string | null,
    value?: number | null,
    notes?: string | null,
    activities?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteLeadSubscriptionVariables = {
  filter?: ModelSubscriptionLeadFilterInput | null,
  owner?: string | null,
};

export type OnDeleteLeadSubscription = {
  onDeleteLead?:  {
    __typename: "Lead",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone?: string | null,
    company?: string | null,
    status: LeadStatus,
    source?: string | null,
    value?: number | null,
    notes?: string | null,
    activities?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateActivitySubscriptionVariables = {
  filter?: ModelSubscriptionActivityFilterInput | null,
  owner?: string | null,
};

export type OnCreateActivitySubscription = {
  onCreateActivity?:  {
    __typename: "Activity",
    id: string,
    type: ActivityType,
    title: string,
    description?: string | null,
    dueDate?: string | null,
    completed: boolean,
    contactID?: string | null,
    contact?:  {
      __typename: "Contact",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      phone?: string | null,
      company?: string | null,
      position?: string | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    leadID?: string | null,
    lead?:  {
      __typename: "Lead",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      phone?: string | null,
      company?: string | null,
      status: LeadStatus,
      source?: string | null,
      value?: number | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateActivitySubscriptionVariables = {
  filter?: ModelSubscriptionActivityFilterInput | null,
  owner?: string | null,
};

export type OnUpdateActivitySubscription = {
  onUpdateActivity?:  {
    __typename: "Activity",
    id: string,
    type: ActivityType,
    title: string,
    description?: string | null,
    dueDate?: string | null,
    completed: boolean,
    contactID?: string | null,
    contact?:  {
      __typename: "Contact",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      phone?: string | null,
      company?: string | null,
      position?: string | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    leadID?: string | null,
    lead?:  {
      __typename: "Lead",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      phone?: string | null,
      company?: string | null,
      status: LeadStatus,
      source?: string | null,
      value?: number | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteActivitySubscriptionVariables = {
  filter?: ModelSubscriptionActivityFilterInput | null,
  owner?: string | null,
};

export type OnDeleteActivitySubscription = {
  onDeleteActivity?:  {
    __typename: "Activity",
    id: string,
    type: ActivityType,
    title: string,
    description?: string | null,
    dueDate?: string | null,
    completed: boolean,
    contactID?: string | null,
    contact?:  {
      __typename: "Contact",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      phone?: string | null,
      company?: string | null,
      position?: string | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    leadID?: string | null,
    lead?:  {
      __typename: "Lead",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      phone?: string | null,
      company?: string | null,
      status: LeadStatus,
      source?: string | null,
      value?: number | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
