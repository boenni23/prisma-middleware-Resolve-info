// Code generated by Prisma (prisma@1.33.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateItem {
  count: Int!
}

type AggregateSecondItem {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Item implements Node {
  id: ID!
  field: String!
  secondItems(where: SecondItemWhereInput, orderBy: SecondItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SecondItem!]
}

"""A connection to a list of items."""
type ItemConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ItemEdge]!
  aggregate: AggregateItem!
}

input ItemCreateInput {
  id: ID
  field: String!
  secondItems: SecondItemCreateManyInput
}

"""An edge in a connection."""
type ItemEdge {
  """The item at the end of the edge."""
  node: Item!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ItemOrderByInput {
  id_ASC
  id_DESC
  field_ASC
  field_DESC
}

type ItemPreviousValues {
  id: ID!
  field: String!
}

type ItemSubscriptionPayload {
  mutation: MutationType!
  node: Item
  updatedFields: [String!]
  previousValues: ItemPreviousValues
}

input ItemSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ItemWhereInput
}

input ItemUpdateInput {
  field: String
  secondItems: SecondItemUpdateManyInput
}

input ItemUpdateManyMutationInput {
  field: String
}

input ItemWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  field: String

  """All values that are not equal to given value."""
  field_not: String

  """All values that are contained in given list."""
  field_in: [String!]

  """All values that are not contained in given list."""
  field_not_in: [String!]

  """All values less than the given value."""
  field_lt: String

  """All values less than or equal the given value."""
  field_lte: String

  """All values greater than the given value."""
  field_gt: String

  """All values greater than or equal the given value."""
  field_gte: String

  """All values containing the given string."""
  field_contains: String

  """All values not containing the given string."""
  field_not_contains: String

  """All values starting with the given string."""
  field_starts_with: String

  """All values not starting with the given string."""
  field_not_starts_with: String

  """All values ending with the given string."""
  field_ends_with: String

  """All values not ending with the given string."""
  field_not_ends_with: String
  secondItems_some: SecondItemWhereInput
}

input ItemWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createItem(data: ItemCreateInput!): Item!
  createSecondItem(data: SecondItemCreateInput!): SecondItem!
  updateItem(data: ItemUpdateInput!, where: ItemWhereUniqueInput!): Item
  updateSecondItem(data: SecondItemUpdateInput!, where: SecondItemWhereUniqueInput!): SecondItem
  deleteItem(where: ItemWhereUniqueInput!): Item
  deleteSecondItem(where: SecondItemWhereUniqueInput!): SecondItem
  upsertItem(where: ItemWhereUniqueInput!, create: ItemCreateInput!, update: ItemUpdateInput!): Item!
  upsertSecondItem(where: SecondItemWhereUniqueInput!, create: SecondItemCreateInput!, update: SecondItemUpdateInput!): SecondItem!
  updateManyItems(data: ItemUpdateManyMutationInput!, where: ItemWhereInput): BatchPayload!
  updateManySecondItems(data: SecondItemUpdateManyMutationInput!, where: SecondItemWhereInput): BatchPayload!
  deleteManyItems(where: ItemWhereInput): BatchPayload!
  deleteManySecondItems(where: SecondItemWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item]!
  secondItems(where: SecondItemWhereInput, orderBy: SecondItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SecondItem]!
  item(where: ItemWhereUniqueInput!): Item
  secondItem(where: SecondItemWhereUniqueInput!): SecondItem
  itemsConnection(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemConnection!
  secondItemsConnection(where: SecondItemWhereInput, orderBy: SecondItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SecondItemConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type SecondItem implements Node {
  id: ID!
  secondField: String
}

"""A connection to a list of items."""
type SecondItemConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SecondItemEdge]!
  aggregate: AggregateSecondItem!
}

input SecondItemCreateInput {
  id: ID
  secondField: String
}

input SecondItemCreateManyInput {
  create: [SecondItemCreateInput!]
  connect: [SecondItemWhereUniqueInput!]
}

"""An edge in a connection."""
type SecondItemEdge {
  """The item at the end of the edge."""
  node: SecondItem!

  """A cursor for use in pagination."""
  cursor: String!
}

