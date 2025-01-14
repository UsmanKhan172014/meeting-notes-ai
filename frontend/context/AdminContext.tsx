"use client";
import { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface AdminContextType {
    user: any;
    logout: () => void;
    goBack: () => void;
}

export const AdminContext = createContext<AdminContextType | null>(null);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    const logout = () => {
        setUser(null);
        localStorage.removeItem("userId");
        localStorage.removeItem("token");
        router.push("/login");
    };

    const goBack = () => {
        router.back();
    }

    const contextValue: AdminContextType = {
        user,
        logout,
        goBack,
    };

    return (
        <AdminContext.Provider value={ contextValue } >
        { children }
        </AdminContext.Provider>
  );
};

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error("useAdmin must be used within an AdminProvider");
    }
    return context;
};
