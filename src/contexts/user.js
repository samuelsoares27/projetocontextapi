import { useState, createContext } from "react";

export const UserContext = createContext({});

export default function UserProvider({ children }) {
    const [alunos, setAluno] = useState('Samuel');
    return (
        <UserContext.Provider value={{ alunos, setAluno }}>
            {children}
        </UserContext.Provider>
    )
}
