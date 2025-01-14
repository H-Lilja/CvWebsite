'use client'; // Ensure this component is treated as a client component
import ContactInfoCard from '@/components/contactInfoCard';
import React from "react";

export default function ContactsPage() {

  return (
    <main className="min-h-screen">
        <div className="mx-auto mb-10">
        <ContactInfoCard></ContactInfoCard>
        </div>
      </main>
  );
}
