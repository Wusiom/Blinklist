import * as React from 'react';

interface Topic {
  id: string;
  name: string;
  slug: string;
}

interface TopicsProps {
  topics: Topic[];
}

export const Topics: React.FC<TopicsProps> = ({ topics }) => {
  return (
    <div className="flex flex-col m:px-0 mb-8">
      <div className="text-midnight mb-2 m:px-0 font-bold text-sm leading-normal">Topics</div>
      <div className="w-full overflow-hidden">
        <div className="pb-8 overflow-x-auto overflow-y-hidden flex flex-row m:flex-wrap l:px-0 gap-x-4 gap-y-2 -mb-2">
          {topics.map((topic) => (
            <a 
              key={topic.id}
              data-test-id={`topic-chip-${topic.slug}`}
              href={`/en/content/topics/${topic.slug}`}
              className="font-cera-pro text-midnight flex w-max items-center py-3 border-2 border-solid rounded last:mr-4 px-4 cursor-pointer m:hover:border-green border-white bg-pale-mint-grey"
            >
              <span className="block whitespace-nowrap">{topic.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}; 