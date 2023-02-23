import React, {createContext, useState} from 'react';


export const AuthContext = createContext(null);

// @ts-ignore
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const signIn = (newUser: any, cb: any) => {
        setUser(newUser);
        cb();
    }

    const signOut = (cb: any) => {
        setUser(null);
        cb();
    }

    const value = {user, signIn, signOut};

    // @ts-ignore
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
};
