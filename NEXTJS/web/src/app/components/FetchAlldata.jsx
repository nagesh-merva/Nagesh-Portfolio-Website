import { useMainContext } from "../context/MainContext"

const FetchAlldata = async () => {
    const { SetAllData } = useMainContext()
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

export default FetchAlldata