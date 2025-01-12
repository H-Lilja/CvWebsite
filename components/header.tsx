'use client'; // Add this line to mark the file as a client component
import React, {useState,useEffect } from 'react';
import { LanguagePicker } from "./language-switcher";
import { Link } from '@/src/i18n/routing';
import { useTranslations } from 'next-intl';
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu"  // ShadCN Imports
import '../src/app/[locale]/globals.css'
import { Button } from "@/components/ui/button"


export const Header: React.FC = () => {
  const t = useTranslations('HomePage');

  return (
    // <div class="w-32 h-32 rounded-md bg-gradient-to-br from-indigo-600 to-pink-600 p-1"></div>
    <header className="flex top-0 justify-between items-center header-bg">
      <h1 className='meow-script-regular md:flex md:items-center'>Heidi Lilja</h1> 
      <div className='md:hidden'><LanguagePicker ></LanguagePicker></div>
      <div className="hidden md:flex items-center ml-auto">
        <LanguagePicker ></LanguagePicker>
        <Button className='my-3' variant={'link'} asChild>
        <Link href={`/`} className="z-10 inline-block source-serif-4 mx-2" >{t('home')}</Link>
        </Button>
        <svg  xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="pink" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkle"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>
        <Button variant={'ghost'} asChild>
        <Link className=" z-10 inline-block source-serif-4 mx-2" href={`/projectTab`}>{t('toProjects')}</Link>
        </Button>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="pink" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkle"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>
        <Button variant={'ghost'} asChild>       
        <Link className=" z-10 inline-block source-serif-4 mx-2" href={`/contactInfo`}>{t('toContacts')}</Link>
        </Button>    
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
