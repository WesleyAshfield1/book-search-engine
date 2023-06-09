const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    bookId: ID
    authors: String
    description: String
    title: String
    image: String
    link: Sting
}

type Auth {
    token: ID!
    user: User
}
input SaveBookInput {
    authors: String!
    description: String!
    title: String!
    image: String!
    bookId: ID!
    link: Sting!

}

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(criteria: SaveBookInput): User
    removeBook(bookId: ID!): User
}

`;