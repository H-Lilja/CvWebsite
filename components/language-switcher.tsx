'use client';
import '../src/app/[locale]/globals.css'
import { Button } from "@/components/ui/button";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { type Locale } from "@/src/app/[locale]/locales";
import { DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { GlobeIcon } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";
import { Link } from '@/src/i18n/routing';

export const LanguagePicker: React.FC = () => {
  const locale = useLocale() as Locale;
  const router = useRouter();

  function handleLocaleChange(newLocale: Locale): void {
    // Set the cookie to store the selected locale
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

    // Update the URL with the new locale
    router.push(`/${newLocale}`); // This will navigate to the new locale's URL
  }

  return (
    <div className='inline-block '>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button type="button" variant="ghost" size="icon">
          <GlobeIcon className="size-5 text-white transition-transform" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className=" text-white source-serif-4" align="end">
        <DropdownMenuCheckboxItem
          checked={locale === "en"}
          onClick={() => {
            handleLocaleChange("en");
          }}>
            <svg className="w-12 h-12" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="256" fill="#f0f0f0" r="256"/><g fill="#0052b4"><path d="m52.92 100.142c-20.109 26.163-35.272 56.318-44.101 89.077h133.178z"/><path d="m503.181 189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075 89.076z"/><path d="m8.819 322.784c8.83 32.758 23.993 62.913 44.101 89.075l89.074-89.075z"/><path d="m411.858 52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177z"/><path d="m100.142 459.079c26.163 20.109 56.318 35.272 89.076 44.102v-133.176z"/><path d="m189.217 8.819c-32.758 8.83-62.913 23.993-89.075 44.101l89.075 89.075z"/><path d="m322.783 503.181c32.758-8.83 62.913-23.993 89.075-44.101l-89.075-89.075z"/><path d="m370.005 322.784 89.075 89.076c20.108-26.162 35.272-56.318 44.101-89.076z"/></g><g fill="#d80027"><path d="m509.833 222.609h-220.44-.001v-220.442c-10.931-1.423-22.075-2.167-33.392-2.167-11.319 0-22.461.744-33.391 2.167v220.44.001h-220.442c-1.423 10.931-2.167 22.075-2.167 33.392 0 11.319.744 22.461 2.167 33.391h220.44.001v220.442c10.931 1.423 22.073 2.167 33.392 2.167 11.317 0 22.461-.743 33.391-2.167v-220.44-.001h220.442c1.423-10.931 2.167-22.073 2.167-33.392 0-11.317-.744-22.461-2.167-33.391z"/><path d="m322.783 322.784 114.236 114.236c5.254-5.252 10.266-10.743 15.048-16.435l-97.802-97.802h-31.482z"/><path d="m189.217 322.784h-.002l-114.235 114.235c5.252 5.254 10.743 10.266 16.435 15.048l97.802-97.804z"/><path d="m189.217 189.219v-.002l-114.236-114.237c-5.254 5.252-10.266 10.743-15.048 16.435l97.803 97.803h31.481z"/><path d="m322.783 189.219 114.237-114.238c-5.252-5.254-10.743-10.266-16.435-15.047l-97.802 97.803z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={locale === "fi"}
          onClick={() => {
            handleLocaleChange("fi");
          }}>
          <svg className="w-12 h-12" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="256" fill="#f0f0f0" r="256"/><path d="m509.833 222.609h-309.484-.001v-216.524c-23.658 5.246-46.087 13.749-66.783 25.042v191.48.001h-131.398c-1.425 10.931-2.167 22.075-2.167 33.392s.742 22.461 2.167 33.391h131.397.001v191.481c20.696 11.292 43.125 19.797 66.783 25.042v-216.52-.002h309.485c1.423-10.931 2.167-22.075 2.167-33.392s-.744-22.461-2.167-33.391z" fill="#0052b4"/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  );
};
