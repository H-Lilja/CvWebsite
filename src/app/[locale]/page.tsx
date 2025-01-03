'use client'; // Ensure this component is treated as a client component

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl'; // To get the current locale
import { Link } from '@/src/i18n/routing'; // Custom Link, assuming it's handling routing logic

export default function HomePage() {
  const t = useTranslations('HomePage');
  const locale = useLocale(); // Get the current locale directly from next-intl

  return (
    <div>
      <h1>{t('title')}</h1>
      {/* Dynamically add locale to the URL */}
      <Link href={`/projectTab`}>{t('about')}</Link>
    </div>
  );
}
