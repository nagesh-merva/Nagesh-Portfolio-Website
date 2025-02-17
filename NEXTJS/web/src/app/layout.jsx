import "./globals.css";
import { MainProvider } from "./context/MainContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-full w-full">
        <MainProvider>
          {children}
        </MainProvider>
      </body>
    </html>
  );
}