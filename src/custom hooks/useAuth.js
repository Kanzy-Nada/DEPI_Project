import { useState } from 'react';
import { findUser } from '../logic/auth';

export default function useAuth()
{
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = async (username, password) => {
        setIsLoading(true);
        setError(null);

        try {
            const foundUser = findUser(username, password);
            if (foundUser) {
                setUser(foundUser);
            } else {
                throw new Error('Invalid username or password');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
    };

    return { user, isLoading, error, login, logout };

}