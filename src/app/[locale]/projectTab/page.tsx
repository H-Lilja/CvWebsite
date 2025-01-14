'use client'; // Ensure this component is treated as a client component
import Projects from '@/components/projects';
import React from "react";

export default function ProjectsPage() {

  return (
    <main className="min-h-screen">
        <div className="mx-auto mb-10">
        <Projects></Projects>
        </div>
      </main>
  );
}
