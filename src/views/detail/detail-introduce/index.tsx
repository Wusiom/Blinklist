import * as React from 'react';
import FeatureSection from './components/FeatureSection';
import AboutBookSection from './components/AboutBookSection';
import QuoteSection from './components/QuoteSection';
import WhoShouldReadSection from './components/WhoShouldReadSection';
import AboutAuthorSection from './components/AboutAuthorSection';
import CategorySection from './components/CategorySection';

const DetailIntroduce: React.FC = () => {
    return (
        <>
            <FeatureSection />
            <AboutBookSection bookTitle="The 5 AM Club" />
            <QuoteSection />
            <WhoShouldReadSection />
            <AboutAuthorSection />
            <CategorySection />
        </>
    );
}

export default DetailIntroduce;