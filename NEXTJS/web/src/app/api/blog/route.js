import { NextResponse } from 'next/server'
import clientPromise from '@/lib/db'

export async function GET() {
    try {
        const client = await clientPromise
        const db = client.db("Portfolio")
        const blogs = await db.collection('blogs').find({}).toArray()

        return NextResponse.json(blogs)
    } catch (error) {
        console.error('Database error:', error)
        return NextResponse.json(
            { error: 'Failed to fetch blogs' },
            { status: 500 }
        )
    }
}