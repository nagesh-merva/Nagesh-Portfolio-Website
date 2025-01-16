import { AdminProvider } from "../../context/AdminContext"

export default function Layout({ children }) {
    return (
        <AdminProvider>
            {children}
        </AdminProvider>
    )
}
