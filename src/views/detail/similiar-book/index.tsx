import * as React from 'react';
import { BookCard } from './components/BookCard';
import { ScrollButton } from './components/ScrollButton';
import { BookSlider } from './components/BookSlider';
import { books } from './data/books';

const SimiliarBook: React.FC = () => {
    const [showLeftArrow, setShowLeftArrow] = React.useState(false);
    const [showRightArrow, setShowRightArrow] = React.useState(true);
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -600, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 600, behavior: 'smooth' });
        }
    };

    React.useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
            handleScroll();
        }
        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div id="similar-books" data-toc="" className="bg-midnight w-full py-12 mb-12 m:mb-16">
            <section className="flex-col flex w-full max-w-[80rem] mx-auto m:px-12">
                <h2 className="font-bold text-h35 text-white mb-6 m:mb-8 px-4 m:px-0">
                    Book summaries like <span className="font-normal italic">The 5 AM Club</span>
                </h2>
                <div className="w-full overflow-hidden flex items-center">
                    <ScrollButton 
                        direction="left" 
                        onClick={scrollLeft} 
                        visible={showLeftArrow} 
                    />
                    <BookSlider 
                        scrollRef={scrollContainerRef} 
                        onScroll={handleScroll}
                    >
                        {[...books, ...books, ...books].map((book, index) => (
                            <BookCard key={index} {...book} />
                        ))}
                    </BookSlider>
                    <ScrollButton 
                        direction="right" 
                        onClick={scrollRight} 
                        visible={showRightArrow} 
                    />
                </div>
            </section>
        </div>
    );
};

export default SimiliarBook;

