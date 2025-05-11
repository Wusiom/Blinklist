function HomePart1() {
    return ( 
        <section className="mt-8 mx-4 m:mt-20">
            <div className="l:flex-row l:gap-7 mx-auto flex max-w-[80rem] flex-col items-center justify-between gap-12 text-center">
                <div className="l:w-auto l:items-start relative flex w-full flex-col items-center">
                    <h1 className="container text-h15 l:text-h0 l:mb-8 l:text-left mb-6 flex flex-col text-center">
                        <strong>Learn</strong>
                        <span className="italic">something new</span>
                        <strong>every day</strong>
                    </h1>
                    <p className="text-dark-grey m:text-xl l:text-left mb-8 text-center text-base leading-loose" style={{ lineHeight: 2 }}>
                        Get the key ideas from the top <br />
                        <span className="px-3 py-1 rounded-full bg-blue-7 text-midnight">books</span>, 
                        <span className="px-3 py-1 rounded-full bg-background-yellow text-midnight">podcasts</span>, and 
                        <span className="px-3 py-1 rounded-full bg-background-purple text-midnight">experts</span> <br />
                        in 15 minutes with the Blinkist app.
                    </p>
                    <a target="_blank" href="/en/onboarding/matrix" className="cursor-pointer inline-flex whitespace-nowrap text-md font-medium ring-offset-white transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-green hover:bg-green-2 text-midnight s:max-w-74 w-full items-center justify-center rounded-lg text-center">
                        Get started
                    </a>
                </div>
                <div className="relative">
                    <video className="m:-top-7 m:left-0 m:w-24 absolute right-0 left-10 w-16 -rotate-3" height="97" width="80" autoPlay loop muted playsInline>
                        <source src="https://static.blinkist.com/web-growth/homepage/animation/ear.mov?c=365" type="video/mp4; codecs=hvc1" />
                        <source src="https://static.blinkist.com/web-growth/homepage/animation/ear.webm?c=365" type="video/webm" />
                    </video>
                    <video className="m:bottom-0 m:right-10 m:w-20 absolute bottom-10 w-12" height="85" width="85" autoPlay loop muted playsInline>
                        <source src="https://static.blinkist.com/web-growth/homepage/animation/stars.mov?c=365" type="video/mp4; codecs=hvc1" />
                        <source src="https://static.blinkist.com/web-growth/homepage/animation/stars.webm?c=365" type="video/webm" />
                    </video>
                    <video className="m:right-18 m:top-16 m:w-18 absolute right-0 bottom-0 w-14" height="75" width="75" autoPlay loop muted playsInline>
                        <source src="https://static.blinkist.com/web-growth/homepage/animation/glasses.mov?c=365" type="video/mp4; codecs=hvc1" />
                        <source src="https://static.blinkist.com/web-growth/homepage/animation/glasses.webm?c=365" type="video/webm" />
                    </video>
                    <picture>
                        <source media="(min-width: 768px)" srcSet="https://static.blinkist.com/cdn-cgi/image/width=508,height=433,format=webp,quality=70,dpr=1/https://static.blinkist.com/web-growth/homepage/hero_desktop.png?c=365 1x,https://static.blinkist.com/cdn-cgi/image/width=508,height=433,format=webp,quality=70,dpr=2/https://static.blinkist.com/web-growth/homepage/hero_desktop.png?c=365 2x,https://static.blinkist.com/cdn-cgi/image/width=508,height=433,format=webp,quality=70,dpr=3/https://static.blinkist.com/web-growth/homepage/hero_desktop.png?c=365 3x" width="508" height="433" />
                        <source srcSet="https://static.blinkist.com/cdn-cgi/image/width=300,height=289,format=webp,quality=70,dpr=1/https://static.blinkist.com/web-growth/homepage/hero_mobile.png?c=365 1x,https://static.blinkist.com/cdn-cgi/image/width=300,height=289,format=webp,quality=70,dpr=2/https://static.blinkist.com/web-growth/homepage/hero_mobile.png?c=365 2x,https://static.blinkist.com/cdn-cgi/image/width=300,height=289,format=webp,quality=70,dpr=3/https://static.blinkist.com/web-growth/homepage/hero_mobile.png?c=365 3x" width="300" height="289" />
                        <img fetchPriority="high" alt="Blinkist mobile app" src="https://static.blinkist.com/web-growth/homepage/hero_mobile.png" className="" loading="eager" decoding="async" width="300" height="289" />
                    </picture>
                </div>
            </div>
        </section>
     );
}

export default HomePart1;