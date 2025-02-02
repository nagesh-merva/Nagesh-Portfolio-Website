import clientPromise from "@/helpers/lib/db"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const client = await clientPromise
        const db = client.db("Portfolio")

        const collections = [
            "workItems",
            "volunteering",
            "testimonials",
            "skills",
            "projects",
            "experiences",
            "events",
            "communities",
            "certifications",
            "blogs",
            "achievements"
        ]

        const portfolioData = {}

        await Promise.all(
            collections.map(async (collectionName) => {
                const collection = db.collection(collectionName)
                const data = await collection.find().toArray()
                portfolioData[collectionName] = data
            })
        )

        return new NextResponse(JSON.stringify(portfolioData), { status: 200 })
    } catch (error) {
        console.error("Error fetching data:", error)
        return new NextResponse(
            JSON.stringify({ error: "Failed to fetch data" }),
            { status: 500 }
        )
    }
}
