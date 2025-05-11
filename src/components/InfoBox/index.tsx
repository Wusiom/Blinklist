import * as React from 'react';
import TrialButton from '../TrialButton';

interface InfoBoxProps {
    description: React.ReactNode;
}

function InfoBox({ description }: InfoBoxProps) {
    return (
        <div className="w-full p-6 m:px-12 bg-background-blue m:flex items-center rounded" data-test-id="trial-explainer-info-box">
            <p className="text-dark-grey mb-6 w-full m:mr-8 m:mb-0">
                {description}
            </p>
            <TrialButton />
        </div>
    );
}

export default InfoBox; 