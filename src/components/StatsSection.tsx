import * as React from 'react';

const StatsSection: React.FC = () => {
    return (
        <div className="m:grid-cols-3 grid grid-cols-1 items-start gap-8 text-center">
            <div className="flex flex-col items-center text-h2">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue m:mb-4 mb-2 h-12 w-12">
                    <path d="M21 20.5H3V22H21V20.5Z" fill="currentColor" />
                    <path d="M18.19 12.53L17.13 11.47L12.71 15.89V3H11.3V15.9L6.87 11.47L5.81 12.53L12 18.72L18.19 12.53Z" fill="currentColor" />
                </svg>
                <span className="mb-2 font-bold">37 Million</span>
                <p className="text-p1 text-dark-grey">Downloads on all platforms</p>
            </div>
            <div className="flex flex-col items-center text-h2">
                <div className="m:my-3 mb-2 flex flex-row gap-1 p-2.5">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="text-blue">
                            <div className="relative w-5 h-5">
                                <div className="absolute [clip-path:polygon(50%_0.5%,65.1%_33.3%,99.3%_38.5%,74.5%_63.7%,80.4%_99%,50%_82.5%,19.5%_99%,25.5%_63.7%,0.5%_38.5%,35%_33.3%)] w-5 h-5">
                                    <div className="h-full bg-blue" style={{ width: i === 4 ? '65%' : '100%' }} />
                                </div>
                                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.2064 6.17467L2.07483 6.80601L5.06828 9.87398L4.37426 14.1285L7.99999 12.1243L11.6259 14.1286L10.9319 9.87398L13.9253 6.80603L9.7936 6.17467L8 2.35348L6.2064 6.17467ZM5.52788 5.26675L0 6.11145L4.00007 10.2111L3.05577 16L8 13.2669L12.9444 16L12.0001 10.2111L16 6.11163L10.4721 5.26675L8 0L5.52788 5.26675Z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
                <span className="mb-2 font-bold">4.7 Stars</span>
                <p className="text-p1 text-dark-grey">Average ratings on iOS and Google Play</p>
            </div>
            <div className="flex flex-col items-center text-h2">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue m:mb-4 mb-2 h-12 w-12">
                    <g clipPath="url(#clip0_4009_300)">
                        <path d="M12.94 17.6C12.8229 16.8445 12.8229 16.0755 12.94 15.32C14.0195 15.2679 15.0718 14.964 16.0129 14.4327C16.954 13.9014 17.7577 13.1573 18.36 12.26C19.0788 11.1036 19.5502 9.8109 19.7447 8.4633C19.9392 7.1157 19.8525 5.74243 19.49 4.43C19.1691 3.0472 18.6681 1.71248 18 0.46L17.79 0L17.27 0.08C14.6624 0.58181 12.3071 1.96604 10.6 4C8.80676 3.27344 6.86866 2.97553 4.94 3.13L4.38 3.19L4.28 3.75C4.28 3.96 3.36 8.93 4.96 11.55C5.65075 12.7409 6.74788 13.6428 8.05 14.09C8.54973 14.2578 9.07286 14.3456 9.6 14.35C9.93777 14.344 10.2736 14.297 10.6 14.21C10.852 14.4915 11.1262 14.7524 11.42 14.99C11.2987 15.8591 11.2987 16.7409 11.42 17.61C9.25037 17.6867 7.11904 18.2041 5.15575 19.1307C3.19246 20.0573 1.43828 21.3738 0 23L1.13 24C2.48624 22.4516 4.15764 21.2108 6.0323 20.3607C7.90695 19.5106 9.9416 19.0708 12 19.0708C14.0584 19.0708 16.093 19.5106 17.9677 20.3607C19.8424 21.2108 21.5138 22.4516 22.87 24L24 23C22.6042 21.4144 20.9083 20.1208 19.01 19.194C17.1117 18.2672 15.0487 17.7254 12.94 17.6ZM6.24 10.75C5.24 9.2 5.45 6.17 5.66 4.58C7.07156 4.52803 8.47923 4.75924 9.8 5.26C9.13505 6.57042 8.79223 8.02054 8.8 9.49C8.78748 10.6559 9.07319 11.8056 9.63 12.83C8.93262 12.8091 8.25284 12.6061 7.65816 12.2412C7.06348 11.8763 6.57458 11.3622 6.24 10.75ZM10.32 9.49C10.32 3.76 15.32 2.07 16.96 1.67C17.66 3.19 19.47 7.93 17.09 11.41C16.6571 12.0777 16.0787 12.6386 15.398 13.0508C14.7174 13.463 13.9522 13.7157 13.16 13.79C13.7114 11.4437 14.5231 9.16621 15.58 7L14.22 6.37C13.1642 8.56269 12.3365 10.8581 11.75 13.22C10.8184 12.2025 10.3074 10.8695 10.32 9.49Z" fill="currentColor" />
                    </g>
                    <defs>
                        <clipPath id="clip0_4009_300">
                            <rect width="24" height="24" fill="currentColor" />
                        </clipPath>
                    </defs>
                </svg>
                <span className="mb-2 font-bold">10+ years</span>
                <p className="text-p1 text-dark-grey">Experience igniting personal growth</p>
            </div>
        </div>
    );
};

export default StatsSection; 