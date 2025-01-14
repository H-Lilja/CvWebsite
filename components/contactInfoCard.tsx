import { useTranslations } from 'next-intl';


export default function ContactInfoCard() {
    const t = useTranslations('Contact');
  
    return (
      <div className="p-5 lg:p-10 grid  place-self-center pastel-animation mx-12 lg:ml-80 lg:mr-auto mt-40 rounded-md">
        <h2 className="abel-regular text-pink-300 text-center mb-3">{t("title")}</h2>
        <div className="flex gap-10 justify-center mb-3">
          <a href="mailto:heidi.lilja99@outlook.com">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/heidi-lilja-1b46ba169/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
           </a>
        </div>
        <p className='abel-regular text-white'>{t("tel")}</p>
      </div>
    );
  }