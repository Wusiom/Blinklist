import * as React from 'react';

interface SocialLinkProps {
    href: string;
    platform: string;
    imageSrc: string;
    imageAlt: string;
}

interface LegalLinkProps {
    href: string;
    text: string;
    isLast?: boolean;
}

interface FooterBottomProps {
    className?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, platform, imageSrc, imageAlt }) => (
    <li>
        <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow us on ${platform}`}
        >
            <picture>
                <source 
                    srcSet={`${imageSrc}?c=365 1x,${imageSrc}?c=365 2x,${imageSrc}?c=365 3x`} 
                    width="24" 
                    height="24" 
                />
                <img 
                    src={imageSrc} 
                    alt={imageAlt}
                    width={24}
                    height={24}
                    loading="lazy"
                    decoding="async"
                />
            </picture>
        </a>
    </li>
);

const LegalLink: React.FC<LegalLinkProps> = ({ href, text, isLast }) => (
    <li>
        <a target="_blank" 
            href={href} 
            rel="noopener noreferrer" 
            className="hover:text-blue-2"
        >
            {text}
        </a>
        {!isLast && <span className="mx-2 inline-block">|</span>}
    </li>
);

const FooterBottom: React.FC<FooterBottomProps> = ({ className = '' }) => {
    const socialLinks = [
        {
            href: "https://www.facebook.com/blinkist",
            platform: "facebook",
            imageSrc: "https://static.blinkist.com/web-growth/icons/social/facebook.png",
            imageAlt: "Facebook Logo"
        },
        {
            href: "https://twitter.com/blinkist",
            platform: "twitter",
            imageSrc: "https://static.blinkist.com/web-growth/icons/social/twitter-x.png",
            imageAlt: "Twitter Logo"
        },
        {
            href: "https://www.linkedin.com/company/blinkist",
            platform: "linkedin",
            imageSrc: "https://static.blinkist.com/web-growth/icons/social/linkedin.png",
            imageAlt: "Linkedin Logo"
        },
        {
            href: "https://www.instagram.com/blinkist/",
            platform: "instagram",
            imageSrc: "https://static.blinkist.com/web-growth/icons/social/instagram.png",
            imageAlt: "Instagram Logo"
        }
    ];

    const legalLinks = [
        { href: "https://www.blinkist.com/en/sitemap", text: "Sitemap" },
        { href: "https://www.blinkist.com/en/disclaimer", text: "Legal Notice" },
        { href: "https://www.blinkist.com/en/tos", text: "Terms of Service" },
        { href: "https://www.blinkist.com/en/privacy", text: "Privacy Policy" },
        { href: "https://www.blinkist.com/en/cookie-consent", text: "Cookie Consent" }
    ];

    return (
        <section className={`m:px-12 mx-auto flex max-w-7xl flex-col px-4 py-4 m:flex-row-reverse m:items-end flex-wrap justify-between gap-6 ${className}`}>
            <ul data-testid="social-links" className="flex flex-wrap gap-2 justify-center m:justify-start">
                {socialLinks.map((link, index) => (
                    <SocialLink key={index} {...link} />
                ))}
            </ul>
            <ul data-testid="legal-links" className="text-dark-grey flex flex-wrap text-sm justify-center m:justify-start gap-y-2">
                <li className="hover:text-blue-2 whitespace-nowrap">
                    <a target="_blank" 
                        href="https://www.blinkist.com/en" 
                        rel="noopener noreferrer"
                    >
                        © Blinkist 2025
                    </a>
                    <span className="mx-2 inline-block">|</span>
                </li>
                {legalLinks.map((link, index) => (
                    <LegalLink 
                        key={index} 
                        {...link} 
                        isLast={index === legalLinks.length - 1} 
                    />
                ))}
            </ul>
        </section>
    );
};

export default FooterBottom; 