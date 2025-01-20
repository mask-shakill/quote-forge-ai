import { AuthProvider } from "@/app/contexts/AuthContext";
import Header from "../components/Header";
import "./globals.css";

export const metadata = {
  title: "Next.js Firebase Auth",
  description: "A simple Next.js app with Firebase authentication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#dcebfe]">
        <AuthProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
