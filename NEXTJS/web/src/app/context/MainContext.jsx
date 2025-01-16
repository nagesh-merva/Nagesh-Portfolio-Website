"use client"

import React, { createContext, useState, useContext, useEffect } from "react"

const MainContext = createContext()

export const MainProvider = ({ children }) => {
    const [AllData, SetAllData] = useState({})

    useEffect(() => {
        sessionStorage.setItem("PortfolioData", JSON.stringify(AllData))
    }, [AllData])


    return (
        <MainContext.Provider value={{ AllData, SetAllData }}>
            {children}
        </MainContext.Provider>
    )
}

export const useMainContext = () => {
    return useContext(MainContext)
}
