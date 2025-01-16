import clientPromise from "@/helpers/lib/db"
import { NextResponse } from "next/server"

export async function PUT(request) {
    try {
        const client = await clientPromise;
        const db = client.db("portfolio")

        const { section, index, updatedItem, data } = await request.json()

        // Handle update of specific item
        if (updatedItem) {
            const collection = db.collection(section);
            const result = await collection.updateOne(
                { _id: updatedItem._id }, // Assuming items have _id field
                { $set: updatedItem }
            );

            if (result.modifiedCount > 0) {
                return new NextResponse(JSON.stringify({ success: true }), { status: 200 });
            } else {
                return new NextResponse(
                    JSON.stringify({ error: "Failed to update item" }),
                    { status: 400 }
                );
            }
        }

        // Handle add item to a section
        if (data) {
            const collection = db.collection(section);
            // Insert the new data (item or items) into the respective section
            const result = await collection.insertMany(data);

            if (result.insertedCount > 0) {
                return new NextResponse(JSON.stringify({ success: true }), { status: 200 });
            } else {
                return new NextResponse(
                    JSON.stringify({ error: "Failed to add item" }),
                    { status: 400 }
                );
            }
        }

        // Handle remove item from a section
        if (index !== undefined) {
            const collection = db.collection(section);
            const itemToRemove = data[index];

            const result = await collection.deleteOne({ _id: itemToRemove._id });

            if (result.deletedCount > 0) {
                return new NextResponse(JSON.stringify({ success: true }), { status: 200 });
            } else {
                return new NextResponse(
                    JSON.stringify({ error: "Failed to remove item" }),
                    { status: 400 }
                );
            }
        }

        return new NextResponse(
            JSON.stringify({ error: "Invalid request" }),
            { status: 400 }
        );

    } catch (error) {
        console.error("Error updating data:", error);
        return new NextResponse(
            JSON.stringify({ error: "Failed to update data" }),
            { status: 500 }
        );
    }
}
