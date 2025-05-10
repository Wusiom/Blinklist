import * as React from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        question: 'What can Blinkist do for me?',
        answer: 'Blinkist is here to help you learn faster and smarter. It offers summaries from thousands of bestselling non-fiction books to read or listen to in just 15 minutes. Whether you want to acquire new knowledge or fill up your waiting times with insightful information, Blinkist is your perfect learning companion.'
    },
    {
        question: 'How can I use Blinkist?',
        answer: 'You can access Blinkist on most devices. Either download our Blinkist app on your smartphone, available on both iOS and Android devices, or use it on any desktop computer through our website. For on-the-go convenience, listen to our audio versions while commuting, during your workouts, or while doing household chores. You also have the option to read or listen offline by downloading the content. To make your journeys even more enlightening, you can use Blinkist through CarPlay and Android Auto while you\'re driving.'
    },
    {
        question: 'What types of books does Blinkist cover? How many are there?',
        answer: 'There are currently over 7,500 books in the Blinkist library and we constantly add more titles to our collection. From the latest releases to timeless classics, Blinkist\'s library spans a diverse range of topics, including but not limited to business, personal development, parenting, science, philosophy, psychology, politics, and culture. Our goal is to provide key insights from globally acclaimed and impactful non-fiction books. Whether you want to dive deep into a specific subject or explore various topics, you\'ll find the right content that suits your needs and interests.'
    },
    {
        question: 'What\'s included in a plan?',
        answer: 'With the Basic plan, you can only access one pre-selected book per day. The Premium plan gives you unlimited access to our entire library of 7,500+ books, podcasts, and expert-led guides. The Premium plan enables you to read or listen offline, save and organize your content, and get personalized recommendations to suit your interests. On top of that, all Premium members get a second Premium account for free to share with someone of their choice!'
    },
    {
        question: 'What makes Blinkist book summaries the best on the market?',
        answer: 'Blinkist book summaries stand out for their commitment to quality. We work with experts, writers, and editors who collaborate with the original authors whenever possible to ensure that the summaries contain the essential insights and preserve the spirit of the entire book. Besides, Blinkist provides an audio version for each summary, giving you the flexibility to learn however you want.'
    },
    {
        question: 'Can I cancel during my trial or subscription?',
        answer: 'If you cancel your trial at any time before it ends, you won\'t be charged. Although you won\'t have full access to the complete Blinkist library, you\'ll still be able to learn and grow with 1 pre-selected book a day.'
    },
    {
        question: 'Have more questions? Contact our Customer Support!',
        answer: 'You can reach them via support@blinkist.com'
    }
];

function QuestionPart() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="text-midnight m:mx-auto m:max-w-2xl w-full">
            <h2 className="text-h3 m:mb-4 m:text-h2 mb-8 flex flex-col text-center font-bold">
                Do you have any questions?
            </h2>
            {faqItems.map((item, index) => (
                <details 
                    key={index} 
                    className="border-light-grey m:py-8 border-b py-4 w-full" 
                    open={openIndex === index}
                    onClick={(e) => {
                        e.preventDefault();
                        handleToggle(index);
                    }}
                >
                    <summary className="flex cursor-pointer list-none justify-between [&::-webkit-details-marker]:hidden">
                        <h3 className="text-h4 font-bold">{item.question}</h3>
                        <div className="self-center">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                className={`ml-4 h-6 w-6 transform transition-transform duration-300 ease-in-out ${openIndex === index ? 'rotate-180' : ''}`}
                            >
                                <path 
                                    fillRule="evenodd" 
                                    d="M12 14.879L4.061 6.939a1.5 1.5 0 0 0-2.121 2.121l9 9a1.5 1.5 0 0 0 2.121 0l9-9a1.5 1.5 0 0 0-2.121-2.121L12 14.879z" 
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                    </summary>
                    <div 
                        className={`with-styled-ul-list with-styled-ol-list text-dark-grey m:mt-6 m:pr-10 mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
                            openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                        <div className="w-full">
                            {item.answer}
                        </div>
                    </div>
                </details>
            ))}
        </div>
    );
}

export default QuestionPart;
