import * as React from 'react';
import NavSection from './NavSection';
import AppDownloadSection from './AppDownloadSection';
import FooterBottom from './FooterBottom';

interface FooterProps {
    className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
    const popularTitles = [
        { href: "https://www.blinkist.com/en/books/atomic-habits-en", text: "Atomic Habits" },
        { href: "https://www.blinkist.com/en/books/the-5-am-club-en", text: "The 5 AM Club" },
        { href: "https://www.blinkist.com/en/books/the-7-habits-of-highly-effective-people-en", text: "The 7 Habits of Highly Effective People" },
        { href: "https://www.blinkist.com/en/books/rich-dad-poor-dad-en", text: "Rich Dad, Poor Dad" },
        { href: "https://www.blinkist.com/en/books/12-rules-for-life-en", text: "12 Rules For Life" },
        { href: "https://www.blinkist.com/en/books/thinking-fast-and-slow-en", text: "Thinking, Fast and Slow" },
        { href: "https://www.blinkist.com/en/books/zero-to-one-en", text: "Zero to One" },
        { href: "https://www.blinkist.com/en/books/13-things-mentally-strong-people-dont-do-en", text: "13 Things Mentally Strong People Don't Do" },
        { href: "https://www.blinkist.com/en/books/think-and-grow-rich-en", text: "Think and Grow Rich" },
        { href: "https://www.blinkist.com/en/books/the-subtle-art-of-not-giving-a-f-star-ck-en", text: "The Subtle Art of Not Giving a F*ck" }
    ];

    const popularCategories = [
        { href: "https://www.blinkist.com/en/content/categories/personal-growth-and-self-improvement-en", text: "Personal Development" },
        { href: "https://www.blinkist.com/en/content/categories/psychology-en", text: "Psychology" },
        { href: "https://www.blinkist.com/en/content/categories/productivity-and-time-management-en", text: "Productivity" },
        { href: "https://www.blinkist.com/en/content/categories/career-and-success-en", text: "Career & Success" },
        { href: "https://www.blinkist.com/en/content/categories/management-and-leadership-en", text: "Management & Leadership" },
        { href: "https://www.blinkist.com/en/content/categories/science-en", text: "Science" },
        { href: "https://www.blinkist.com/en/content/categories/motivation-and-inspiration-en", text: "Motivation & Inspiration" },
        { href: "https://www.blinkist.com/en/content/categories/mindfulness-and-happiness-en", text: "Mindfulness & Happiness" },
        { href: "https://www.blinkist.com/en/content/categories/money-and-investments-en", text: "Money & Investments" },
        { href: "https://www.blinkist.com/en/content/categories/communication-and-social-skills-en", text: "Communication Skills" }
    ];

    const popularTopics = [
        { href: "https://www.blinkist.com/en/content/topics/christianity-en", text: "Best Christianity Books" },
        { href: "https://www.blinkist.com/en/content/topics/memoirs-en", text: "Best Memoirs Books" },
        { href: "https://www.blinkist.com/en/content/topics/love-en", text: "Best Love Books" },
        { href: "https://www.blinkist.com/en/content/topics/self-help-en", text: "Best Self-Help Books" },
        { href: "https://www.blinkist.com/en/content/topics/leadership-en", text: "Best Leadership Books" },
        { href: "https://www.blinkist.com/en/content/topics/spirituality-en", text: "Best Spirituality Books" },
        { href: "https://www.blinkist.com/en/content/topics/autobiographies-en", text: "Best Autobiographies Books" },
        { href: "https://www.blinkist.com/en/content/topics/biographies-en", text: "Best Biographies Books" },
        { href: "https://www.blinkist.com/en/content/topics/inspiration-en", text: "Best Inspiration Books" },
        { href: "https://www.blinkist.com/en/content/topics/persuasion-en", text: "Best Persuasion Books" }
    ];

