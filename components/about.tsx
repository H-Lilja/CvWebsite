import '../src/app/[locale]/globals.css'
import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';


function About() {
      const t = useTranslations('HomePage');
      const [imageUrl, setImageUrl] = useState('');
    
      // Set the image URL with a unique query parameter on component mount
      useEffect(() => {
        const randomParam = new Date().getTime(); // Unique timestamp
        setImageUrl(`/images/IMG_0118.jpg?timestamp=${randomParam}`);
      }, []); // Empty array ensures this runs once when the component mounts
 
    
  return (
    
    <div className='z-2 sticky top-0 grid place-items-center' >
      <h1 className='source-serif-4 place-self-start'>Hi! Welcome to my portfolio. I am</h1>
     <h1 className='limelight-big place-self-start'>Heidi Lilja</h1>
     <h2 className='source-serif-4 place-self-start'>{t("myTitle")}</h2>
      <img
        className= "w-32 h-32 md:w-80 md:h-80 object-cover rounded-full ml-40 -mt-36 mb-24 place-self-end md:place-self-center"
        src={imageUrl} 
        alt="Heidi"
        />


      <div className='mb-20 w-auto bg-zinc-800'>
      <h1 className='yuji-syuku-regular mb-8 text-center'>{t("title")}</h1>
          <p className="text-black source-serif-4">
          {t("about")}
          </p>
          <h1 className='yuji-syuku-regular mb-8 text-center'>{t("skillTitle")}</h1>
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