import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "TaskFlow V3", description: "Real task tracking connected to Supabase." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
