import * as React from 'react';

interface ChapterListProps {
    onChapterClick: (index: number) => void;
}

const ChapterList: React.FC<ChapterListProps> = ({ onChapterClick }) => {
    return (
        <div data-test-id="chapter-list" className="row-span-2">
            <h2 className="text-h4 font-bold text-midnight mb-2">Key ideas in The 5 AM Club</h2>
            <ul>
                <li className="border-b border-light-grey">
                    <button 
                        data-test-id="chapter-list-item" 
                        className="py-4 flex items-center outline-none w-full"
                        onClick={() => onChapterClick(-1)}
                    >
                        <h3 className="text-mid-grey text-h6 text-left ml-7">Introduction</h3>
                    </button>
                </li>
                <li className="border-b border-light-grey last-of-type:border-none">
                    <button 
                        data-test-id="chapter-list-item" 
                        data-test-chapter-index="0" 
                        className="py-4 flex items-center outline-none w-full"
                        onClick={() => onChapterClick(0)}
                    >
                        <div className="text-h3 font-bold text-midnight mr-4">1</div>
                        <h3 className="text-mid-grey text-h6 text-left">
                            A chance meeting drew a disillusioned entrepreneur and a frustrated artist to the secrets of the 5 AM club.
                        </h3>
                    </button>
                </li>
                <li className="border-b border-light-grey last-of-type:border-none">
                    <button 
                        data-test-id="chapter-list-item" 
                        data-test-chapter-index="1" 
                        className="py-4 flex items-center outline-none w-full"
                        onClick={() => onChapterClick(1)}
                    >
                        <div className="text-h3 font-bold text-midnight mr-4">2</div>
                        <h3 className="text-mid-grey text-h6 text-left">
                            The solitude and enhanced brain state that you'll experience at 5:00 a.m. will help you perform like the elite.
                        </h3>
                    </button>
                </li>
                <li className="border-b border-light-grey last-of-type:border-none">
                    <button 
                        data-test-id="chapter-list-item" 
                        data-test-chapter-index="2" 
                        className="py-4 flex items-center outline-none w-full"
                        onClick={() => onChapterClick(2)}
                    >
                        <div className="text-h3 font-bold text-midnight mr-4">3</div>
                        <h3 className="text-mid-grey text-h6 text-left">
                            Historymakers capitalize on their talents, avoid distraction, achieve every day and master themselves.
                        </h3>
                    </button>
                </li>
                <li className="border-b border-light-grey last-of-type:border-none">
                    <button 
                        data-test-id="chapter-list-item" 
                        data-test-chapter-index="3" 
                        className="py-4 flex items-center outline-none w-full"
                        onClick={() => onChapterClick(3)}
                    >
                        <div className="text-h3 font-bold text-midnight mr-4">4</div>
                        <h3 className="text-mid-grey text-h6 text-left">
                            Giving attention to each of the four interior empires will allow you to master yourself and your chosen field.
                        </h3>
                    </button>
                </li>
                <li className="border-b border-light-grey last-of-type:border-none">
                    <button 
                        data-test-id="chapter-list-item" 
                        data-test-chapter-index="4" 
                        className="py-4 flex items-center outline-none w-full"
                        onClick={() => onChapterClick(4)}
                    >
                        <div className="text-h3 font-bold text-midnight mr-4">5</div>
                        <h3 className="text-mid-grey text-h6 text-left">
                            The 20/20/20 formula ensures that waking up at 5:00 a.m. generates incredible results.
                        </h3>
                    </button>
                </li>
                <li className="border-b border-light-grey last-of-type:border-none">
                    <button 
                        data-test-id="chapter-list-item" 
                        data-test-chapter-index="5" 
                        className="py-4 flex items-center outline-none w-full"
                        onClick={() => onChapterClick(5)}
                    >
                        <div className="text-h3 font-bold text-midnight mr-4">6</div>
                        <h3 className="text-mid-grey text-h6 text-left">
                            Embracing sleep and the "twin-cycle of elite performance" is essential to maximizing the potential of the 5 AM club.
                        </h3>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default ChapterList; 