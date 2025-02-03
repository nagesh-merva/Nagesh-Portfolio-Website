"use client"

import React, { useState, useEffect } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import ContentEditor from '../components/ContentEditor'
import { useRouter } from 'next/navigation'
import { useAdminContext } from '../../context/AdminContext'

export default function Admin() {
    const [activeSection, setActiveSection] = useState(() => {
        return sessionStorage.getItem("activeSection") || "dashboard"
    })
    const [portfolioData, setPortfolioData] = useState({})
    const [error, setError] = useState('')
    const { isAuthenticated, setIsAuthenticated } = useAdminContext()
    const router = useRouter()

    useEffect(() => {
        sessionStorage.setItem("activeSection", activeSection)
    }, [activeSection])

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
                console.log("data received", data)
                setPortfolioData(data.alldata)
                setError("")
            } else {
                const errorData = await response.json();
                setError(errorData.message || "failed to fetch")
            }
        } catch (error) {
            console.error("Error during Fetching:", error)
            setError("Something went wrong. Please try again.")
        }
    }

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/login")
        }
        console.log("fetched")
        FetchAlldata()

    }, [isAuthenticated, router])

    console.log(isAuthenticated)

    if (!isAuthenticated) {
        return <div>Redirecting to login...</div>
    }

    return (
        <div className="relative flex min-h-screen h-full bg-gray-100">
            <button onClick={() => setIsAuthenticated(false)} className="w-fit h-fit absolute bottom-2 lg:bottom-10 right-2 px-6 py-3 border-2 border-red-200 rounded-lg font-roboto bg-red-600 hover:bg-red-400 text-white transition-colors">LOGOUT</button>
            <AdminSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
            <main className="flex-1">
                <div className="p-8">
                    <ContentEditor
                        section={activeSection}
                        data={portfolioData}
                        onUpdate={setPortfolioData}
                    />
                </div>
            </main>
        </div>
    )
}