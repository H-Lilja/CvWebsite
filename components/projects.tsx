import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/src/i18n/routing';
import { Button } from "@/components/ui/button"

 export default function Timeline () {
  const t = useTranslations('Projects')
  const k = useTranslations('ProjectsTitles')
  const keys = ["event1", "event2","event3"]
  const imageStyle = {
    padding: '10px',
    // border: '1px solid #fff',
  }
  

return (
<div className='mb-2 '>
  <div className='grid gap-2'>
  <h1 className='abel-regular text-4xl text-center ml-0 md:-ml-24 mb-4'>{k("mainTitle")}</h1>
    </div>
      <div className="grid gap-5  grid-cols-1 md:grid-cols-3 mx-3 auto-rows-max" >
        {keys.map((key) => (
          <div className="projects p-6" key={key}>
                <Image
                  src={
                    key === 'event1' 
                      ? "/images/portfolio.png"
                      : key === 'event2' 
                      ? "/images/Vr-Robot-Example.png" 
                      : key === 'event3' 
                      ? "/images/Clean_VR.png"
                      : 'empty' // Fallback image for other events
                  }
                  style={imageStyle}
                  alt="Icon"
                  width={400} // Set width as per requirement
                  height={400} // Set height as per requirement
                        />
                <div className='text-center p-1'>
                  <p className='abel-regular'>{t(`${key}.date`)}</p>
                  <p className='abel-regular'>{t(`${key}.title`)}</p>
                  <p className='abel-regular'>{t(`${key}.description`)}</p>
                  {/* Conditionally render the Link if the description URL is valid */}
                  {t(`${key}.url`) && t(`${key}.url`) !== "-" && (
                    <Button className='button m-2' variant={'outline'} asChild>
                    <Link 
                      className="abel-regular text-start hover:underline" 
                      href={t(`${key}.url`)}
                    > {k('visitCode')}</Link></Button>)}
                   {/* Conditionally render the Link if the description URL is valid */}
                  {t(`${key}.url2`) && t(`${key}.url2`) !== "-" && (
                    <Button className='button m-2' variant={'outline'} asChild>
                    <Link 
                      className="abel-regular text-start hover:underline" 
                      href={t(`${key}.url2`)}
                    > {k('visitProject')}</Link></Button>)}
                </div>
          </div>
        ))}
      </div>
    </div>
)
}