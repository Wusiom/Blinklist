import * as React from 'react';
import { StarIcon, ClockIcon } from '@heroicons/react/24/outline';

interface BookInfoProps {
  title: string;
  author: string;
  subtitle: string;
  rating: number;
  ratingCount: number;
  readTime: string;
  summary: string;
}

export const BookInfo: React.FC<BookInfoProps> = ({
  title,
  author,
  subtitle,
  rating,
  ratingCount,
  readTime,
  summary
}) => {
  return (
    <div className="grow flex flex-col w-full">
      <h1 className="mb-2 m:mb-4 flex flex-col mt-4 m:mt-0 font-bold text-h3 m:text-h2">
        <span>{title}</span>
        <span className="text-mid-grey mb-2 m:mb-6 flex -order-1 font-medium text-base">
          <span>Better than a summary</span>
        </span>
      </h1>

      <div className="flex flex-wrap mb-4 m:mb-6 font-bold text-h5">
        <a 
          href={`/en/content/authors/${author.toLowerCase().replace(/\s+/g, '-')}`}
          data-test-id="b-link" 
          className="flex with-name-separator cursor-pointer text-blue hover:text-blue-1"
        >
          {author}
        </a>
      </div>

      <p className="text-p1 m:text-p0 mb-4 m:mb-6 text-dark-grey">
        {subtitle}
      </p>

      <div className="grid grid-cols-2 gap-x-8 w-fit m:grid mb-4 m:mb-8">
        <div className="flex">
          <div className="mr-2 relative text-summer-yellow">
            <div className="relative" style={{ width: '1.5rem', height: '1.5rem' }}>
              <div className="absolute" style={{ width: '1.5rem', height: '1.5rem', clipPath: 'polygon(50% 0.5%,65.1% 33.3%,99.3% 38.5%,74.5% 63.7%,80.4% 99%,50% 82.5%,19.5% 99%,25.5% 63.7%,0.5% 38.5%,35% 33.3%)' }}>
                <div className="bg-summer-yellow h-6" style={{ width: `${rating * 20}%` }} />
              </div>
              <StarIcon className="absolute w-6 h-6" />
            </div>
          </div>
          <span className="text-caption">{rating} ({ratingCount} ratings)</span>
        </div>
        <div className="flex">
          <ClockIcon className="w-6 h-6 mr-2" />
          <span className="text-caption">{readTime}</span>
        </div>
      </div>

      <button 
        type="button" 
        data-test-id="book-header-cta" 
        className="mb-8 m:mb-12 m:w-74 rounded border-none font-cera-pro font-medium text-base leading-5 text-center items-center justify-center no-underline outline-none disabled:bg-light-grey cursor-pointer disabled:cursor-not-allowed px-4 bg-green text-midnight hover:bg-green-2 hover:text-midnight disabled:text-white py-3"
      >
        Get started
      </button>

      <div className="mb-4 m:mb-8">
        <h2 className="text-midnight text-h5 font-bold m:text-h35 mb-4">Brief summary</h2>
        <div className="text-dark-grey text-base m:text-xl with-styled-ul-list with-styled-ol-list">
          <p>{summary}</p>
        </div>
      </div>
    </div>
  );
}; 