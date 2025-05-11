import * as React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

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

export default StarRating;