import * as React from 'react';
import Card from './components/Card';
import ProgressDots from './components/ProgressDots';
import NavigationButtons from './components/NavigationButtons';

const cards = [
    {
        title: "Bite-sized bestsellers",
        titleColor: "text-blue",
        description: "Get powerful ideas in minutes—not hours or days with our summaries of today's most transformative books.",
        imageUrl: "https://static.blinkist.com/web-growth/homepage/book-summaries_mobile.png",
        desktopImageUrl: "https://static.blinkist.com/cdn-cgi/image/width=490,height=400,format=webp,quality=,dpr=1/https://static.blinkist.com/web-growth/homepage/book-summaries_desktop.png?c=365 1x,https://static.blinkist.com/cdn-cgi/image/width=490,height=400,format=webp,quality=,dpr=2/https://static.blinkist.com/web-growth/homepage/book-summaries_desktop.png?c=365 2x,https://static.blinkist.com/cdn-cgi/image/width=490,height=400,format=webp,quality=,dpr=3/https://static.blinkist.com/web-growth/homepage/book-summaries_desktop.png?c=365 3x",
        backgroundColor: "bg-background-blue"
    },
    {
        title: "An expert in your ear",
        titleColor: "text-orchid-violet",
        description: "Let a pro lead you through today's must-know topics and apply what you learn right away with interactive tools and activities.",
        imageUrl: "https://static.blinkist.com/web-growth/homepage/guides_mobile.png",
        desktopImageUrl: "https://static.blinkist.com/cdn-cgi/image/width=490,height=400,format=webp,quality=,dpr=1/https://static.blinkist.com/web-growth/homepage/guides_desktop.png?c=365 1x,https://static.blinkist.com/cdn-cgi/image/width=490,height=400,format=webp,quality=,dpr=2/https://static.blinkist.com/web-growth/homepage/guides_desktop.png?c=365 2x,https://static.blinkist.com/cdn-cgi/image/width=490,height=400,format=webp,quality=,dpr=3/https://static.blinkist.com/web-growth/homepage/guides_desktop.png?c=365 3x",
        backgroundColor: "bg-background-purple"
    },
    {
        title: "Learning, but social",
        titleColor: "text-summer-yellow",
        description: "Make a learning playlist for yourself, share with others (you can finally start that book club!), or follow thought leaders' Spaces to get inspired.",
        imageUrl: "https://static.blinkist.com/web-growth/homepage/spaces_mobile.png",
        desktopImageUrl: "https://static.blinkist.com/cdn-cgi/image/width=490,height=400,format=webp,quality=,dpr=1/https://static.blinkist.com/web-growth/homepage/spaces_desktop.png?c=365 1x,https://static.blinkist.com/cdn-cgi/image/width=490,height=400,format=webp,quality=,dpr=2/https://static.blinkist.com/web-growth/homepage/spaces_desktop.png?c=365 2x,https://static.blinkist.com/cdn-cgi/image/width=490,height=400,format=webp,quality=,dpr=3/https://static.blinkist.com/web-growth/homepage/spaces_desktop.png?c=365 3x",
        backgroundColor: "bg-background-yellow"
    }
];

const ScrollCard: React.FC = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const autoPlayTimeoutRef = React.useRef<ReturnType<typeof setInterval>>(null);

    // 自动轮播
    React.useEffect(() => {
        if (!isAutoPlaying) return;

        const startAutoPlay = () => {
            if (autoPlayTimeoutRef.current) {
                clearInterval(autoPlayTimeoutRef.current);
            }
            autoPlayTimeoutRef.current = setInterval(() => {
                setCurrentIndex(prev => (prev + 1) % cards.length);
            }, 5000);
        };

        startAutoPlay();

        return () => {
            if (autoPlayTimeoutRef.current) {
                clearInterval(autoPlayTimeoutRef.current);
            }
        };
    }, [isAutoPlaying]);

    // 滚动到当前卡片
    React.useEffect(() => {
        if (!containerRef.current) return;
        const cardWidth = containerRef.current.offsetWidth;
        containerRef.current.scrollTo({
            left: cardWidth * currentIndex,
            behavior: 'smooth'
        });
    }, [currentIndex]);

    const handleManualChange = (newIndex: number) => {
        if (autoPlayTimeoutRef.current) {
            clearInterval(autoPlayTimeoutRef.current);
        }
        setCurrentIndex(newIndex);
        setIsAutoPlaying(true);
    };

    const handlePrev = () => {
        handleManualChange(currentIndex > 0 ? currentIndex - 1 : cards.length - 1);
    };

    const handleNext = () => {
        handleManualChange((currentIndex + 1) % cards.length);
    };

    const handleDotClick = (index: number) => {
        handleManualChange(index);
    };

    return (
        <section>
            <h2 className="text-h2 text-midnight m:mb-8 m:text-h0 mb-4 text-center font-bold">
                How will you level up?
            </h2>
            <p className="text-p1 text-dark-grey m:mb-12 m:text-p0 mx-4 mb-8 text-center">
                Listen, read, or get interactive—however you like to learn, you'll find it here!
            </p>
            <div className="overflow-hidden">
                <div 
                    ref={containerRef}
                    className="m:scroll-px-12 m:gap-10 m:px-12 -mb-8 flex snap-x snap-mandatory scroll-px-4 flex-row gap-4 overflow-x-auto scroll-smooth px-4 pb-8"
                >
                    {cards.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>
            </div>
            <div className="m:px-16 relative mt-6 flex items-center">
                <ProgressDots 
                    count={cards.length}
                    currentIndex={currentIndex}
                    onDotClick={handleDotClick}
                />
                <NavigationButtons 
                    onPrev={handlePrev}
                    onNext={handleNext}
                />
            </div>
        </section>
    );
};

export default ScrollCard;
