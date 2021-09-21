export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receive_Users = (users) => {
    return {
        type: RECEIVE_USERS,
        users,
    }
}