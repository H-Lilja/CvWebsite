import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/src/i18n/routing';
import { Header } from '@/components/header';
import Footer from '@/components/footer';

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
    <NextIntlClientProvider messages={messages}>
      <div>
        <div className="top-0 z-10">
          <Header />
        </div>

        {/* Scrollable content area */}
        <div className="overflow-y-auto">
          {children}
        </div>
        <footer >
        <Footer></Footer>
        </footer>
      </div>

    </NextIntlClientProvider>
    
  );
}
