import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({});

const expires = Date.now() - 60 * 60000;


export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ expires });

    // useEffect(() => {
    //     setAuth();
    // })

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
