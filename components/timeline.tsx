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
      <div className="min-h-full grid grid-rows-auto overflow-auto" >
        {keys.map((key, index) => (
          <div key={key}>
            <Card>
              <CardContent>
                <p>
                  {t(`${key}.date`)}
                  {t(`${key}.title`)}
                  {t(`${key}.description`)}
                </p>
              </CardContent>
            </Card>
            
            {/* Conditionally render Separator only if it's not the last item */}
            {index < keys.length - 1 && (
              <Separator className=" bg-white h-12 mx-auto " orientation="vertical" />
            )}
          </div>
        ))}
      </div>
)
}