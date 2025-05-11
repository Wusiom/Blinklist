import * as React from 'react';
import SignUpForm from './components/SignUpForm';
import ChapterList from './components/ChapterList';
import ChapterContent from './components/ChapterContent';

const Article: React.FC = () => {
    const [activeChapter, setActiveChapter] = React.useState<number>(-1);

    const handleChapterClick = (index: number) => {
        setActiveChapter(index);
    };

    return (
        <div data-test-id="chapter-preview-section" id="chapters-preview" data-toc className="relative mb-0 lg:mb-12 py-12 l:py-16 bg-light-pale-mint-grey">
            <section className="flex-col flex w-full max-w-[80rem] mx-auto m:px-12 px-4">
                <div className="w-full px-2 lg:px-12 bg-white pt-12">
                    <h2 className="text-midnight mb-4 max-w-3xl font-bold text-h3 m:text-h2">
                        The 5 AM Club
                        <span className="font-normal">
                            <br />
                            <span className="bg-summer-yellow-6">Summary of 6 key ideas</span>
                        </span>
                    </h2>
                    <div className="flex items-center text-dark-grey text-caption lg:text-p1">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-1">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 0h14.5v9.767c3.131.22 5.75 2.487 5.75 5.7V17.5h.26c1.925 0 3.49 1.457 3.49 3.25S22.435 24 20.51 24H17.5v-6.5h1.25v-2.034c0-2.384-2.051-4.216-4.75-4.216s-4.75 1.832-4.75 4.216V17.5h1.25V24H7.49C5.566 24 4 22.543 4 20.75c0-.644.202-1.245.55-1.75H0V0zm7.75 17.5v-2.034c0-3.04 2.345-5.233 5.25-5.646V1.5H1.5v16h6.25zM5.5 20.75c0-.866.79-1.75 1.99-1.75H9v3.5H7.49c-1.2 0-1.99-.884-1.99-1.75zM11.25 6h-8V4.5h8V6zm-8 3h8V7.5h-8V9zm4 3h-4v-1.5h4V12zm13.26 10.5H19V19h1.51c1.2 0 1.99.884 1.99 1.75s-.79 1.75-1.99 1.75z" fill="currentColor" />
                        </svg>
                        Audio &amp; text in the Blinkist app
                    </div>
                </div>
                <div className="grid bg-white pt-12 m:px-8 lg:grid-cols-3 lg:gap-x-16 px-2 lg:px-12 lg:rounded">
                    <div className="text-h4 font-bold mb-12 text-midnight lg:col-span-3">
                        <span>Introduction</span>
                    </div>
                    <ChapterContent activeChapter={activeChapter} />
                    <SignUpForm />
                    <ChapterList onChapterClick={handleChapterClick} />
                </div>
            </section>
        </div>
    );
};

export default Article;

