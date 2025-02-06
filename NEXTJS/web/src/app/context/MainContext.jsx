"use client"

import React, { createContext, useState, useContext, useEffect } from "react"
import LoadingScreen from "../components/others/LoadPage"
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
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const FetchAlldata = async (retryCount = 0) => {
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
                setLoading(false)
            } else {
                throw new Error("Failed to fetch")
            }
        } catch (error) {
            console.error("Error during Fetching:", error)
            setError("Something went wrong. Retrying...")
            setTimeout(() => FetchAlldata(retryCount + 1), 1500)
        }
    }

    useEffect(() => {
        const storedData = sessionStorage.getItem("PortfolioData")
        console.log(AllData)
        setTimeout(() => {
            if (storedData) {
                SetAllData(JSON.parse(storedData))
                setLoading(false)
            } else {
                FetchAlldata()
            }
        }, 1500)
    }, [])

    return (
        <MainContext.Provider value={{ AllData, SetAllData, error, loading }}>
            {loading ? <LoadingScreen /> : children}
        </MainContext.Provider>
    )
}

export const useMainContext = () => {
    return useContext(MainContext)
}
