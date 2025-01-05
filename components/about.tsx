import '../src/app/[locale]/globals.css'
import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"  

function About() {
      const t = useTranslations('HomePage');
      const [imageUrl, setImageUrl] = useState('');
    
      // Set the image URL with a unique query parameter on component mount
      useEffect(() => {
        const randomParam = new Date().getTime(); // Unique timestamp
        setImageUrl(`/images/my_picture.jpg?timestamp=${randomParam}`);
      }, []); // Empty array ensures this runs once when the component mounts
    
  return (
    <Card>
        <CardHeader className="flex justify-between items-center">
        <CardTitle className='text-center yuji-syuku-regular'>Heidi Lilja</CardTitle>
        <img
        className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full pointer-events-none"
        src={imageUrl} // Use the image URL with the unique query parameter
        alt="Heidi"
        />
        </CardHeader>
        <CardContent className="source-serif-4">
        <p>{t('about')}</p>
        </CardContent>
    </Card>
  );
}

export default About;