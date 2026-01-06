"use client"

import { useState, useEffect } from "react"
import MainSection from "./components/main/MainSection"
import LatestWork from "./components/main/LatestWork"
import { useMainContext } from "./context/MainContext"

export default function Home() {
  const { AllData, SetAllData } = useMainContext()

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
        console.log("data received", data)
        SetAllData(data.alldata)
      } else {
        const errorData = await response.json();
      }
    } catch (error) {
      console.error("Error during Fetching:", error)
    }
  }


  return (
    <div className="h-full w-full overflow-hidden">
      <MainSection />
      <LatestWork />
    </div>
  )
}
