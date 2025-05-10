import * as React from 'react';

interface StatItem {
    value: string;
    text: string;
}

interface StatisticsProps {
    stats: StatItem[];
}

function Statistics({ stats }: StatisticsProps) {
    return (
        <div className="w-full">
            <div className="m:grid m:grid-cols-3 flex flex-col gap-8">
                {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                        <div className="text-h1 text-midnight font-bold">{stat.value}</div>
                        <div className="text-p1 text-dark-grey mt-2">{stat.text}</div>
                    </div>
                ))}
            </div>
            <div className="text-caption text-dark-grey mt-8 text-center">
                * Based on a survey of 1,000 Blinkist members in 2023
            </div>
        </div>
    );
}

export default Statistics; 