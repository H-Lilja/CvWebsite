import { useTranslations } from 'next-intl';
import Image from 'next/image';


interface Event {
  date: string;
  title: string;
  description: string;
}

 export default function Timeline () {
  const t = useTranslations('Projects')
  const k = useTranslations('ProjectsTitles')
  const keys = ["event1", "event2","event3"]

  

return (
<div className='mb-2 '>
  <div className='grid gap-2'>
  <h1 className='abel-regular text-4xl text-center ml-6 md:-ml-24 mb-4'>{k("mainTitle")}</h1>
    </div>
      <div className="grid gap-5 grid-cols-3 mx-3 auto-rows-max" >
        {keys.map((key, index) => (
          <div className="projects" key={key}>

              {/* <Image
                src={t(`${key}.pic`)}
                alt="Icon"
                width={48} // Set image width
                height={48}/> */}
                <div className='text-center '>
                  <p className='abel-regular'>{t(`${key}.date`)}</p>
                  <p className='abel-regular'>{t(`${key}.title`)}</p>
                  <p className='abel-regular'>{t(`${key}.description`)}</p>
                </div>
          </div>
        ))}
      </div>
    </div>
)
}