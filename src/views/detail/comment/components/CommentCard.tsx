import * as React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

interface CommentCardProps {
    author: string;
    rating: number;
    content: string;
}

const StarRating: React.FC = () => {
    return (
        <div className="relative text-blue inline-block mr-1">
            <div className="relative" style={{ width: '0.75rem', height: '0.75rem' }}>
                <div className="absolute" style={{ width: '0.75rem', height: '0.75rem', clipPath: 'polygon(50% 0.5%,65.1% 33.3%,99.3% 38.5%,74.5% 63.7%,80.4% 99%,50% 82.5%,19.5% 99%,25.5% 63.7%,0.5% 38.5%,35% 33.3%)' }}>
                    <div className="bg-blue h-3" style={{ width: '100.00%' }}></div>
                </div>
                <StarIcon className="absolute w-3 h-3" />
            </div>
        </div>
    );
};

const CommentCard: React.FC<CommentCardProps> = ({ author, rating, content }) => {
    return (
        <div className="bg-background-yellow p-4 rounded grid grid-cols-[min-content_auto] grid-rows-[min-content_auto] gap-y-2 m:gap-x-2 min-w-[256px] mb-8 mr-0">
            <div className="flex flex-col m:flex-row m:items-center col-span-2">
                <div className="flex flex-col align-bottom justify-end mb-2 m:mr-2 m:mb-0 font-medium text-midnight">
                    {author}
                </div>
                <div className="m:items-start flex items-center justify-start">
                    {[...Array(rating)].map((_, index) => (
                        <StarRating key={index} />
                    ))}
                </div>
            </div>
            <p 
                className="text-dark-grey font-normal col-span-2"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
}; 

export default CommentCard;