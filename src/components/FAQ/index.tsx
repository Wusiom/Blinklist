import * as React from 'react';

export interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
    title?: string;
}

function FAQ({ items, title = 'Do you have any questions?' }: FAQProps) {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="text-midnight m:mx-auto m:max-w-2xl w-full">
            <h2 className="text-h3 m:mb-4 m:text-h2 mb-8 flex flex-col text-center font-bold">
                {title}
            </h2>
            {items.map((item, index) => (
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

export default FAQ; 