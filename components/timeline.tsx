import { useTranslations } from 'next-intl';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from '@/src/i18n/routing';


export default function Timeline() {
  // for collection of events
  const t = useTranslations('Timeline');
  // for titles
  const k = useTranslations('HomePage');
  //keys for the events
  const keys = ["event1", "event2", "event3", "event4"];

  return (
    <div className='mb-2'>
      <div className='grid'>
        {/* Main headline about timeline */}
        <h1 className='abel-regular text-4xl 3xl:text-6xl text-center mb-4 p-2'>{k("timelineText")}</h1>
        {/* Link to projects */}
        <Link className="abel-regular text-center text-2xl 3xl:text-4xl mb-10 text-pink-300 hover:underline" href={`/contactInfo`}>{k('contactLink')}</Link>
      </div>
      {/* Timeline start. Different sizing on smaller screen */}
      <div className="overflow-auto w-2/4 ml-24 md:ml-72  3xl:mx-auto">
        {/* Loops through the events written in the json file */}
        {keys.map((key, index) => (
          <div key={key}>
            <Card>
              <CardContent>
                {/* Conditionally render the SVG based on `t(`${key}.icon`)` */}
                {t(`${key}.icon`) === "work" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase-business  w-12 h-12 3xl:w-24 3xl:h-24">
                    <path d="M12 12h.01" />
                    <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                    <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                    <rect width="20" height="14" x="2" y="6" rx="2" />
                  </svg>
                ) : t(`${key}.icon`) === "school" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ff80c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap  w-12 h-12 3xl:w-24 3xl:h-24">
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                    <path d="M22 10v6" />
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                  </svg>
                ) : (
                  // No fallback image is rendered now
                  <div>No icon available</div> // You can render a default message or leave this part empty
                )}
                {/* text content of the card */}
                <div className='text-center -mt-8'>
                  <p className='abel-regular p-2 -mt-12  lg:-mt-20 mb-6 md:ml-0 ml-4 lg:text-2xl'>{t(`${key}.date`)}</p>
                  <p className='abel-regular text-xl mb-2 text-pink-100 mix-blend-hard-light lg:text-4xl'>{t(`${key}.title`)}</p>
                  <Separator className=" bg-white  mx-auto " orientation="horizontal" />
                  <p className='abel-regular mt-3 lg:text-xl'>{t(`${key}.description`)}</p>
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
  );
}
