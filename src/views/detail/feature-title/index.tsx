import * as React from 'react';

interface Book {
    title: string;
    url: string;
}

interface BookListProps {
    books: Book[];
}

function BookList({ books }: BookListProps) {
    return (
        <div className="w-64 l:w-full mr-8 ml-4 m:mr-12 m:ml-0 l:mr-0 l:pr-12 last:mr-4 last:m:mr-0 flex-shrink-0 l:flex-shrink">
            <ul>
                {books.map((book, index) => (
                    <li key={index} className="mb-4 text-dark-grey font-normal text-sm hover:text-blue">
                        <a href={book.url}>{book.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const bookLists = [
    [
        { title: '1Q84', url: '/en/books/1q84-en' },
        { title: 'A Psalm for the Wild-Built', url: '/en/books/a-psalm-for-the-wild-built-en' },
        { title: 'American Prison', url: '/en/books/american-prison-en' },
        { title: 'An Attempt To Repair America\'s Broken Credit System', url: '/en/books/an-attempt-to-repair-americas-broken-credit-system-en' },
        { title: 'Ask for More', url: '/en/books/ask-for-more-en' },
        { title: 'Beyond Neutrality', url: '/en/books/beyond-neutrality-en' },
        { title: 'Blood in the Water', url: '/en/books/blood-in-the-water-en' },
        { title: 'Buried Beneath the Boarding House', url: '/en/books/buried-beneath-the-boarding-house-en' },
        { title: 'Chokehold', url: '/en/books/chokehold-en' },
        { title: 'Divided by Faith', url: '/en/books/divided-by-faith-en' }
    ],
    [
        { title: 'Every Landlord\'s Tax Deduction Guide', url: '/en/books/every-landlords-tax-deduction-guide-en' },
        { title: 'Generous Justice', url: '/en/books/generous-justice-en' },
        { title: 'I\'ve Got Your Number', url: '/en/books/ive-got-your-number-en' },
        { title: 'Innocent Victims', url: '/en/books/innocent-victims-en' },
        { title: 'Kiss, Bow, Or Shake Hands', url: '/en/books/kiss-bow-or-shake-hands-en' },
        { title: 'Mountains Beyond Mountains', url: '/en/books/mountains-beyond-mountains-en' },
        { title: 'Refuse to Choose!', url: '/en/books/refuse-to-choose-en' },
        { title: 'Shantaram', url: '/en/books/shantaram-en' },
        { title: 'Small Great Things', url: '/en/books/small-great-things-en' },
        { title: 'Success as a Mediator for Dummies', url: '/en/books/success-as-a-mediator-for-dummies-en' }
    ],
    [
        { title: 'Taken for Granted', url: '/en/books/taken-for-granted-en' },
        { title: 'Taxes Made Simple', url: '/en/books/taxes-made-simple-en' },
        { title: 'The Buffalo Creek Disaster', url: '/en/books/the-buffalo-creek-disaster-en' },
        { title: 'The LSAT Trainer', url: '/en/books/the-lsat-trainer-en' },
        { title: 'The Mediation Process', url: '/en/books/the-mediation-process-en' },
        { title: 'The Partner', url: '/en/books/the-partner-en' },
        { title: 'The Return of Martin Guerre', url: '/en/books/the-return-of-martin-guerre-en' },
        { title: 'The Traveler\'s Gift', url: '/en/books/the-travelers-gift-en' },
        { title: 'The War on Cops', url: '/en/books/the-war-on-cops-en' },
        { title: 'Until You Are Dead', url: '/en/books/until-you-are-dead-en' }
    ]
];

function FeatureTitle() {
    return (
        <div className="w-full flex-col mb-12">
            <section className="flex w-full max-w-[80rem] mx-auto m:px-12 px-4">
                <h2 className="mb-6 text-midnight font-bold text-h35">
                    Featured Titles
                </h2>
            </section>
            <section className="flex-col gap-5 flex w-full max-w-[80rem] mx-auto m:px-12">
                <div className="w-full overflow-hidden">
                    <div className="pb-8 -mb-8 overflow-x-auto overflow-y-hidden flex">
                        {bookLists.map((books, index) => (
                            <BookList key={index} books={books} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FeatureTitle;
