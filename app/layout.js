import Navbar from "./components/navbar";
import "./globals.css";

export const metadata = {
  title: "My Next.js App",
  description: "A clean start for your Next.js project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}