    const trendingTopics = [
        { href: "https://www.blinkist.com/en/content/topics/natural-sciences-en", text: "Natural Sciences Books" },
        { href: "https://www.blinkist.com/en/content/topics/writing-en", text: "Writing Books" },
        { href: "https://www.blinkist.com/en/content/topics/meditation-en", text: "Meditation Books" },
        { href: "https://www.blinkist.com/en/content/topics/mathematics-en", text: "Mathematics Books" },
        { href: "https://www.blinkist.com/en/content/topics/stoicism-en", text: "Stoicism Books" },
        { href: "https://www.blinkist.com/en/content/topics/teenager-en", text: "Education & Upbringing Books" },
        { href: "https://www.blinkist.com/en/content/topics/sports-en", text: "Sports Books" },
        { href: "https://www.blinkist.com/en/content/topics/sex-en", text: "Sex Books" },
        { href: "https://www.blinkist.com/en/content/topics/wars-en", text: "Wars Books" },
        { href: "https://www.blinkist.com/en/content/topics/marketing-en", text: "Marketing Books" }
    ];

    const featuredTitles = [
        { href: "https://www.blinkist.com/en/books/a-court-of-thorns-and-roses-en", text: "A Court of Thorns and Roses" },
        { href: "https://www.blinkist.com/en/books/just-mercy-en", text: "Just Mercy" },
        { href: "https://www.blinkist.com/en/books/tuesdays-with-morrie-en", text: "Tuesdays with Morrie" },
        { href: "https://www.blinkist.com/en/books/into-the-wild-en", text: "Into the Wild" },
        { href: "https://www.blinkist.com/en/books/the-devil-in-the-white-city-en", text: "The Devil in the White City" },
        { href: "https://www.blinkist.com/en/books/walden-en", text: "Walden" },
        { href: "https://www.blinkist.com/en/books/the-souls-of-black-folk-en", text: "The Souls of Black Folk" },
        { href: "https://www.blinkist.com/en/books/david-and-goliath-en", text: "David and Goliath" },
        { href: "https://www.blinkist.com/en/books/the-myth-of-sisyphus-en", text: "The Myth of Sisyphus" },
        { href: "https://www.blinkist.com/en/books/genesis-en", text: "Genesis" }
    ];

    const featuredTopics = [
        { href: "https://www.blinkist.com/en/content/topics/fantasy-romance-en", text: "Fantasy Romance Books" },
        { href: "https://www.blinkist.com/en/content/topics/survival-en", text: "Survival Books" },
        { href: "https://www.blinkist.com/en/content/topics/drama-en", text: "Drama Books" },
        { href: "https://www.blinkist.com/en/content/topics/civil-war-en", text: "Civil War Books" },
        { href: "https://www.blinkist.com/en/content/topics/mystery-romance-en", text: "Mystery Romance Books" },
        { href: "https://www.blinkist.com/en/content/topics/us-history-en", text: "US History Books" },
        { href: "https://www.blinkist.com/en/content/topics/sociology-en", text: "Sociology Books" },
        { href: "https://www.blinkist.com/en/content/topics/self-esteem-en", text: "Self-Esteem Books" },
        { href: "https://www.blinkist.com/en/content/topics/existentialism-en", text: "Existentialism Books" },
        { href: "https://www.blinkist.com/en/content/topics/bipolar-en", text: "Bipolar Books" }
    ];

