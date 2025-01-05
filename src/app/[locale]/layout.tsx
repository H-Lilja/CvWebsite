import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/src/i18n/routing';
import { Header } from '@/components/header';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  // Ensure that the incoming locale is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Fetch messages for the selected locale
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {/* Include the Header component */}
      <Header />
      {/* Render the localized children */}
      {children}
    </NextIntlClientProvider>
  );
}
