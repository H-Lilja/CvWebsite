import { useTranslations } from 'next-intl';
import Image from 'next/image';


interface Event {
  date: string;
  title: string;
  description: string;
}

 export default function Timeline () {
  const t = useTranslations('Projects')
  const k = useTranslations('HomePage')
  const keys = ["event1", "event2","event3","event4"]

  

return (
<div className='mb-2 '>
  <div className='grid gap-2'>
  <h1 className='abel-regular text-4xl text-center ml-6 md:-ml-24 mb-4'>{k("timelineText")}</h1>
    </div>
      <div className="grid gap-5 grid-cols-3 mx-3 auto-rows-max" >
        {keys.map((key, index) => (
          <div className="projects" key={key}>

              <Image
                className= "w-12 h-12 mt-4 mb-2 md:ml-0 mr-3"
                src={t(`${key}.pic`)}
                alt="Icon"
                width={48} // Set image width
                height={48} // Set image height
                priority={true}/>
                <div className='text-center -mt-8'>
                  <p className='abel-regular -mt-12 mb-6 md:ml-0 ml-3'>{t(`${key}.date`)}</p>
                  <p className='abel-regular'>{t(`${key}.title`)}</p>
                  <p className='abel-regular'>{t(`${key}.description`)}</p>
                </div>
          </div>
        ))}
      </div>
    </div>
)
}