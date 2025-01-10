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
    
    <div className='grid place-items-center overflow-auto' >
     <h1 className='limelight-big place-self-start'>Heidi Lilja</h1>
      <img
        className= "w-96 md:shrink-0 h-auto items-center -mt-28 z-3"
        src={imageUrl} // Use the image URL with the unique query parameter
        alt="Heidi"/>
      
      <h2 className='limelight-medium text-right -mt-20 md:-mt-16'>{t("myTitle")}</h2>
      <div className='mb-20 h-96 w-auto bg-white '>
      <h1 className='yuji-syuku-regular mb-8'>{t("title")}</h1>
          <p className="text-black source-serif-4">
              Welcome to my portfolio! I am a full-stack web developer with an AP
              in Computer Science and passion for coding! I have experience with
              many fields of programming from Java, Python, and C# to web
              development with React and JavaScript. I am always looking to learn
              new technologies and improve my skills. I am currently seeking new
              opportunities to work on exciting projects, feel free to contact me
              if you have any questions!
            </p>
       </div>
    </div>

  );
}

export default About;