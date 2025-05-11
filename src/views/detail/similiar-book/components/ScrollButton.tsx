import * as React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { ScrollButtonProps } from '../types';

export const ScrollButton: React.FC<ScrollButtonProps> = ({ direction, onClick, visible }) => (
    <button 
        data-test-id={`slide${direction === 'left' ? 'Left' : 'Right'}`}
        aria-label={`slide ${direction}`}
        type="button"
        onClick={onClick}
        className={`hidden disabled:text-light-grey m:block text-white transition-opacity duration-200 ${
            visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
    >
        {direction === 'left' ? (
            <ChevronLeftIcon className="w-6 h-6" />
        ) : (
            <ChevronRightIcon className="w-6 h-6" />
        )}
    </button>
); 