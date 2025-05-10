import * as React from 'react';

interface CardProps {
    title: string;
    titleColor: string;
    description: string;
    imageUrl: string;
    desktopImageUrl: string;
    backgroundColor: string;
}

const Card: React.FC<CardProps> = ({
    title,
    titleColor,
    description,
    imageUrl,
    desktopImageUrl,
    backgroundColor
}) => {
    return (
        <div className={`${backgroundColor} m:grid-cols-2 m:gap-8 m:rounded-[40px] m:py-12 m:pl-12 m:pr-6 grid w-[80vw] shrink-0 snap-start items-center gap-4 rounded-[20px] px-6 py-6`}>
            <div>
                <h3 className="text font-tisa-pro text-h3 text-midnight m:text-h15 mb-4">
                    <span className={`font-bold ${titleColor}`}>{title}</span>
                </h3>
                <p className="text-p1 text-dark-grey m:text-p0">
                    {description}
                </p>
            </div>
            <div className="flex flex-col items-center">
                <picture>
                    <source 
                        media="(min-width: 768px)" 
                        srcSet={desktopImageUrl}
                        width="490" 
                        height="400"
                    />
                    <source 
                        srcSet={imageUrl}
                        width="280" 
                        height="280"
                    />
                    <img 
                        fetchPriority="auto"
                        alt={title}
                        src={imageUrl}
                        className="" 
                        loading="lazy" 
                        decoding="async" 
                        width="280" 
                        height="280"
                    />
                </picture>
            </div>
        </div>
    );
};

export default Card; 