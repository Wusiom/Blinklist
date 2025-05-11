import * as React from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

interface BreadcrumbProps {
  category: string;
  title: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ category, title }) => {
  return (
    <div className="text-caption mb-6">
      <div className="flex m:hidden items-center">
        <ChevronUpIcon className="w-2.5 h-2.5 mr-1.5 rotate-90" />
        <a data-test-id="b-link" href={`/en/content/categories/${category}`} className="cursor-pointer text-midnight">
          {category}
        </a>
      </div>
      <div className="hidden m:flex text-blue">
        <div className="flex items-center">
          <a data-test-id="b-link" href="/en/content/categories" className="cursor-pointer text-blue hover:text-blue-1">
            Categories
          </a>
        </div>
        <div className="flex items-center">
          <ChevronDownIcon className="w-2.5 h-2.5 mx-1.5 -rotate-90" />
          <a data-test-id="b-link" href={`/en/content/categories/${category}`} className="cursor-pointer text-blue hover:text-blue-1">
            {category}
          </a>
        </div>
        <div className="flex items-center">
          <ChevronDownIcon className="w-2.5 h-2.5 mx-1.5 -rotate-90" />
          <div className="text-blue-1">{title} summary</div>
        </div>
      </div>
    </div>
  );
}; 