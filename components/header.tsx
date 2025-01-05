'use client'; // Add this line to mark the file as a client component
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import React from "react";
import { LanguagePicker } from "./language-switcher";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2">
      
      {/* Right section with LanguagePicker */}
      <div className="flex items-center ml-auto mt-5"> {/* Adjust 'mt-2' for vertical positioning */}
        <LanguagePicker />
      </div>
    </header>
  );
};
