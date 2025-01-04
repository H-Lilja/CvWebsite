"use client"
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

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Cv for Heidi Lilja</title>
      </head>
      <body>
        <nav>{children}</nav>
        
      </body>
    </html>
  );
}

