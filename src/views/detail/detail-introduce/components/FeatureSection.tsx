import * as React from 'react';

const FeatureSection: React.FC = () => {
    return (
        <section className="flex-col flex w-full max-w-[80rem] mx-auto m:px-12 px-4">
            <div className="flex flex-col mb-24">
                <div className="text-midnight text-center mb-6 font-bold text-h3 m:text-h2">
                    More knowledge in less time
                </div>
                <div className="w-full flex flex-col m:flex-row gap-6 l:gap-8">
                    <div className="flex m:flex-col items-center w-full">
                        <img 
                            src="https://static.blinkist.com/wcl/feature-section/key_ideas.svg" 
                            alt="Read or listen" 
                            loading="lazy" 
                            className="object-contain w-16 h-16 mr-6 m:mr-0 m:mb-6 flex-shrink-0"
                        />
                        <div className="flex flex-col m:contents m:text-center">
                            <div className="text-midnight font-bold m:mb-2 m:text-h3 relative">
                                Read or listen
                            </div>
                            <div className="text-dark-grey m:text-xl">
                                Get the key ideas from nonfiction bestsellers in minutes, not hours.
                            </div>
                        </div>
                    </div>
                    <div className="flex m:flex-col items-center w-full">
                        <img 
                            src="https://static.blinkist.com/wcl/feature-section/bulb.svg" 
                            alt="Find your next read" 
                            loading="lazy" 
                            className="object-contain w-16 h-16 mr-6 m:mr-0 m:mb-6 flex-shrink-0"
                        />
                        <div className="flex flex-col m:contents m:text-center">
                            <div className="text-midnight font-bold m:mb-2 m:text-h3 relative">
                                Find your next read
                            </div>
                            <div className="text-dark-grey m:text-xl">
                                Get book lists curated by experts and personalized recommendations.
                            </div>
                        </div>
                    </div>
                    <div className="flex m:flex-col items-center w-full">
                        <img 
                            src="https://static.blinkist.com/wcl/feature-section/shortcast.svg" 
                            alt="Shortcasts" 
                            loading="lazy" 
                            className="object-contain w-16 h-16 mr-6 m:mr-0 m:mb-6 flex-shrink-0"
                        />
                        <div className="flex flex-col m:contents m:text-center">
                            <div className="text-midnight font-bold m:mb-2 m:text-h3 relative">
                                Shortcasts
                                <sup className="absolute text-sm text-raspberry uppercase font-bold ml-1 mt-1">New</sup>
                            </div>
                            <div className="text-dark-grey m:text-xl">
                                We've teamed up with podcast creators to bring you key insights from podcasts.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection; 