"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { User } from "@/types";

type SaveUserPayload = {
    user: User;
    token: string;
    login: boolean;
};

type AuthContextType = {
    user: User | null;
    token?: string | null;
    isAuth: boolean | null;
    saveUserData: (data: SaveUserPayload) => void;
    resetUserData: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isAuth, setIsAuth] = useState<boolean | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");
        const storedAuth = localStorage.getItem("isAuth");

        if (storedUser && storedToken && storedAuth === "true") {
            setUser(JSON.parse(storedUser));
            setToken(storedToken);
            setIsAuth(true);
        }
    }, []);

    const saveUserData = (data: SaveUserPayload) => {
        setUser(data.user);
        setToken(data.token);
        setIsAuth(data.login);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
        localStorage.setItem("isAuth", data.login ? "true" : "false");
    };

    const resetUserData = () => {
        setUser(null);
        setToken(null);
        setIsAuth(false);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        localStorage.removeItem("isAuth");
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                isAuth,
                saveUserData,
                resetUserData,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext debe estar dentro de un AuthProvider");
    }
    return context;
};
