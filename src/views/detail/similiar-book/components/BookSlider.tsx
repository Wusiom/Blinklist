import * as React from 'react';
import { BookSliderProps } from '../types';

export const BookSlider: React.FC<BookSliderProps> = ({ children, onScroll, scrollRef }) => (
    <div 
        ref={scrollRef}
        onScroll={onScroll}
        className="pb-8 -mb-8 relative overflow-x-auto flex flex-row gap-8 snap-x snap-mandatory scroll-px-4 m:scroll-px-0 mx-4 m:mx-2 scrollbar-hide"
    >
        {children}
    </div>
); 