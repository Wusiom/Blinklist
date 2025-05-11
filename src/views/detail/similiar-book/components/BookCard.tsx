import * as React from 'react';
import { ClockIcon, StarIcon } from '@heroicons/react/24/outline';
import { BookCardProps } from '../types';

export const BookCard: React.FC<BookCardProps> = ({
    title,
    author,
    description,
    imageUrl,
    readingTime,
    rating,
    href
}) => (
    <div className="flex-shrink-0 snap-start">
        <a 
            href={href} 
            aria-label={title} 
            className="flex rounded font-cera-pro flex-shrink-0 w-44 snap-start p-0 flex-col w-44 p-2 box-content l:hover:bg-midnight-4 hover:cursor-pointer bg-midnight"
        >
            <img 
                src={imageUrl} 
                alt={title} 
                loading="lazy" 
                className="object-contain flex-shrink-0 rounded w-44 h-44" 
            />
            <div className="w-full flex flex-col relative mt-2">
                <div className="line-clamp-2 font-bold text-h5 text-white" data-test-id="title" title={title}>
                    {title}
                </div>
                <div data-test-id="subtitle" title={author} className="font-medium text-caption line-clamp-2 mt-1 text-lightest-grey">
                    {author}
                </div>
                <div data-test-id="description" title={description} className="text-caption line-clamp-3 mt-2 text-white">
                    {description}
                </div>
                <div className="text-mid-grey text-caption mt-2">
                    <div className="flex gap-x-2 text-light-grey">
                        <div className="flex gap-x-1 items-center">
                            <div className="rounded p-1 bg-green-8 text-mid-grey">
                                <ClockIcon className="w-4 h-4" />
                            </div>
                            <span>{readingTime}</span>
                        </div>
                        {rating && (
                            <div className="flex items-center gap-x-1">
                                <StarIcon className="w-4 h-4" />
                                {rating}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </a>
    </div>
); 