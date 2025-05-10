import * as React from 'react';
import BookCard from './components/BookCard';
import NavigationButton from './components/NavigationButton';
import { books } from './data/books';

function ScrollListening() {
    const [currentGroup, setCurrentGroup] = React.useState(0);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [visibleCount, setVisibleCount] = React.useState(5);
    const [hoveredIndex, setHoveredIndex] = React.useState(0);

    // 根据容器宽度计算可见卡片数量
    React.useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const updateVisibleCount = () => {
            const width = container.offsetWidth;
            if (width < 640) { // sm
                setVisibleCount(2);
            } else if (width < 768) { // md
                setVisibleCount(3);
            } else if (width < 1024) { // lg
                setVisibleCount(4);
            } else {
                setVisibleCount(5);
            }
        };

        // 使用 ResizeObserver 监听容器大小变化
        const resizeObserver = new ResizeObserver(updateVisibleCount);
        resizeObserver.observe(container);

        // 初始化时计算一次
        updateVisibleCount();

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    // 计算总组数
    const totalGroups = Math.ceil(books.length / visibleCount);

    // 获取当前组的书籍
    const currentBooks = books.slice(
        currentGroup * visibleCount,
        (currentGroup + 1) * visibleCount
    );

    const handlePrev = () => {
        if (currentGroup > 0) {
            setCurrentGroup(prev => prev - 1);
            setHoveredIndex(0); // 切换组时，将第一个卡片设置为悬停状态
        }
    };

    const handleNext = () => {
        if (currentGroup < totalGroups - 1) {
            setCurrentGroup(prev => prev + 1);
            setHoveredIndex(0); // 切换组时，将第一个卡片设置为悬停状态
        }
    };

    // 当可见卡片数量变化时，重置当前组
    React.useEffect(() => {
        setCurrentGroup(0);
        setHoveredIndex(0);
    }, [visibleCount]);

    return (
        <>
            <div className="flex flex-row items-center justify-center">
                <NavigationButton
                    direction="prev"
                    disabled={currentGroup === 0}
                    onClick={handlePrev}
                    className="-mr-8 z-10"
                />
                <div
                    className="scrollbar-hidden overflow-x-hidden"
                    aria-live="polite"
                    ref={containerRef}
                >
                    <div
                        className="flex flex-row items-center justify-center gap-4"
                        style={{
                            width: `${visibleCount * 256}px`, // 每个卡片宽度(160px) + 间距(16px) * 2
                            transition: 'width 0.5s ease-in-out'
                        }}
                    >
                        {currentBooks.map((book, index) => (
                            <BookCard
                                key={book.id}
                                title={book.title}
                                imageUrl={book.imageUrl}
                                backgroundColor={book.backgroundColor}
                                hasAudio={book.hasAudio}
                                audioUrl={book.audioUrl}
                                audioDuration={book.audioDuration}
                                isHovered={index === hoveredIndex}
                                onHover={() => setHoveredIndex(index)}
                            />
                        ))}
                    </div>
                </div>
                <NavigationButton
                    direction="next"
                    disabled={currentGroup === totalGroups - 1}
                    onClick={handleNext}
                    className="-ml-8 z-10"
                />
            </div>
            <div className="flex justify-center px-4">
                <a
                    href="/en/onboarding/matrix"
                    className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-white transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-green hover:bg-green-2 text-midnight s:max-w-74 w-full rounded-lg"
                >
                    Get started
                </a>
            </div>
        </>
    );
}

export default ScrollListening;