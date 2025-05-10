import * as React from 'react';

interface NavigationButtonProps {
    direction: 'prev' | 'next';
    disabled: boolean;
    onClick: () => void;
    className?: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
    direction,
    disabled,
    onClick,
    className = ''
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
            aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} book list`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className={`h-6 w-6 ${direction === 'prev' ? 'rotate-90' : '-rotate-90'} ${disabled ? 'text-grey' : 'text-blue'}`}
            >
                <path
                    fillRule="evenodd"
                    d="M12 14.879L4.061 6.939a1.5 1.5 0 0 0-2.121 2.121l9 9a1.5 1.5 0 0 0 2.121 0l9-9a1.5 1.5 0 0 0-2.121-2.121L12 14.879z"
                    fill="currentColor"
                />
            </svg>
        </button>
    );
};

export default NavigationButton; 