import * as React from 'react';

interface ProgressDotsProps {
    count: number;
    currentIndex: number;
    onDotClick: (index: number) => void;
}

const ProgressDots: React.FC<ProgressDotsProps> = ({
    count,
    currentIndex,
    onDotClick
}) => {
    const progressRefs = React.useRef<(HTMLDivElement | null)[]>([]);

    React.useEffect(() => {
        progressRefs.current.forEach((ref, index) => {
            if (!ref) return;
            
            // 重置所有进度条
            ref.style.width = '0%';
            ref.style.transition = 'none';
            
            // 强制重排以应用重置
            ref.offsetHeight;
            
            // 设置当前进度条
            if (index === currentIndex) {
                ref.style.transition = 'width 5s linear';
                ref.style.width = '100%';

                // 监听进度条动画完成
                const handleTransitionEnd = () => {
                    if (index === currentIndex) {
                        onDotClick((index + 1) % count);
                    }
                };

                ref.addEventListener('transitionend', handleTransitionEnd);
                return () => {
                    ref.removeEventListener('transitionend', handleTransitionEnd);
                };
            }
        });
    }, [currentIndex, count, onDotClick]);

    return (
        <div className="mx-auto flex flex-row justify-center gap-2">
            {[...Array(count)].map((_, index) => (
                <div 
                    key={index}
                    className="bg-light-grey relative h-1 w-24 rounded-full cursor-pointer"
                    onClick={() => onDotClick(index)}
                >
                    <div 
                        ref={(el) => {
                            progressRefs.current[index] = el;
                        }}
                        className="bg-dark-grey absolute h-1 rounded-sm"
                    />
                </div>
            ))}
        </div>
    );
};

export default ProgressDots; 