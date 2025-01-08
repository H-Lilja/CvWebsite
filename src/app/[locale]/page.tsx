'use client'; // Ensure this component is treated as a client component
import '../[locale]/globals.css';
import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing'; // Custom Link, assuming it's handling routing logic
import About from '@/components/about';
import React from 'react';
import Timeline from '@/components/timeline';

export default function HomePage() {
  const t = useTranslations('HomePage');
  // const locale = useLocale(); // Get the current locale directly from next-intl

  return (
    <main className="flex flex-col items-center px-4 md:px-24 pt-12 min-h-screen overflow-y-auto">
        <div>
        <Link href={`/projectTab`}>{t('toProjects')}</Link>
        <Timeline/>
        </div>
      </main>
  );
}
