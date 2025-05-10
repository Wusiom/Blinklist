import * as React from 'react';

interface UserReviewCardProps {
    imageUrl: string;
    label: string;
    labelBgColor: string;
    review: string;
    order?: string;
}

function UserReviewCard({ imageUrl, label, labelBgColor, review, order }: UserReviewCardProps) {
    return (
        <div className={`flex flex-col gap-4 m:flex-row ${order}`}>
            <div className="m:flex-col-reverse m:items-center m:justify-end m:gap-2 flex shrink-0 flex-row items-end gap-4">
                <picture>
                    <source 
                        media="(min-width: 768px)" 
                        srcSet={`${imageUrl}?width=160&height=196&format=webp&quality=&dpr=1 1x,${imageUrl}?width=160&height=196&format=webp&quality=&dpr=2 2x,${imageUrl}?width=160&height=196&format=webp&quality=&dpr=3 3x`}
                        width="160" 
                        height="196"
                    />
                    <source 
                        srcSet={`${imageUrl}?width=112&height=138&format=webp&quality=&dpr=1 1x,${imageUrl}?width=112&height=138&format=webp&quality=&dpr=2 2x,${imageUrl}?width=112&height=138&format=webp&quality=&dpr=3 3x`}
                        width="112" 
                        height="138"
                    />
                    <img 
                        fetchPriority="auto"
                        alt="A Blinkist user" 
                        src={imageUrl}
                        className="rounded-2xl" 
                        loading="lazy" 
                        decoding="async" 
                        width="112" 
                        height="138"
                    />
                </picture>
                <div>
                    <h3 className={`-ml-8 rounded-lg px-2 py-1 text-center font-medium text-dark-grey m:ml-0 ${labelBgColor}`}>
                        {label}
                    </h3>
                    <span className="m:hidden" />
                </div>
            </div>
            <div>
                <span className="m:block mb-5 hidden" />
                <div className="mb-2 flex flex-row gap-1">
                    {[...Array(5)].map((_, index) => (
                        <div key={index} className="text-summer-yellow">
                            <div className="relative w-4 h-4">
                                <div className="absolute [clip-path:polygon(50%_0.5%,65.1%_33.3%,99.3%_38.5%,74.5%_63.7%,80.4%_99%,50%_82.5%,19.5%_99%,25.5%_63.7%,0.5%_38.5%,35%_33.3%)] w-4 h-4">
                                    <div className="h-full bg-summer-yellow" style={{ width: '100%' }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="font-tisa-pro text-p1" dangerouslySetInnerHTML={{ __html: review }} />
            </div>
        </div>
    );
}

export default UserReviewCard; 