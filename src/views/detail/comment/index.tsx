import * as React from 'react';
import CommentCard from './components/CommentCard';
import TrialButton from '../../../components/TrialButton';

const Comment: React.FC = () => {
    const comments = [
        {
            author: 'Sven O.',
            rating: 5,
            content: "It's <strong>highly addictive</strong> to get core insights on personally relevant topics without repetition or triviality. Added to that the apps ability to suggest kindred interests opens up a foundation of knowledge."
        },
        {
            author: 'Sven O.',
            rating: 2,
            content: "It's <strong>highly addictive</strong> to get core insights on personally relevant topics without repetition or triviality. Added to that the apps ability to suggest kindred interests opens up a foundation of knowledge."
        },
        {
            author: 'Sven O.',
            rating: 3,
            content: "It's <strong>highly addictive</strong> to get core insights on personally relevant topics without repetition or triviality. Added to that the apps ability to suggest kindred interests opens up a foundation of knowledge."
        }
    ];

    return (
        <section className="flex-col flex w-full max-w-[80rem] mx-auto m:px-12 px-4">
            <div className="flex flex-col items-center w-full flex-1 m:px-6 mb-12 m:mb-16">
                <div className="mb-8 m:mb-12 text-center text-midnight relative font-bold text-h2">
                    People ❤️ Blinkist&nbsp;
                </div>
                <div className="m:px-14 flex m:justify-center max-w-3xl flex-col">
                    {comments.map((comment, index) => (
                        <CommentCard
                            key={index}
                            author={comment.author}
                            rating={comment.rating}
                            content={comment.content}
                        />
                    ))}
                </div>
                <div className="flex justify-center w-full">
                    <TrialButton />
                </div>
            </div>
        </section>
    );
};

export default Comment;
