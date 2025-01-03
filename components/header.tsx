'use client'; // Add this line to mark the file as a client component
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import React from "react";
import { LanguagePicker } from "../src/app/[locale]/language-switcher";

export const Header: React.FC = () => {
  return (
    <header>
      <div>
        <DropdownMenu />
        <LanguagePicker />
      </div>
    </header>
  );
};
