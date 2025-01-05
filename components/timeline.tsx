import React from 'react';
import { useTranslations } from 'next-intl';
import { FaCheckCircle, FaRegCalendarAlt } from 'react-icons/fa'; // Importing icons for the timeline

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const Timeline: React.FC = () => {
  const t = useTranslations(); // Access the current language's translations
  const timelineDataRaw = t('Timeline.events', { returnObjects: true });

  // Ensure that the result is an array of TimelineEvent objects
  const timelineData: TimelineEvent[] = Array.isArray(timelineDataRaw)
    ? (timelineDataRaw as TimelineEvent[])
    : [];

  if (timelineData.length === 0) {
    return <div>No timeline events available.</div>; // Optional: Fallback message if no events
  }

  return (
    <div className="space-y-8 p-6">
      {timelineData.map((event, index) => (
        <div key={index} className="relative">
          {/* Line connecting events */}
          <div
            className={`absolute left-2 top-0 h-full w-1 bg-gray-300 ${index !== timelineData.length - 1 ? 'border-b' : ''}`}
          />
          {/* Event card */}
          <div className="shadow-lg p-4 bg-white">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex justify-center items-center bg-pink-500 text-white rounded-full">
                {event.icon === 'check' ? <FaCheckCircle size={24} /> : <FaRegCalendarAlt size={24} />}
              </div>
              <div>
                <p className="text-gray-500 text-sm">{event.date}</p>
                <h3 className="text-xl font-semibold">{event.title}</h3>
              </div>
            </div>
            <div>
              <p>{event.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
