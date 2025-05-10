import * as React from 'react';

interface AppDownloadButtonProps {
    platform: 'iOS' | 'Android';
    href: string;
    imageSrc: string;
    imageAlt: string;
}

const AppDownloadButton: React.FC<AppDownloadButtonProps> = ({ platform, href, imageSrc, imageAlt }) => (
    <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Download on ${platform}`}
        className="block"
    >
        <picture>
            <source srcSet={imageSrc} type="image/png" />
            <img 
                src={imageSrc} 
                alt={imageAlt}
                width={133}
                height={39}
                loading="lazy"
            />
        </picture>
    </a>
);

export default AppDownloadButton; 