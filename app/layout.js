import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import connectMongo from "@/dbConnection/connectToMongo";
import AuthProvider from "./providers/authProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khana-Khajana|Home",
  description: "We are here to setisfy your hunger",
};

export default async function RootLayout({ children }) {
  await connectMongo();
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>

          <Navbar />
          {children}

        </AuthProvider>
      </body>
    </html>
  );
}
