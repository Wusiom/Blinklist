import * as React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface TimelineItem {
    day: string;
    description: string;
    icon?: React.ReactNode;
}

interface TimelineProps {
    items: TimelineItem[];
}

function Timeline({ items }: TimelineProps) {
    return (
        <div className="flex flex-col m:flex-row m:items-start mb-6 m:mb-12">
            {items.map((item, index) => (
                <div key={index} className="grid grid-cols-[auto,1fr] gap-0 m:grid-cols-1 w-full">
                    <div className="relative flex flex-col w-4 mr-5 items-center justify-between row-span-2 m:rows-span-1 m:order-1 m:w-full m:h-4 m:mr-0 m:my-2 m:flex-row">
                        <div className="w-4 h-4 z-10 bg-blue rounded-full flex items-center justify-center flex-shrink-0">
                            {item.icon}
                        </div>
                        {index < items.length - 1 && (
                            <div className="absolute h-full mx-auto m:mx-0 m:w-full bg-blue w-1 m:h-1"></div>
                        )}
                        {index === items.length - 1 && (
                            <>
                                <div className="absolute h-full mx-auto m:mx-0 m:w-full bg-blue-5 w-0.4 m:h-0.5">
                                    <ArrowRightIcon className="absolute right-[-4%] top-[-11px] w-6 h-6 text-blue-5" />
                                </div>
                            </>
                        )}
                    </div>
                    <div className="text-blue text-h4 font-bold w-full -mt-1 m:order-0 m:text-h3 m:mt-0">
                        {item.day}
                    </div>
                    <div className="text-dark-grey text-base w-full mb-5 m:order-2 m:pr-6 m:mb-0">
                        {item.description}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Timeline; 