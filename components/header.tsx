'use client'; // Add this line to mark the file as a client component
import React from "react";
import { LanguagePicker } from "./language-switcher";
import { Link } from '@/src/i18n/routing';
import { useTranslations } from 'next-intl';
import { Separator } from "@/components/ui/separator"

export const Header: React.FC = () => {
  const t = useTranslations('HomePage');
  return (
    <header className="w-full flex justify-between items-center">
      
      {/* Right section with LanguagePicker */}
      <div className="flex items-center ml-auto mt-5"> {/* Adjust 'mt-5' for vertical positioning */}
        <LanguagePicker></LanguagePicker>
        <Link className="text-white z-10 inline-block source-serif-4 mx-2" href={`/`}>{t('home')}</Link>
        <Separator  className='bg-white h-12 mx-auto' orientation="vertical"></Separator>
        <Link className="text-white z-10 inline-block source-serif-4 mx-2" href={`/projectTab`}>{t('toProjects')}</Link>
        <Separator  className='bg-white h-12 mx-auto' orientation="vertical"></Separator>
        {/* <Link className=" text-white z-10 inline-block source-serif-4 mx-2" href={`/recommendations`}>{t('toRecommendations')}</Link>
        <Separator  className='bg-white h-12 mx-auto' orientation="vertical"></Separator> */}
        <Link className="text-white z-10 inline-block source-serif-4 mx-2" href={`/contactInfo`}>{t('toContacts')}</Link>
        
      </div>
    </header>
  );
};
