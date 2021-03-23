
import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                bookCount
                savedBooks {
                    bookId
                    authors
                    title
                }
            }
        }
    } 
`;

export const ADD_USER = gql`
mutation addUSer($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
            bookCount
            savedBooks {
                bookId
            }
        }
    }
}
`;