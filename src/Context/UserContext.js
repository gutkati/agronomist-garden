import {createContext, useContext, useState, useEffect} from "react";

const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [users, setUsers] = useState(() => {
        return JSON.parse(localStorage.getItem('users')) || []
    })

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    }, [users]);

    return (
        <UserContext.Provider value={{users, setUsers}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUsers = () => {
    return useContext(UserContext)
}
