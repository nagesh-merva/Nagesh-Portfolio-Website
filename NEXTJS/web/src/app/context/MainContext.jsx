"use client"

import React, { createContext, useState, useContext, useEffect } from "react"

const MainContext = createContext()

export const MainProvider = ({ children }) => {
    const [AllData, SetAllData] = useState({
        "workItems": [],
        "volunteering": [],
        "testimonials": [],
        "skills": [],
        "projects": [],
        "experiences": [],
        "events": [],
        "communities": [],
        "certifications": [],
        "blogs": [],
        "achievements": []
    })
    const [error, setError] = useState("")

    const FetchAlldata = async () => {
        try {
            const response = await fetch("/api/admin/alldata", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })

            if (response.ok) {
                const data = await response.json()
                console.log("Data received:", data)

                SetAllData(data.alldata)
                sessionStorage.setItem("PortfolioData", JSON.stringify(data.alldata))
                setError("")
            } else {
                const errorData = await response.json()
                setError(errorData.message || "Failed to fetch")
            }
        } catch (error) {
            console.error("Error during Fetching:", error);
            setError("Something went wrong. Please try again.")
        }
    }

    useEffect(() => {
        const storedData = sessionStorage.getItem("PortfolioData")
        if (storedData) {
            SetAllData(JSON.parse(storedData))
        } else {
            FetchAlldata()
        }
    }, [])

    return (
        <MainContext.Provider value={{ AllData, SetAllData, error }}>
            {children}
        </MainContext.Provider>
    )
}

export const useMainContext = () => {
    return useContext(MainContext)
}
