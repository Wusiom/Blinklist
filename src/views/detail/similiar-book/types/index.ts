export interface BookCardProps {
    title: string;
    author: string;
    description: string;
    imageUrl: string;
    readingTime: string;
    rating?: string;
    href: string;
}

export interface ScrollButtonProps {
    direction: 'left' | 'right';
    onClick: () => void;
    visible: boolean;
}

export interface BookSliderProps {
    children: React.ReactNode;
    onScroll: () => void;
    scrollRef: React.RefObject<HTMLDivElement>;
} 