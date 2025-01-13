import { useTranslations } from 'next-intl';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"



interface Event {
  date: string;
  title: string;
  description: string;
}

 export default function Timeline () {
  const t = useTranslations('Timeline')
  const keys = ["event1", "event2","event3"]

  

return (
<div>
  <h1 className='text-left'>Timeline</h1>
      <div className="min-h-full grid overflow-auto w-2/4 ml-60" >
        {keys.map((key, index) => (
          <div key={key}>
            <Card>
              <CardContent>
                <div className='text-center'>
                  <img
                        className= "w-12 h-12"
                        src={t(`${key}.pic`)}
                   alt="Heidi"/>
                  <p>{t(`${key}.date`)}</p>
                  <p>{t(`${key}.title`)}</p>
                  <p>{t(`${key}.description`)}</p>
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