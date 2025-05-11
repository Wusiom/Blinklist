import * as React from 'react';

const WhoShouldReadSection: React.FC = () => {
    return (
        <section id="who-should-read-section" data-toc="" className="flex flex-col w-full mb-12 flex w-full max-w-[80rem] mx-auto m:px-12 px-4">
            <h2 className="font-bold text-h35 text-midnight mb-4 m:w-2/3">
                Who should read <span className="font-normal italic">The 5 AM Club</span>?
            </h2>
            <div className="text-dark-grey text-p1 pl-2 mb-4 m:w-2/3">
                <ul>
                    <li>
                        <div>Those who feel they could try and get more out of the day</div>
                    </li>
                    <li>
                        <div>People who want to achieve great things in life</div>
                    </li>
                    <li>
                        <div>Anyone in need of an energizing and positive morning routine</div>
                    </li>
                </ul>
            </div>
            <button data-test-id="openAmazonLink" className="flex cursor-pointer text-blue hover:text-blue-1">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 w-6 h-6">
                    <path d="M22.5 16.14L23.92 6l-18.8-.81L4.92 4A4.43 4.43 0 002.51.8L.58 0 0 1.39l1.88.78a2.88 2.88 0 011.56 2.11l2.5 14.86a2.54 2.54 0 103.57 3h5.93a2.54 2.54 0 100-1.5H9.52a2.53 2.53 0 00-2.1-1.79l-.31-1.83 15.39-.88zm-4.65 4.21a1 1 0 11-.1 1.997 1 1 0 01.1-1.997zm4.36-12.92l-1 7.29-14.33.84-1.51-8.85 16.84.72zM8.14 21.4a1 1 0 11-2 0 1 1 0 012 0z" fill="currentColor" />
                </svg>
                <span className="font-bold">Buy on Amazon</span>
            </button>
        </section>
    );
};

export default WhoShouldReadSection; 