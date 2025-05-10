import * as React from 'react';
import AppDownloadButton from './AppDownloadButton';
import logo from '../../assets/icons/blinkist-logo.svg';

interface AppDownloadSectionProps {
    className?: string;
}

const AppDownloadSection: React.FC<AppDownloadSectionProps> = ({ className = '' }) => (
    <div className={`m:w-3/6 flex flex-col gap-6 ${className}`}>
        <div>
            <a href="/en" aria-label="Back to homepage" className="flex items-center pb-4">
                <img 
                    src={logo} 
                    alt="Blinkist Logo" 
                    className="m:h-6 h-5"
                    width={134}
                    height={26}
                />
            </a>
            <h2 className="text-h4 text-blue mb-8 font-bold">
                Powerful ideas—<br />15 minutes at a time
            </h2>
        </div>
        <div className="flex gap-4">
            <AppDownloadButton 
                platform="iOS"
                href="https://apps.apple.com/us/app/blinkist-non-fiction-books/id838983460"
                imageSrc="https://static.blinkist.com/web-growth/icons/apple-app-store-badge.png"
                imageAlt="Download on the App Store"
            />
            <AppDownloadButton 
                platform="Android"
                href="https://play.google.com/store/apps/details?id=com.blinkist.app"
                imageSrc="https://static.blinkist.com/web-growth/icons/google-play-store-badge.png"
                imageAlt="Get it on Google Play"
            />
        </div>
    </div>
);

export default AppDownloadSection; 