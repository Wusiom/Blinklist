import * as React from 'react';
import Timeline from '../../../components/Timeline';
import InfoBox from '../../../components/InfoBox';

const timelineItems = [
    {
        day: 'Today',
        description: 'Start enjoying the entire library of Blinks and shows.'
    },
    {
        day: 'Day -2',
        description: 'We\'ll send you a reminder email that your trial is ending.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5 text-white">
                <path d="M20.605 15.372v-4.096a8.54 8.54 0 00-1.432-4.783 8.698 8.698 0 00-3.875-3.197 1.633 1.633 0 000-.34 3.318 3.318 0 00-1.105-2.11A3.397 3.397 0 0011.946 0c-.829 0-1.628.301-2.247.847a3.319 3.319 0 00-1.105 2.11c-.01.12-.01.24 0 .36a8.737 8.737 0 00-3.786 3.22 8.581 8.581 0 00-1.392 4.739v3.777a3.437 3.437 0 01-.972 2.458A3.523 3.523 0 010 18.576V20.7h7.82a4.239 4.239 0 001.51 2.375c.762.6 1.707.926 2.68.926.974 0 1.92-.327 2.68-.926a4.239 4.239 0 001.51-2.375H24v-2.123a3.504 3.504 0 01-2.327-.951 3.42 3.42 0 01-1.068-2.253z" fill="currentColor" />
            </svg>
        )
    },
    {
        day: 'Day 0',
        description: 'Free trial ends.',
    }
];

function TrainExplain() {
    return (
        <div data-test-id="trial-explainer">
            <section className="flex w-full max-w-[80rem] mx-auto m:px-12 px-4">
                <div className="text-midnight py-12 m:py-16">
                    <h2 className="mb-4 text-center font-bold text-h3 m:text-h2">
                        A small investment, an incredible growth opportunity
                    </h2>
                    <div className="text-center mb-6 m:mb-12 m:text-p0">
                        Get access to powerful ideas from <span className="bg-background-purple">more than 5,500 nonfiction books and podcasts.</span>
                    </div>
                    <Timeline items={timelineItems} />
                    <InfoBox 
                        description={
                            <>
                                Enjoy unlimited access for . Love it and keep investing in yourself for only <strong><span className="currency-symbol currency-symbol--sgd">$</span>10.00</strong> a month, or <strong>simply cancel before May 11 and you won't ever be charged.</strong>
                            </>
                        }
                    />
                </div>
            </section>
        </div>
    );
}

export default TrainExplain;
