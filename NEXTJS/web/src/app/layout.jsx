// /layouts/RootLayout.jsx (or your file structure)

import { Navigation } from './components/Navigation'; // Adjust the path as necessary
import { Footer } from './components/Footer'; // Adjust the path as necessary

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-svh w-svw">
        <Navigation /> {/* Navbar */}

        <main className="flex-1">
          {children} {/* Page content */}
        </main>

        <Footer /> {/* Footer */}
      </body>
    </html>
  );
}
