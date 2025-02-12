import '../src/app/[locale]/globals.css'
import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import TypingText from './animata/text/typing-text';

function About() {
  // get the json selection for homePAge
      const t = useTranslations('HomePage');
      const [imageUrl, setImageUrl] = useState('');
      const skillTitle = t('skillTitle');
      // the margin right property needs to be different in different languages
      const pClass = skillTitle === 'Taidot' ? "abel-regular mr-20 text-nowrap mb-28 lg:mb-0 ml-9 lg:ml-0 md:text-xl 3xl:text-2xl" : "abel-regular mr-5 text-nowrap mb-28 lg:mb-0 ml-9 lg:ml-0 3xl:text-2xl"; // Example styles
      // Set the image URL with a unique query parameter on component mount
      useEffect(() => {
        const randomParam = new Date().getTime(); // Unique timestamp
        setImageUrl(`/images/IMG_0118.jpg?timestamp=${randomParam}`);
      }, []); // Empty array ensures this runs once when the component mounts
 
    
  return (
    
    <div className='z-2 mt-4 grid place-items-center' >
      {/* first title in page */}
     <h1 className='source-serif-4 place-self-start ml-4 mt-2 3xl:mt-4 3xl:text-4xl'>{t("greeting")}</h1>
     {/* name title */}
     {/* <SplitText text="Heidi Lilja" /> */}
     <h1 className='limelight-big place-self-start ml-3 mt-1 lg:mt-0 3xl:text-9xl 3xl:mt-4'>Heidi Lilja</h1>
     {/* jobtitle after name*/}
     <div className='flex gap-1 place-self-start ml-4 mt-72 lg:mt-0 mr-10 lg:mr-0 3xl:mt-4'>
     <h2 className='source-serif-4 place-self-start -mt-1 mr-12 lg:mr-0  3xl:text-4xl'><TypingText text={t("myTitle")}></TypingText></h2>
     </div>

     {/* Image of self in page */}
      <Image
        className= "w-56 h-56 md:w-80 md:h-80  3xl:w-[36rem] 3xl:h-[36rem] object-cover rounded-full ml-5 md:ml-0 3xl:mt-10 3xl:-mr-60 md:mr-44 -mt-80 lg:-mt-20 lg:place-self-end place-self-start 3xl:place-self-center"
        src={imageUrl} 
        alt="Heidi"
        width={400} // Set width as per requirement
        height={400} // Set height as per requirement
        />

        {/* Icons and links for socials */}
      <div className='flex gap-3 place-self-start md:place-self-end 3xl:place-self-end mb-20 md:mb-24 3xl:mb-60 mr-0 md:mr-14 3xl:mr-60 ml-6 3xl:ml-0  mt-16 md:-mt-5 3xl:mt-20'>
        <a href="https://www.instagram.com/heidiliilja/" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram w-6 h-6 3xl:w-12 3xl:h-12"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>       
        </a>
        <a href="https://www.linkedin.com/in/heidi-lilja-1b46ba169/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin w-6 h-6 3xl:w-12 3xl:h-12"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href="https://github.com/H-Lilja" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github w-6 h-6 3xl:w-12 3xl:h-12"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>        </a>
      </div>


      <div className='mb-28 lg:mb-20 w-auto bg-zinc-800 image'>
        {/* Titles for about and skills */}
        <div className="lg:flex grid mt-4">
          <h1 className='abel-regular text-4xl 3xl:text-6xl  mx-9'>{t("title")}</h1>
          <h1 className='hidden lg:flex abel-regular text-4xl 3xl:text-6xl  mb-2 ml-auto  mr-44'>{t("skillTitle")}</h1>
        </div>
          {/* Title and text for skill section before > part the sections are stacked on mobile,
          hence why the titles are twice*/}
         <div className="grid lg:flex">
          <p className="abel-regular ml-9 mr-9 lg:mr-64 3xl:text-start 3xl:text-3xl mb-8">{t("about")}</p>
          <h1 className='lg:hidden flex abel-regular text-4xl  mb-2 ml-9 mr-44'>{t("skillTitle")}</h1>
          {/* skills is the little sub-title before the > marked skills */}
          <p className={pClass}>{t("skills")}</p>
        </div>

        {/* Div to contain the styled skills */}
        <div className='relative'>
        <div className='absolute top-0  left-9 lg:right-0 -mt-24 md:-mt-28 mb-20 lg:place-self-end 3xl:text-xl'>
              {/* Divs to style skills */}
              <div className='flex mr-16'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>          
              <p>Python</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>          
              <p>C#</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>          
              <p>Next.js</p>
              </div>
              {/* Divs to style skills row2 */}
              <div className='flex  mr-10'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>          
              <p>UiPath</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>          
              <p>HTML & CSS</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>          
              <p>React</p>
              </div>
              {/* Divs to style skills row3 */}
              <div className='flex  mr-20'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>          
              <p>Typescript</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>          
              <p>RPA</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>          
              <p>Unity</p>
              </div>
          </div>
         </div>
       </div>
    </div>

  );
}

export default About;