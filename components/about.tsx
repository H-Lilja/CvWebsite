import '../src/app/[locale]/globals.css'
import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

function About() {
      const t = useTranslations('HomePage');
      const [imageUrl, setImageUrl] = useState('');
    
      // Set the image URL with a unique query parameter on component mount
      useEffect(() => {
        const randomParam = new Date().getTime(); // Unique timestamp
        setImageUrl(`/images/IMG_0131.jpg?timestamp=${randomParam}`);
      }, []); // Empty array ensures this runs once when the component mounts
    
  return (
    
    <div className='z-10 grid place-items-center overflow-auto' >
     <h1 className='limelight-big place-self-start'>Heidi Lilja</h1>
      <img
        className= "w-96 md:shrink-0 h-auto items-center -mt-28"
        src={imageUrl} // Use the image URL with the unique query parameter
        alt="Heidi"/>
      
      <h2 className='limelight-medium text-right -mt-20 md:-mt-16'>{t("myTitle")}</h2>
      <div className='mb-20 w-auto bg-slate-400 mx-14 handwritten-border'>
      <h1 className='yuji-syuku-regular mb-8'>{t("title")}</h1>
          <p className="text-black source-serif-4">
          {t("about")}
          </p>
          <h1 className='yuji-syuku-regular mb-8'>{t("skillTitle")}</h1>
          <p className="text-black source-serif-4">
          {t("skills")}
          {t("skills")}
          {t("skills")}
          </p>
       </div>
    </div>

  );
}

export default About;