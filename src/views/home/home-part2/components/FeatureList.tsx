import * as React from 'react';

const FeatureList: React.FC = () => {
    return (
        <section className="container max-w-[25rem]">
            <div className="m:px-0 flex flex-col gap-8 m:gap-12 px-0">
                <div className="m:flex-col flex gap-4">
                    <picture className="shrink-0">
                        <source srcSet="https://static.blinkist.com/cdn-cgi/image/width=80,height=80,format=webp,quality=,dpr=1/https://static.blinkist.com/web-growth/homepage/headphones.png?c=365 1x,https://static.blinkist.com/cdn-cgi/image/width=80,height=80,format=webp,quality=,dpr=2/https://static.blinkist.com/web-growth/homepage/headphones.png?c=365 2x,https://static.blinkist.com/cdn-cgi/image/width=80,height=80,format=webp,quality=,dpr=3/https://static.blinkist.com/web-growth/homepage/headphones.png?c=365 3x" width="80" height="80" />
                        <img fetchPriority="auto" alt="Headphones" src="https://static.blinkist.com/web-growth/homepage/headphones.png" loading="lazy" decoding="async" width="80" height="80" />
                    </picture>
                    <div>
                        <p className="text-h4 text-midnight m:text-h35 mb-2 font-bold">Read & listen to key insights</p>
                        <p className="text-dark-grey m:text-xl text-base">Boost your personal growth with bestsellers and podcasts' summaries.</p>
                    </div>
                </div>
                <div className="m:flex-col flex gap-4">
                    <picture className="shrink-0">
                        <source srcSet="https://static.blinkist.com/cdn-cgi/image/width=80,height=80,format=webp,quality=,dpr=1/https://static.blinkist.com/web-growth/homepage/brain-reading.png?c=365 1x,https://static.blinkist.com/cdn-cgi/image/width=80,height=80,format=webp,quality=,dpr=2/https://static.blinkist.com/web-growth/homepage/brain-reading.png?c=365 2x,https://static.blinkist.com/cdn-cgi/image/width=80,height=80,format=webp,quality=,dpr=3/https://static.blinkist.com/web-growth/homepage/brain-reading.png?c=365 3x" width="80" height="80" />
                        <img fetchPriority="auto" alt="Reading" src="https://static.blinkist.com/web-growth/homepage/brain-reading.png" loading="lazy" decoding="async" width="80" height="80" />
                    </picture>
                    <div>
                        <p className="text-h4 text-midnight m:text-h35 mb-2 font-bold">Feed your curiosity</p>
                        <p className="text-dark-grey m:text-xl text-base">Personal recommendations to dive into 7,500+ titles and hundreds of topics.</p>
                    </div>
                </div>
                <div className="m:flex-col flex gap-4">
                    <picture className="shrink-0">
                        <source srcSet="https://static.blinkist.com/cdn-cgi/image/width=80,height=80,format=webp,quality=,dpr=1/https://static.blinkist.com/web-growth/homepage/person-finding-books.png?c=365 1x,https://static.blinkist.com/cdn-cgi/image/width=80,height=80,format=webp,quality=,dpr=2/https://static.blinkist.com/web-growth/homepage/person-finding-books.png?c=365 2x,https://static.blinkist.com/cdn-cgi/image/width=80,height=80,format=webp,quality=,dpr=3/https://static.blinkist.com/web-growth/homepage/person-finding-books.png?c=365 3x" width="80" height="80" />
                        <img fetchPriority="auto" alt="Expert selecting content" src="https://static.blinkist.com/web-growth/homepage/person-finding-books.png" loading="lazy" decoding="async" width="80" height="80" />
                    </picture>
                    <div>
                        <p className="text-h4 text-midnight m:text-h35 mb-2 font-bold">An expert in your ear</p>
                        <p className="text-dark-grey m:text-xl text-base">Learn from experts through step-by-step guides & exclusive insights.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureList; 