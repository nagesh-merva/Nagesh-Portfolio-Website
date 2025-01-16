"use client"

import { useState, useEffect } from "react"
import MainSection from "./components/MainSection"
import LatestWork from "./components/LatestWork"
import { useMainContext } from "./context/MainContext"

export default function Home() {
  const { AllData, SetAllData } = useMainContext()
  const [error, setError] = useState('')

  useEffect(() => {
    FetchAlldata()
  }, [])

  console.log(AllData)
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
        // console.log("data received", data)
        SetAllData(data)
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


  return (
    <div className="h-full w-full">
      <MainSection />
      <LatestWork />
    </div>
  );
}
