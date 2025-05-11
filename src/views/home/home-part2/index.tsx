import * as React from 'react';
import TitleSection from './components/TitleSection';
import FeatureList from './components/FeatureList';
import VideoSection from './components/VideoSection';
import ReviewSection from './components/ReviewSection';
import StatsSection from '../../../components/StatsSection';
import TrialButton from '../../../components/TrialButton';
function HomePart2() {
    return (
        <>
            <div className="m:gap-16 flex flex-col items-center gap-8 px-4 m:mx-12">
                <div>
                    <TitleSection />
                    <div className="m:gap-12 flex w-full flex-row justify-center gap-8">
                        <FeatureList />
                        <VideoSection />
                    </div>
                </div>
            </div>
            <div className="m:gap-12 flex flex-col items-center gap-8">
                <a target="_blank" href="/en/onboarding/matrix" className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-white transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-green hover:bg-green-2 text-midnight s:max-w-74 w-full rounded-lg">Get started</a>
                <ReviewSection />
                <StatsSection />
                <TrialButton />
            </div>
        </>
    );
}

export default HomePart2;