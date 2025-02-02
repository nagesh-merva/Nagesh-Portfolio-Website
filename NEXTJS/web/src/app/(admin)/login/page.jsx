"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock } from 'lucide-react'
import { useAdminContext } from '../../context/AdminContext'

export default function Login() {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { setIsAuthenticated, setUsernameGlobal } = useAdminContext()
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch("/api/admin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ password }),
            })

            if (response.ok) {
                const data = await response.json()
                setIsAuthenticated(true)
                setUsernameGlobal(data.name)
                router.push("/dashboard")
                setError("")
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Invalid password")
            }
        } catch (error) {
            console.error("Error during login:", error);
            setError("Something went wrong. Please try again.")
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <div className="flex flex-col items-center mb-6">
                    <div className="bg-blue-100 p-3 rounded-full mb-4">
                        <Lock className="w-6 h-6 text-blue-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                    <p className="text-gray-600 mt-2">Enter your password to continue</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {error && (
                        <div className="text-red-500 text-sm mt-2">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}
