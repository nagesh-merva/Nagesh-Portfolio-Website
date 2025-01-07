import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-full w-full">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
