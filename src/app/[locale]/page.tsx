'use client'; // Ensure this component is treated as a client component
import '../[locale]/globals.css';
import React from 'react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl'; // To get the current locale
import { Link } from '@/src/i18n/routing'; // Custom Link, assuming it's handling routing logic

export default function HomePage() {
  const t = useTranslations('HomePage');
  const locale = useLocale(); // Get the current locale directly from next-intl

  return (
    <div className="text-3xl font-bold underline">
        {/* <img
            className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full pointer-events-none"
            src="./images/my_picture.jpg"
            width={500}
            height={500}
            alt="Heidi Lilja"
          /> */}
          
      <h1>{t('title')}</h1>
      {/* Dynamically add locale to the URL */}
      <Link href={`/projectTab`}>{t('about')}</Link>
    </div>
  );
}
