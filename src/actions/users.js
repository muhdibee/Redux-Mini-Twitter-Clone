export const USERS = 'USERS';

export const receive_Users = (users) => {
    return {
        type:USERS,
        users,
    }
}