'use client'; // Ensure this component is treated as a client component
import '../[locale]/globals.css';
import About from '@/components/about';
import React from 'react';
import Timeline from '@/components/timeline';

export default function HomePage() {
  //About page/Mainpage
  return (
    <main className="min-h-screen">
        <div className="mx-auto mb-10">
        <About></About>
        <Timeline></Timeline>
        </div>
      </main>
  );
}
