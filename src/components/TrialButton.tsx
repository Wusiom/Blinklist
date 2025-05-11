import * as React from 'react';

interface TrialButtonProps {
    onClick?: () => void;
}

const TrialButton: React.FC<TrialButtonProps> = ({ onClick }) => {
    return (
        <button 
            type="button" 
            data-test-id="start-trial-button" 
            className="w-full m:max-w-[24rem] rounded border-none font-cera-pro font-medium text-base leading-5 text-center items-center justify-center no-underline outline-none disabled:bg-light-grey cursor-pointer disabled:cursor-not-allowed px-4 bg-green text-midnight hover:bg-green-2 hover:text-midnight disabled:text-white py-3"
            onClick={onClick}
        >
            Start your free trial
        </button>
    );
}; 

export default TrialButton;