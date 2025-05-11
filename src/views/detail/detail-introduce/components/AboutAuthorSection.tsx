import * as React from 'react';

const AboutAuthorSection: React.FC = () => {
    return (
        <section id="about-the-author" data-toc="" className="flex flex-col w-full mb-12 max-w-[80rem] mx-auto m:px-12 px-4">
            <h2 className="font-bold text-h35 text-midnight mb-4 m:w-2/3">About the Author</h2>
            <div className="text-dark-grey text-p1 m:w-2/3">
                <p>
                    Robin Sharma is one of the world's top leadership gurus and the best-selling author of <em>The Monk Who Sold His Ferrari</em>. He has helped millions of people to become better leaders, improve their productivity, and lead better lives.
                </p>
            </div>
        </section>
    );
};

export default AboutAuthorSection; 