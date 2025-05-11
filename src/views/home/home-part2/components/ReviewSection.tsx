import * as React from 'react';

const ReviewSection: React.FC = () => {
    return (
        <div className="mx-auto max-w-2xl">
            <p className="text-p1 text-midnight m:text-p0 mb-2 text-center">
                "<span className="font-bold italic">Great app.</span> Addicting. Perfect for wait times, morning coffee, evening before bed. Extremely well written, thorough, easy to use."
            </p>
            <div className="mb-1 flex w-full flex-row justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="text-summer-yellow">
                        <div className="relative w-4 h-4">
                            <div className="absolute [clip-path:polygon(50%_0.5%,65.1%_33.3%,99.3%_38.5%,74.5%_63.7%,80.4%_99%,50%_82.5%,19.5%_99%,25.5%_63.7%,0.5%_38.5%,35%_33.3%)] w-4 h-4">
                                <div className="h-full bg-summer-yellow" style={{ width: '500%' }} />
                            </div>
                            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.2064 6.17467L2.07483 6.80601L5.06828 9.87398L4.37426 14.1285L7.99999 12.1243L11.6259 14.1286L10.9319 9.87398L13.9253 6.80603L9.7936 6.17467L8 2.35348L6.2064 6.17467ZM5.52788 5.26675L0 6.11145L4.00007 10.2111L3.05577 16L8 13.2669L12.9444 16L12.0001 10.2111L16 6.11163L10.4721 5.26675L8 0L5.52788 5.26675Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-caption text-dark-grey mb-0 text-center">Renee D.</p>
        </div>
    );
};

export default ReviewSection; 