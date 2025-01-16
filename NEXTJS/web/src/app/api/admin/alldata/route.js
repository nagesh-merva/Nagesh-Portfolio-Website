import clientPromise from "@/helpers/lib/db"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const client = await clientPromise
        const db = client.db("Portfolio")

        const portfolioData = await db.collection("Portfolio_Data").findOne({})

        if (!portfolioData) {
            return new NextResponse(
                JSON.stringify({ error: "No data found" }),
                { status: 404 }
            )
        }

        return new NextResponse(JSON.stringify(portfolioData), { status: 200 })
    } catch (error) {
        console.error("Error fetching data:", error)
        return new NextResponse(
            JSON.stringify({ error: "Failed to fetch data" }),
            { status: 500 }
        )
    }
}