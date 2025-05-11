import * as React from 'react';

interface AboutBookSectionProps {
    bookTitle: string;
}

const AboutBookSection: React.FC<AboutBookSectionProps> = ({ bookTitle }) => {
    return (
        <section id="about-the-book-section" data-toc="" className="flex flex-col w-full mb-12 max-w-[80rem] mx-auto m:px-12 px-4">
            <h2 className="font-bold text-h35 text-midnight mb-4 m:w-2/3">
                What is <span className="font-normal italic">{bookTitle}</span> about?
            </h2>
            <div className="text-dark-grey text-p1 m:w-2/3">
                <p>
                    <em>{bookTitle}</em> (2018) shows how embracing a revolutionary morning routine can deliver epic results. Through the enchanting story of an entrepreneur, an artist, and their eccentric billionaire mentor, it explains how you can use the first hour of your day to drive personal growth and get the most out of life.
                </p>
            </div>
        </section>
    );
};

export default AboutBookSection; 