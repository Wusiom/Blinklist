import * as React from 'react';

interface Interest {
    id: string;
    label: string;
    icon?: React.ReactNode;
}

interface InterestSelectorProps {
    selectedInterest: string;
    onInterestChange: (interestId: string) => void;
    interests: Interest[];
    title?: string;
    subtitle?: string;
}

const InterestSelector: React.FC<InterestSelectorProps> = ({ 
    selectedInterest, 
    onInterestChange,
    interests,
    title = "A world of knowledge in your pocket",
    subtitle = "What are you interested in?"
}) => {
    return (
        <section className="m:gap-12 flex flex-col gap-8">
            <div className="mx-auto max-w-3xl px-4">
                <h2 className="text-h2 text-midnight m:mb-6 m:text-h0 mb-4 text-center font-bold">
                    {title}
                </h2>
                <p className="text-p1 text-dark-grey m:text-p0 text-center">
                    {subtitle}
                </p>
            </div>
            <div className="w-full max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap gap-4 justify-center">
                    {interests.map((interest) => (
                        <button
                            key={interest.id}
                            type="button"
                            aria-pressed={selectedInterest === interest.id}
                            onClick={() => onInterestChange(interest.id)}
                            className={`text-midnight flex flex-row items-center gap-2 rounded-lg px-4 py-3 cursor-pointer transition-colors duration-200 min-w-[200px] ${
                                selectedInterest === interest.id ? 'bg-background-yellow' : 'bg-pale-mint-grey hover:bg-gray-200'
                            }`}
                        >
                            {interest.icon && (
                                <span className="flex items-center justify-center text-midnight">
                                    {interest.icon}
                                </span>
                            )}
                            <div className="font-medium whitespace-nowrap text-sm">{interest.label}</div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InterestSelector; 