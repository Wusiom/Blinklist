import * as React from 'react';
import { ShareIcon } from '@heroicons/react/24/outline';
import { Breadcrumb } from './components/Breadcrumb';
import { AudioPlayer } from './components/AudioPlayer';
import { BookInfo } from './components/BookInfo';
import { Topics } from './components/Topics';
import { TableOfContents } from './components/TableOfContents';

interface BookDetails {
  image: string;
  id: string;
  kind: string;
  slug: string;
  title: string;
  subtitle: string;
  subtitlehtmlsafe: string;
  aboutthebook: string;
  abouttheauthor: string;
  buyonamazonurl: string;
  author: string;
  truncatedauthor: string;
  sourceauthor: string;
  url: string;
  browseurl: string;
  previewurl: string;
  readurl: string;
  playurl: string;
  minutestoread: string;
  publishedat: string;
  isaudio: boolean;
  audiourl: string;
  chapterslength: number;
  firstquote: string;
  hasaudio: boolean;
  language: string;
  isfree: boolean;
  category: any;
  colors: any;
  categories: any[];
  whoshouldread: string;
  sampleintro: any;
  sample: any;
  bundle_info: any[];
  discoverable: boolean;
  briefsummary: string;
  reviewtext: string;
  topics: any[];
  bundleinfo: any[];
  faqs: any[];
  creators: any;
  summary: string;
}

const BookIntroduce: React.FC = () => {
  const bookData = {
    title: 'The 5 AM Club',
    author: 'Robin Sharma',
    subtitle: 'Own Your Morning. Elevate Your Life.',
    rating: 4.5,
    ratingCount: 11470,
    readTime: '22 mins',
    summary: 'The 5 AM Club by Robin Sharma is a self-help book that highlights the importance of waking up early to increase productivity and creativity. The author provides a framework for creating a morning routine that promotes personal growth and success.',
    category: 'productivity-and-time-management',
    topics: [
      { id: '1', name: 'Success', slug: 'success-en' },
      { id: '2', name: 'Routines & Habits', slug: 'routines-and-habits-en' },
      { id: '3', name: 'Leadership', slug: 'leadership-en' }
    ]
  };

  return (
    <section className="flex flex-col pt-6 l:pt-16 relative w-full max-w-[80rem] mx-auto m:px-12 px-4">
      <div className="flex justify-between">
        <Breadcrumb category={bookData.category} title={bookData.title} />
        <div className="contents">
          <button aria-label="Share with friends" className="self-start">
            <ShareIcon className="w-6 h-6 text-dark-grey cursor-pointer" />
          </button>
        </div>
      </div>

      <div className="flex flex-col m:flex-row m:gap-16 pb-12 m:pb-16">
        <div className="w-full h-full m:w-74 shrink-0 m:order-1 rounded-md" style={{ backgroundColor: '#feceb4' }}>
          <img 
            src="https://images.blinkist.io/images/books/5c43b2fa6cee07000701bf7a/1_1/470.jpg" 
            alt="The 5 AM Club Book Summary - The 5 AM Club Book explained in key points" 
            loading="eager" 
            className="object-contain w-[11.5rem] m:w-[16.5rem] aspect-square mx-auto m:my-8" 
          />
          <AudioPlayer />
        </div>

        <div className="grow flex flex-col w-full">
          <BookInfo 
            title={bookData.title}
            author={bookData.author}
            subtitle={bookData.subtitle}
            rating={bookData.rating}
            ratingCount={bookData.ratingCount}
            readTime={bookData.readTime}
            summary={bookData.summary}
          />

          <Topics topics={bookData.topics} />
          <TableOfContents title={bookData.title} />
        </div>
      </div>
    </section>
  );
};

export default BookIntroduce;