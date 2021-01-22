// const { model, Schema } = require('mongoose');

// const postSchema = new Schema({
//     body: String,
//     username: String,
//     createdAt: String, 
//     comments: [
//         {
//             body: String, 
//             username: String,
//             createdAt: String
//         }
//     ],
//     likes: [
//         {
//             username: String,
//             createdAt: String
//         }
//     ],
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: 'users'
//     }
// })

// //module.exports = model('Post', postSchema);

const { gql } = require('apollo-server')

// define the graphql types
module.exports = gql`
type Post{
    id: ID!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
}
type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
}
type Like {
    id: ID!
    createdAt: String!
    username: String!
}
type User{
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
}
input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
}
type Query {
        getPosts: [Post]
        getPost(postId: ID!): Post
    }
    type Mutation {
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!): User!
        createPost(body: String!): Post!
        deletePost(postId: ID!): String!
        createComment(postId: String!, body:String!): Post!
        deleteComment(postId: ID!, commentId: ID!): Post!
        likePost(postId: ID!): Post!
    }`
