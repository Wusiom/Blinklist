import * as React from 'react';
import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid';

interface BookCardProps {
    title: string;
    imageUrl: string;
    backgroundColor: string;
    hasAudio?: boolean;
    audioUrl?: string;
    audioDuration?: string;
    isHovered: boolean;
    onHover: () => void;
}

const BookCard: React.FC<BookCardProps> = ({
    title,
    imageUrl,
    backgroundColor,
    hasAudio,
    audioUrl,
    audioDuration,
    isHovered,
    onHover
}) => {
    const [isPlaying, setIsPlaying] = React.useState(false);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div 
            tabIndex={0} 
            className={`group flex cursor-pointer flex-col justify-center h-[22.5rem] outline-hidden transition-all duration-500 ease-in-out ${isHovered ? 'w-64' : 'w-40'} visible`} 
            role="button" 
            aria-label={`Book card: ${title}`}
            onMouseEnter={onHover}
        >
            <button className={`w-full rounded-t-2xl px-2 py-6 text-left transition-all duration-500 ease-in-out ${isHovered ? 'rounded-b-none' : 'rounded-b-2xl'}`} aria-label={`View ${title}`} style={{ backgroundColor }}>
                <picture>
                    <source srcSet={`${imageUrl}?width=232&height=232&format=webp&quality=&dpr=1 1x,${imageUrl}?width=232&height=232&format=webp&quality=&dpr=2 2x,${imageUrl}?width=232&height=232&format=webp&quality=&dpr=3 3x`} width="232" height="232" />
                    <img fetchPriority="auto" alt={title} src={imageUrl} loading="lazy" decoding="async" width="232" height="232" />
                </picture>
            </button>
            {isHovered && (
                <div className="bg-midnight m:p-4 rounded-t-none rounded-b-2xl p-2">
                    <figure className="flex flex-row items-center gap-4 text-white w-full">
                        <audio src={audioUrl}>
                            <track kind="captions" />
                        </audio>
                        <button 
                            data-test-id="playPauseButton" 
                            aria-label={isPlaying ? "Pause" : "Play"} 
                            className="hover:text-green text-white"
                            onClick={handlePlayPause}
                        >
                            {isPlaying ? (
                                <PauseIcon className="h-12 w-12" />
                            ) : (
                                <PlayIcon className="h-12 w-12" />
                            )}
                        </button>
                        <div className="flex min-w-0 grow flex-col">
                            <span className="truncate text-sm font-medium text-white">Listen</span>
                            <div className="flex flex-row items-center gap-4">
                                <button data-test-id="advanceAudio" data-test-progress="0" className="w-full cursor-pointer border-0 bg-transparent p-0 py-2" aria-label="Seek audio, current progress: 0%" type="button">
                                    <div className="relative h-1 w-full rounded-full bg-lightest-grey">
                                        <div className="pointer-events-none absolute h-1 rounded-l-full bg-green" style={{ width: '0%' }} />
                                    </div>
                                </button>
                                <span>{audioDuration}</span>
                            </div>
                        </div>
                    </figure>
                </div>
            )}
        </div>
    );
};

export default BookCard; 