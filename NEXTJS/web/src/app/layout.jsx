import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { MainProvider } from "./context/MainContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-full w-full">
        <Navigation />
        <MainProvider>
          {children}
        </MainProvider>
        <Footer />
      </body>
    </html>
  );
}
