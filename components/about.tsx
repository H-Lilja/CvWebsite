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
    
    <div className='z-2 mt-4 grid place-items-center' >
     <h1 className='source-serif-4 place-self-start ml-4'>{t("greeting")}</h1>
     <h1 className='limelight-big place-self-start ml-3 '>Heidi Lilja</h1>
     <div className='flex gap-1 place-self-start ml-4'>
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevrons-right place-self-start"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
     <h2 className='source-serif-4 place-self-start -mt-1'>{t("myTitle")}</h2>
     </div>
      <img
        className= "w-32 h-32 md:w-80 md:h-80 object-cover rounded-full ml-48 -mr-40 -mt-20 place-self-end md:place-self-center"
        src={imageUrl} 
        alt="Heidi"/>
      <div className='flex gap-3 place-self-end mb-40 mr-32 mt-5'>
        <a href="https://www.instagram.com/heidiliilja/" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>       
        </a>
        <a href="https://www.linkedin.com/in/heidi-lilja-1b46ba169/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href="https://github.com/H-Lilja" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>        </a>
      </div>


      <div className='mb-20 w-auto bg-zinc-800'>
        {/* Title and text for about section */}
          <h1 className='abel-regular text-4xl mt-4 mb-8 ml-9'>{t("title")}</h1>
          <p className="abel-regular mx-9">{t("about")}</p>
          {/* Title and text for skill section before > part */}
          <h1 className='abel-regular text-4xl mt-8 mb-8 ml-9'>{t("skillTitle")}</h1>
          <p className="abel-regular mx-9 mb-2">{t("skills")}</p>
 
          {/* Divs to style skills */}
          <div className='flex gap-2 ml-9'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>          
          <p>Python</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>          
          <p>C#</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>          
          <p>React</p>
           </div>
          {/* Divs to style skills row2 */}
          <div className='flex gap-2 ml-9'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>          
          <p>UiPath</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>          
          <p>HTML & CSS</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>          
          <p>Next.js</p>
          </div>
          {/* Divs to style skills row3 */}
          <div className='flex gap-2 ml-9 mb-7'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>          
          <p>Typescript</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>          
          <p>RPA</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>          
          <p>Unity</p>
          </div>

       </div>
    </div>

  );
}

export default About;