enum SecondItemOrderByInput {
  id_ASC
  id_DESC
  secondField_ASC
  secondField_DESC
}

type SecondItemPreviousValues {
  id: ID!
  secondField: String
}

input SecondItemScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [SecondItemScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [SecondItemScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SecondItemScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  secondField: String

  """All values that are not equal to given value."""
  secondField_not: String

  """All values that are contained in given list."""
  secondField_in: [String!]

  """All values that are not contained in given list."""
  secondField_not_in: [String!]

  """All values less than the given value."""
  secondField_lt: String

  """All values less than or equal the given value."""
  secondField_lte: String

  """All values greater than the given value."""
  secondField_gt: String

  """All values greater than or equal the given value."""
  secondField_gte: String

  """All values containing the given string."""
  secondField_contains: String

  """All values not containing the given string."""
  secondField_not_contains: String

  """All values starting with the given string."""
  secondField_starts_with: String

  """All values not starting with the given string."""
  secondField_not_starts_with: String

  """All values ending with the given string."""
  secondField_ends_with: String

  """All values not ending with the given string."""
  secondField_not_ends_with: String
}

type SecondItemSubscriptionPayload {
  mutation: MutationType!
  node: SecondItem
  updatedFields: [String!]
  previousValues: SecondItemPreviousValues
}

input SecondItemSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SecondItemSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: SecondItemWhereInput
}

input SecondItemUpdateDataInput {
  secondField: String
}

input SecondItemUpdateInput {
  secondField: String
}

input SecondItemUpdateManyDataInput {
  secondField: String
}

input SecondItemUpdateManyInput {
  create: [SecondItemCreateInput!]
  connect: [SecondItemWhereUniqueInput!]
  set: [SecondItemWhereUniqueInput!]
  disconnect: [SecondItemWhereUniqueInput!]
  delete: [SecondItemWhereUniqueInput!]
  update: [SecondItemUpdateWithWhereUniqueNestedInput!]
  updateMany: [SecondItemUpdateManyWithWhereNestedInput!]
  deleteMany: [SecondItemScalarWhereInput!]
  upsert: [SecondItemUpsertWithWhereUniqueNestedInput!]
}

input SecondItemUpdateManyMutationInput {
  secondField: String
}

input SecondItemUpdateManyWithWhereNestedInput {
  where: SecondItemScalarWhereInput!
  data: SecondItemUpdateManyDataInput!
}

input SecondItemUpdateWithWhereUniqueNestedInput {
  where: SecondItemWhereUniqueInput!
  data: SecondItemUpdateDataInput!
}

input SecondItemUpsertWithWhereUniqueNestedInput {
  where: SecondItemWhereUniqueInput!
  update: SecondItemUpdateDataInput!
  create: SecondItemCreateInput!
}

input SecondItemWhereInput {
  """Logical AND on all given filters."""
  AND: [SecondItemWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  secondField: String

  """All values that are not equal to given value."""
  secondField_not: String

  """All values that are contained in given list."""
  secondField_in: [String!]

  """All values that are not contained in given list."""
  secondField_not_in: [String!]

  """All values less than the given value."""
  secondField_lt: String

  """All values less than or equal the given value."""
  secondField_lte: String

  """All values greater than the given value."""
  secondField_gt: String

  """All values greater than or equal the given value."""
  secondField_gte: String

  """All values containing the given string."""
  secondField_contains: String

  """All values not containing the given string."""
  secondField_not_contains: String

  """All values starting with the given string."""
  secondField_starts_with: String

  """All values not starting with the given string."""
  secondField_not_starts_with: String

  """All values ending with the given string."""
  secondField_ends_with: String

  """All values not ending with the given string."""
  secondField_not_ends_with: String
}

input SecondItemWhereUniqueInput {
  id: ID
}

type Subscription {
  item(where: ItemSubscriptionWhereInput): ItemSubscriptionPayload
  secondItem(where: SecondItemSubscriptionWhereInput): SecondItemSubscriptionPayload
}
`