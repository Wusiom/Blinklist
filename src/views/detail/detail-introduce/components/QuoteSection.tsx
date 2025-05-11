import * as React from 'react';

const QuoteSection: React.FC = () => {
    return (
        <section id="book-quotes" data-toc="" className="flex flex-col mb-12 flex w-full max-w-[80rem] mx-auto m:px-12 px-4">
            <h2 className="font-bold text-h35 text-midnight mb-4 max-w-2xl m:text-center m:mx-auto">
                Best quote from <span className="font-normal italic">The 5 AM Club</span>
            </h2>
            <div className="pt-8 m:py-8 max-w-4xl mx-auto">
                <div className="rounded-2xl px-4 m:px-6 py-8 m:mx-44 relative" style={{ backgroundColor: '#feceb4' }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-midnight absolute -left-0.5 w-18 -top-10 m:w-36 m:-top-12 m:-left-44">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.005 4.907c-3.707 1.027-6.12 3.173-6.72 6.907-.163 1.016.065.249.755-.267 2.254-1.683 6.686-1.087 7.3 2.757 1.238 6.807-7.29 7.985-9.814 4.226A6.912 6.912 0 01.41 15.516c-.608-4.871 1.894-9.21 6.288-11.248.813-.377 1.67-.672 2.592-.889.462-.093.797.158.952.582.131.362.176.761-.237.946zm12.217 0c-3.707 1.027-6.12 3.173-6.72 6.907-.163 1.016.066.249.756-.267 2.254-1.683 6.685-1.087 7.3 2.757 1.238 6.807-7.29 7.985-9.814 4.226a6.913 6.913 0 01-1.116-3.014c-.608-4.871 1.893-9.21 6.288-11.248.813-.377 1.67-.672 2.592-.889.462-.093.797.158.952.582.13.362.175.761-.238.946z" fill="#03314B" />
                    </svg>
                    <div className="m:flex m:justify-between">
                        <div className="m:flex m:flex-col">
                            <div className="font-tisa-pro text-midnight font-semibold text-xl m:text-h3">
                                <em>
                                    <p>
                                        <em>5am is the time of least distraction, highest human glory and greatest peace.</em>
                                    </p>
                                </em>
                            </div>
                            <div className="font-medium text-base uppercase text-dark-grey text-caption mt-4">
                                —Robin Sharma
                            </div>
                        </div>
                        <img 
                            src="https://images.blinkist.io/images/books/5c43b2fa6cee07000701bf7a/1_1/470.jpg" 
                            alt="example alt text" 
                            loading="lazy" 
                            className="object-contain w-20 m:w-28 h-20 m:h-28 mt-4 m:mt-0 m:ml-4"
                        />
                        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-8 rotate-180 text-dark-grey opacity-50 absolute right-4 bottom-8 m:w-36 m:text-midnight m:opacity-100 m:-bottom-12 m:-right-44">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.005 4.907c-3.707 1.027-6.12 3.173-6.72 6.907-.163 1.016.065.249.755-.267 2.254-1.683 6.686-1.087 7.3 2.757 1.238 6.807-7.29 7.985-9.814 4.226A6.912 6.912 0 01.41 15.516c-.608-4.871 1.894-9.21 6.288-11.248.813-.377 1.67-.672 2.592-.889.462-.093.797.158.952.582.131.362.176.761-.237.946zm12.217 0c-3.707 1.027-6.12 3.173-6.72 6.907-.163 1.016.066.249.756-.267 2.254-1.683 6.685-1.087 7.3 2.757 1.238 6.807-7.29 7.985-9.814 4.226a6.913 6.913 0 01-1.116-3.014c-.608-4.871 1.893-9.21 6.288-11.248.813-.377 1.67-.672 2.592-.889.462-.093.797.158.952.582.13.362.175.761-.238.946z" fill="#03314B" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuoteSection; 