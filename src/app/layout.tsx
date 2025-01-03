"use client"
// app/layout.tsx
import { ReactNode, useEffect, useState } from 'react';

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
        <title>Your App Title</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

