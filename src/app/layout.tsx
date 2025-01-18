"use client";
// app/layout.tsx
import { ReactNode, useEffect, useState } from 'react';
import './[locale]/globals.css';
export default function RootLayout({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  // Wait until the component is mounted on the client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Hydration fix: render nothing until client-side mount
  if (!isMounted) {
    return null; // Optionally, you could return a loading spinner here
  }
//rootlayout
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Abel&family=Limelight&family=Meow+Script&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap" rel="stylesheet"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cv for Heidi Lilja</title>
      </head>
      <body  className="min-h-screen grid overflow-auto">
        <main >{children}</main>

      </body>
    </html>
  );
}