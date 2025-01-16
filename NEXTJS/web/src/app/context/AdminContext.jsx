"use client"

import React, { createContext, useState, useContext, useEffect } from "react"

const AdminContext = createContext()

export const AdminProvider = ({ children }) => {
    const getSessionValue = (key, defaultValue) => {
        const storedValue = sessionStorage.getItem(key)
        return storedValue ? JSON.parse(storedValue) : defaultValue
    }

    const setSessionValue = (key, value) => {
        sessionStorage.setItem(key, JSON.stringify(value))
    }

    const [Username, setUsernameGlobal] = useState(getSessionValue("username", ""))
    const [isAuthenticated, setIsAuthenticated] = useState(getSessionValue("isAuthenticated", false))

    useEffect(() => {
        setSessionValue("username", Username)
    }, [Username])

    useEffect(() => {
        setSessionValue("isAuthenticated", isAuthenticated)
    }, [isAuthenticated])

    return (
        <AdminContext.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated,
                Username,
                setUsernameGlobal
            }}
        >
            {children}
        </AdminContext.Provider>
    )
}

export const useAdminContext = () => {
    return useContext(AdminContext)
}
