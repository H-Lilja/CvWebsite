import { useTranslations } from 'next-intl';

interface Event {
  date: string;
  title: string;
  description: string;
}

 export default function Timeline () {
  const t = useTranslations('Timeline')


  return (
    <div className="grid lg:grid-cols-5">
      {keys.map((key) => (
        <div key={key}>
          <h1>
            {t(`${key}.date`)}
            {t(`${key}.title`)}
            {t(`${key}.description`)}
          </h1>
          <h2>____</h2>
        </div>
      ))}
    </div>
  ) 
}
const keys = [
"event1",
"event2",
]

