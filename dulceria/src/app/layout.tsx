import "./globals.css";
import"bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container py-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
