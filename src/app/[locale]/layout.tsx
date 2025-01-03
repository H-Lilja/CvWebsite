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
  const { locale } = await params;

  // Ensure that the incoming locale is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Fetch messages for the selected locale
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        {/* Include necessary meta tags, title, etc. */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Your App Title</title>
      </head>
      <body>
        {/* Include the Header component */}
        <Header />

        {/* Provide internationalization context and render children */}
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
