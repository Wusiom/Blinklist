import * as React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface TableOfContentsProps {
  title: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ title }) => {
  const sections = [
    { id: 'chapters-preview', label: `${title} Summary of 6 key ideas` },
    { id: 'about-the-book-section', label: `What is ${title} about?` },
    { id: 'book-review-section', label: `${title} Review` },
    { id: 'book-quotes', label: `Best quote from ${title}` },
    { id: 'who-should-read-section', label: `Who should read ${title}?` },
    { id: 'about-the-author', label: 'About the Author' },
    { id: 'similar-books', label: `Book summaries like ${title}` },
    { id: 'people-also-like-books', label: 'People also liked these summaries' },
    { id: 'faqs-section', label: `${title} FAQs` },
  ];

  return (
    <details className="mb-8 m:mb-0">
      <summary className="flex items-center text-midnight font-bold text-sm cursor-pointer">
        Table of Contents
        <ChevronDownIcon className="w-6 h-6 p-1.5" />
      </summary>
      <ul>
        {sections.map((section) => (
          <li key={section.id} className="first:mt-4 mb-4 last:mb-0 text-dark-grey font-medium text-sm">
            <a href={`#${section.id}`} className="underline">{section.label}</a>
          </li>
        ))}
      </ul>
    </details>
  );
}; 