    return (
        <footer className={`mt-20 bg-pale-mint-grey m:py-16 w-full py-12 ${className || ''}`}>
            <section className="m:px-12 mx-auto flex max-w-7xl flex-col px-4 py-4 gap-6">
                <h2 className="text-content-primary font-bold text-h35 m:text-h35 text-left">Discover the Blinkist catalogue</h2>
                <div className="w-full overflow-hidden">
                    <div className="m:gap-16 l:gap-32 -mb-8 flex gap-8 overflow-x-auto overflow-y-hidden pb-8">
                        <NavSection title="Popular titles" links={popularTitles} />
                        <NavSection title="Popular categories" links={popularCategories} />
                        <NavSection title="Popular topics" links={popularTopics} />
                    </div>
                </div>
                <div className="w-full overflow-hidden">
                    <div className="m:gap-16 l:gap-32 -mb-8 flex gap-8 overflow-x-auto overflow-y-hidden pb-8">
                        <NavSection title="Trending topics" links={trendingTopics} />
                        <NavSection title="Featured titles" links={featuredTitles} />
                        <NavSection title="Featured topics" links={featuredTopics} />
                    </div>
                </div>
                <div data-orientation="horizontal" role="none" className="bg-interface/border shrink-0 h-[1px] w-full"></div>
            </section>
            <section className="m:px-12 mx-auto flex max-w-7xl flex-col px-4 py-4 m:flex-row justify-between gap-6">
                <AppDownloadSection />
                <div className="m:w-3/6 m:flex-row flex flex-col flex-wrap justify-between gap-6">
                    <span className="flex flex-col gap-6">
                        <div data-orientation="horizontal" role="none" className="bg-interface/border shrink-0 h-[1px] w-full m:hidden"></div>
                        <div>
                            <h5 className="text-h6 text-content-primary m:text-h5 font-bold m:mb-1 leading-9">Editorial</h5>
                            <ul>
                                <li><a target="_blank" href="/magazine/posts/nonfiction-book-list-blinkist" className="text-dark-grey hover:text-blue block text-sm leading-9 font-normal">Book lists</a></li>
                            </ul>
                        </div>
                    </span>
                    <span className="flex flex-col gap-6">
                        <div data-orientation="horizontal" role="none" className="bg-interface/border shrink-0 h-[1px] w-full m:hidden"></div>
                        <div>
                            <h5 className="text-h6 text-content-primary m:text-h5 font-bold m:mb-1 leading-9">Useful links</h5>
                            <ul>
                                <li><a target="_blank" href="/en/pricing" className="text-dark-grey hover:text-blue block text-sm leading-9 font-normal">Pricing</a></li>
                                <li><a target="_blank" href="/en/content/business?utm_campaign=footer&utm_medium=link&utm_source=homepage" className="text-dark-grey hover:text-blue block text-sm leading-9 font-normal">Blinkist Business</a></li>
                                <li><a target="_blank" href="/en/nc/gift_cards/new" className="text-dark-grey hover:text-blue block text-sm leading-9 font-normal">Gift Cards</a></li>
                                <li><a target="_blank" href="https://support.blinkist.com/en" className="text-dark-grey hover:text-blue block text-sm leading-9 font-normal">Contact & Help</a></li>
                                <li><a target="_blank" href="/en/content/cancellation" className="text-dark-grey hover:text-blue block text-sm leading-9 font-normal">Cancel Subscription</a></li>
                            </ul>
                        </div>
                    </span>
                    <span className="flex flex-col gap-6">
                        <div data-orientation="horizontal" role="none" className="bg-interface/border shrink-0 h-[1px] w-full m:hidden"></div>
                        <div>
                            <h5 className="text-h6 text-content-primary m:text-h5 font-bold m:mb-1 leading-9">Company</h5>
                            <ul>
                                <li><a target="_blank" href="/en/about" className="text-dark-grey hover:text-blue block text-sm leading-9 font-normal">About</a></li>
                                <li><a target="_blank" href="/en/jobs" className="text-dark-grey hover:text-blue block text-sm leading-9 font-normal">Careers</a></li>
                                <li><a target="_blank" href="/en/affiliates" className="text-dark-grey hover:text-blue block text-sm leading-9 font-normal">Partners</a></li>
                                <li><a target="_blank" href="https://static.blinkist.com/documents/Blinkist_CodeofConduct.pdf" className="text-dark-grey hover:text-blue block text-sm leading-9 font-normal">Code of Conduct</a></li>
                                <li><a target="_blank" href="https://press.blinkist.com/" className="text-dark-grey hover:text-blue block text-sm leading-9 font-normal">Press Room</a></li>
                            </ul>
                        </div>
                    </span>
                </div>
            </section>
            <FooterBottom />
        </footer>
    );
};

export default Footer;
