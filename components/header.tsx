'use client'; // Add this line to mark the file as a client component
import React, {useState,useEffect } from 'react';
import { LanguagePicker } from "./language-switcher";
import { Link } from '@/src/i18n/routing';
import { useTranslations } from 'next-intl';
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu"  // ShadCN Imports
import '../src/app/[locale]/globals.css'
import { Button } from "@/components/ui/button"


export const Header: React.FC = () => {
  const t = useTranslations('HomePage');
  return (
    // <div class="w-32 h-32 rounded-md bg-gradient-to-br from-indigo-600 to-pink-600 p-1"></div>
    <header className="w-full flex top-0 justify-between items-center border-b-4 border-dotted">
      <div className='md:hidden'><LanguagePicker ></LanguagePicker></div>
      
      {/* Right section with LanguagePicker */}
      <div className="hidden md:flex items-center ml-auto"> {/* Adjust 'mt-5' for vertical positioning */}
        <LanguagePicker ></LanguagePicker>
        <Button variant={'ghost'} asChild>
        <Link href={`/`} className="text-white z-10 inline-block source-serif-4 mx-2" >{t('home')}</Link>
        </Button>
        <Separator  className="bg-white h-4 mx-auto" orientation="vertical"></Separator>
        <Link className="text-white z-10 inline-block source-serif-4 mx-2" href={`/projectTab`}>{t('toProjects')}</Link>
        <Separator  className='bg-white h-4 mx-auto' orientation="vertical"></Separator>
        {/* <Link className=" text-white z-10 inline-block source-serif-4 mx-2" href={`/recommendations`}>{t('toRecommendations')}</Link>
        <Separator  className='bg-white h-12 mx-auto' orientation="vertical"></Separator> */}
        <Link className="text-white z-10 inline-block source-serif-4 mx-2" href={`/contactInfo`}>{t('toContacts')}</Link>
    
      </div>

      <div className='md:hidden flex mt-2 items-start'>
          <DropdownMenu>
          <DropdownMenuTrigger>
               <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all  ring-0 bg-pink-300 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                  <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden group-focus:-translate-y-1.5 group-focus:-rotate-90">
                    <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150"></div>
                    <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10"></div>
                    <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150"></div>
                  </div>
                </div>
          </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-purple-300 text-white source-serif-4">
              <DropdownMenuItem asChild>
                <Link className="block px-4 py-2" href="/" >
                  {t('home')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link className="block px-4 py-2" href="/projectTab" >
                  {t('toProjects')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link className="block px-4 py-2" href="/contactInfo">
                  {t('toContacts')}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
    </header>

  );
};
