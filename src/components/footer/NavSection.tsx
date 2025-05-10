import * as React from 'react';
import NavLink from './NavLink';

interface Link {
    href: string;
    text: string;
}

interface NavSectionProps {
    title: string;
    links: Link[];
    className?: string;
}

const NavSection: React.FC<NavSectionProps> = ({ title, links, className = '' }) => (
    <div className={`w-64 shrink-0 ${className}`}>
        <h3 className="text-h5 m:text-h4 text-content-primary font-bold mb-2">{title}</h3>
        <ul>
            {links.map((link, index) => (
                <NavLink key={index} href={link.href}>
                    {link.text}
                </NavLink>
            ))}
        </ul>
    </div>
);

export default NavSection; 