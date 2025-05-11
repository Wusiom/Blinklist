import * as React from 'react';

const CategorySection: React.FC = () => {
    return (
        <section className="flex flex-col mb-8 m:mb-12 w-full max-w-[80rem] mx-auto m:px-12">
            <h2 className="font-bold text-h35 text-midnight mb-4 px-4 m:px-0">
                Categories with <span className="font-normal italic">The 5 AM Club</span>
            </h2>
            <div className="w-full overflow-hidden">
                <div className="pb-8 -mb-8 overflow-x-auto overflow-y-hidden flex flex-col">
                    <div className="flex flex-row m:flex-wrap px-4 l:px-0 gap-x-4 gap-y-2 mb-4">
                        <a 
                            data-test-id="category-chip-productivity-and-time-management-en" 
                            href="/en/content/categories/productivity-and-time-management-en" 
                            className="font-cera-pro text-midnight flex w-max items-center py-3 border-2 border-solid rounded last:mr-4 px-4 cursor-pointer m:hover:border-green border-white bg-pale-mint-grey"
                        >
                            <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2 text-midnight flex-shrink-0">
                                <clipPath id="a">
                                    <path d="M0 0h24v24H0z" />
                                </clipPath>
                                <g clipPath="url(#a)">
                                    <path d="M22.15 1.5h2V0H.08v1.5h2c.39 5.25 4.81 8.7 6.75 10.2a.45.45 0 010 .72c-1.94 1.5-6.36 5-6.75 10.2H0v1.5h24.12v-1.5h-2c-.34-4.61-3.77-7.85-6.39-9.91a.82.82 0 010-1.3c2.65-2.06 6.08-5.3 6.42-9.91zM9.59 10.36l-.41-.3C8.6 9.59 8 9.08 7.45 8.54h9.34c-.29.28-.58.54-.87.8a13.44 13.44 0 00-3.77 3.35 11.302 11.302 0 00-2.56-2.33zM20.65 1.5A10.19 10.19 0 0118.19 7H6.05a10.08 10.08 0 01-2.47-5.5zM10.06 22.62a7.219 7.219 0 002.06-2.5 7.31 7.31 0 002.05 2.5zm10.59 0h-2.11a5.68 5.68 0 01-5.67-5.68h-1.5a5.69 5.69 0 01-5.68 5.68H3.58c.35-4 3.46-6.9 6.19-9a1.92 1.92 0 00.56-.71 2.68 2.68 0 011 1.89h1.5a3.58 3.58 0 011.19-2c.13.452.4.851.77 1.14 2.41 1.81 5.51 4.7 5.86 8.68z" fill="currentColor" />
                                </g>
                            </svg>
                            <span className="block whitespace-nowrap">Productivity</span>
                        </a>
                        <a 
                            data-test-id="category-chip-career-and-success-en" 
                            href="/en/content/categories/career-and-success-en" 
                            className="font-cera-pro text-midnight flex w-max items-center py-3 border-2 border-solid rounded last:mr-4 px-4 cursor-pointer m:hover:border-green border-white bg-pale-mint-grey"
                        >
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2 text-midnight flex-shrink-0">
                                <path d="M22.3 4.2l-2.8-.4-.4-2.8-3 3c-1.5-.9-3.3-1.5-5.2-1.5C5.4 2.5 1 7 1 12.4c0 5.5 4.4 9.9 9.9 9.9s9.9-4.4 9.9-9.9c0-1.9-.5-3.7-1.5-5.2zm-5.6.9l.4-.4 1.2-1.2.2 1.4 1.4.1-1.2 1.2-.4.4-.1.1-.6-.1-.8-.1-.1-.8-.1-.6zm2.9 7.3c0 4.8-3.9 8.7-8.7 8.7s-8.7-3.9-8.7-8.7 3.9-8.7 8.7-8.7c1.6 0 3.1.4 4.4 1.2l.3 2-.4.4c-1.2-1-2.6-1.5-4.3-1.5a6.7 6.7 0 106.7 6.7c0-1.6-.6-3.1-1.6-4.3l.4-.4 2.1.3c.7 1.2 1.1 2.7 1.1 4.3zm-8.4.5l1.6-1.6c.2.3.3.7.3 1.1 0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2 1-2.2 2.2-2.2c.4 0 .8.1 1.1.3l-1.6 1.6zm1.6-3.3c-.5-.3-1.2-.6-1.9-.6-1.9 0-3.4 1.6-3.4 3.4 0 1.9 1.5 3.4 3.4 3.4s3.4-1.5 3.4-3.4c0-.7-.2-1.4-.6-2L15.2 9c.8.9 1.2 2.1 1.2 3.5 0 3-2.5 5.5-5.5 5.5s-5.5-2.5-5.5-5.5S7.9 7 10.9 7c1.3 0 2.5.5 3.4 1.2z" fill="currentColor" />
                            </svg>
                            <span className="block whitespace-nowrap">Career & Success</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategorySection; 