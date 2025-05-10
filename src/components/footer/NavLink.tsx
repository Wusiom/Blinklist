import * as React from 'react';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className = '' }) => (
    <li>
        <a href={href} className={`text-dark-grey hover:text-blue block text-sm leading-9 font-normal ${className}`}>
            {children}
        </a>
    </li>
);

export default NavLink; 