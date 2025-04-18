import users from '../mock data/users.js';

export function findUser(username, password)
{
    users.forEach(user => {
        if (user.email === username && user.password === password) {
            return user;
        }
    });
    return null;
}