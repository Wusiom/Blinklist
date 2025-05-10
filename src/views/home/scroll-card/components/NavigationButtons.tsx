import * as React from 'react';

interface NavigationButtonsProps {
    onPrev: () => void;
    onNext: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
    onPrev,
    onNext
}) => {
    return (
        <div className="l:flex absolute right-[15%] hidden">
            <button 
                aria-label="Previous slide"
                onClick={onPrev}
                className="mr-2"
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-grey hover:text-dark-grey h-6 w-6 rotate-90"
                >
                    <path 
                        fillRule="evenodd" 
                        d="M12 14.879L4.061 6.939a1.5 1.5 0 0 0-2.121 2.121l9 9a1.5 1.5 0 0 0 2.121 0l9-9a1.5 1.5 0 0 0-2.121-2.121L12 14.879z" 
                        fill="currentColor"
                    />
                </svg>
            </button>
            <button 
                aria-label="Next slide"
                onClick={onNext}
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-grey hover:text-dark-grey h-6 w-6 -rotate-90"
                >
                    <path 
                        fillRule="evenodd" 
                        d="M12 14.879L4.061 6.939a1.5 1.5 0 0 0-2.121 2.121l9 9a1.5 1.5 0 0 0 2.121 0l9-9a1.5 1.5 0 0 0-2.121-2.121L12 14.879z" 
                        fill="currentColor"
                    />
                </svg>
            </button>
        </div>
    );
};

export default NavigationButtons; 