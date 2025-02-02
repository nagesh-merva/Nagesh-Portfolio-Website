import { v4 as uuidv4 } from "uuid";
import clientPromise from "@/helpers/lib/db";
import { NextResponse } from "next/server";

const convertToArray = (field, value) => {
    if (["achievements", "skills", "tags"].includes(field) && typeof value === "string") {
        return value.split(",").map((item) => item.trim())
    }
    return value
}

export async function PUT(request) {
    try {
        const client = await clientPromise
        const db = client.db("Portfolio")

        const { section, updatedItem } = await request.json()

        if (!section || !updatedItem || !updatedItem.id) {
            return new NextResponse(
                JSON.stringify({ error: "Missing required fields" }),
                { status: 400 }
            )
        }

        Object.keys(updatedItem).forEach((field) => {
            updatedItem[field] = convertToArray(field, updatedItem[field])
        })

        const { _id, ...updateFields } = updatedItem

        const collection = db.collection(section)
        const result = await collection.updateOne(
            { id: updatedItem.id },
            { $set: updateFields }
        )

        if (result.modifiedCount > 0) {
            return new NextResponse(JSON.stringify({ success: true }), { status: 200 })
        } else {
            return new NextResponse(
                JSON.stringify({ error: "No changes made or item not found" }),
                { status: 400 }
            )
        }
    } catch (error) {
        console.error("Error updating item:", error)
        return new NextResponse(
            JSON.stringify({ error: "Internal server error" }),
            { status: 500 }
        )
    }
}

export async function POST(request) {
    try {
        const client = await clientPromise
        const db = client.db("Portfolio")

        const { section, updatedItem } = await request.json()

        if (!section || !updatedItem) {
            return new NextResponse(
                JSON.stringify({ error: "Missing required fields" }),
                { status: 400 }
            )
        }

        updatedItem.id = updatedItem.id || uuidv4()

        Object.keys(updatedItem).forEach((field) => {
            updatedItem[field] = convertToArray(field, updatedItem[field])
        })

        const collection = db.collection(section)
        const result = await collection.insertOne(updatedItem)

        if (result.insertedId) {
            return new NextResponse(JSON.stringify({ success: true, id: updatedItem.id }), { status: 201 })
        } else {
            return new NextResponse(
                JSON.stringify({ error: "Failed to add item" }),
                { status: 400 }
            )
        }
    } catch (error) {
        console.error("Error adding item:", error)
        return new NextResponse(
            JSON.stringify({ error: "Internal server error" }),
            { status: 500 }
        )
    }
}

export async function DELETE(request) {
    try {
        const client = await clientPromise
        const db = client.db("Portfolio")

        const { section, id } = await request.json()

        if (!section || !id) {
            return new NextResponse(
                JSON.stringify({ error: "Missing required fields" }),
                { status: 400 }
            )
        }

        const collection = db.collection(section)
        const result = await collection.deleteOne({ id })

        if (result.deletedCount > 0) {
            return new NextResponse(JSON.stringify({ success: true }), { status: 200 })
        } else {
            return new NextResponse(
                JSON.stringify({ error: "Item not found or failed to delete" }),
                { status: 400 }
            )
        }
    } catch (error) {
        console.error("Error deleting item:", error)
        return new NextResponse(
            JSON.stringify({ error: "Internal server error" }),
            { status: 500 }
        )
    }
}
