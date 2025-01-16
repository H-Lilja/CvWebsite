import { useTranslations } from 'next-intl';
import {
  Card,
  CardContent
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Link } from '@/src/i18n/routing';
import Image from 'next/image';


interface Event {
  date: string;
  title: string;
  description: string;
}

 export default function Timeline () {
  const t = useTranslations('Timeline')
  const k = useTranslations('HomePage')
  const keys = ["event1", "event2","event3","event4"]

  

return (
<div className='mb-2'>
  <div className='grid'>
    {/* Main headline about timeline */}
  <h1 className='abel-regular text-4xl text-center ml-6 md:-ml-24 mb-4'>{k("timelineText")}</h1>
  {/* Link to projects */}
    <Link className="abel-regular text-2xl  ml-12 md:ml-60 mb-10 text-pink-300 hover:underline" href={`/contactInfo`}>{k('contactLink')}</Link>
    </div>
    {/* Timeline start. Different sizing on smaller screen */}
      <div className="min-h-full grid overflow-auto w-2/4 ml-28 lg:ml-72" >
      {/* Loops through the events written in the json file */}
        {keys.map((key, index) => (
          <div key={key}>
            <Card>
              <CardContent>
                {/* Image is a svg icon of graduation cap or work case */}
              <Image
                className= "w-12 h-12 mt-4 mb-2 md:ml-0 mr-3"
                src={t(`${key}.pic`)}
                alt="Icon"
                width={48} // Set image width
                height={48} // Set image height
                priority={true}/>
                {/* text content of the card */}
                <div className='text-center -mt-8'>
                  <p className='abel-regular -mt-12 mb-6 md:ml-0 ml-3'>{t(`${key}.date`)}</p>
                  <p className='abel-regular'>{t(`${key}.title`)}</p>
                  <p className='abel-regular'>{t(`${key}.description`)}</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Conditionally render Separator only if it's not the last item */}
            {index < keys.length - 1 && (
              <Separator className=" bg-white h-32 mx-auto " orientation="vertical" />
            )}
          </div>
        ))}
      </div>
    </div>
)
}