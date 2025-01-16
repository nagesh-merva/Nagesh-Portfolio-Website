import { NextResponse } from "next/server"

export async function POST(request) {
    const user = {
        name: process.env.NAME,
        email: process.env.EMAIL,
        password: process.env.PASSWORD
    }

    const body = await request.json()
    const { password } = body

    if (password === user.password) {
        const userData = { name: user.name }
        return new NextResponse(JSON.stringify(userData), { status: 200 })
    } else {
        return new NextResponse(
            JSON.stringify({ message: "Invalid email or password" }),
            { status: 401 }
        )
    }
}


export function GET() {

    const user = {
        name: process.env.NAME,
        email: process.env.EMAIL,
    }

    return new NextResponse(JSON.stringify(user), { status: 200 })
}
