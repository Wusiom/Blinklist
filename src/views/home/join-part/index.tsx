import * as React from 'react';
import UserReviewCard from './components/UserReviewCard';
import Statistics from './components/Statistics';

const userReviews = [
    {
        imageUrl: 'https://static.blinkist.com/web-growth/homepage/social_upskillers.png',
        label: 'Upskillers',
        labelBgColor: 'bg-background-red',
        review: 'Life changing. The concept of being able to <span className="font-bold">grasp a book\'s main point in such a short time</span> truly opens multiple opportunities to grow every area of your life at a faster rate.'
    },
    {
        imageUrl: 'https://static.blinkist.com/web-growth/homepage/social_leaders.png',
        label: 'Leaders',
        labelBgColor: 'bg-background-blue',
        review: 'Most CEOs read a book a week. Many use programs like this to acquire key concepts that <span className="font-bold">help them keep a fresh perspective helping hone vision, strategy and action.</span>',
        order: 'm:order-first m:mt-16'
    },
    {
        imageUrl: 'https://static.blinkist.com/web-growth/homepage/social_learners.png',
        label: 'Lifelong learners',
        labelBgColor: 'bg-background-purple',
        review: '<span className="font-bold">This is simply the coolest app that exists.</span> Deserved full credit. It\'s much nicer to spend your time learning new knowledge, rather than spending hours browsing social media.',
        order: 'm:hidden l:mt-16 l:flex'
    }
];

const statistics = [
    {
        value: '95%',
        text: 'of Blinkist members read significantly more than before*'
    },
    {
        value: '91%',
        text: 'of Blinkist members create better habits*'
    },
    {
        value: '87%',
        text: 'have made positive changes in their lives thanks to Blinkist*'
    }
];

function JoinPart() {
    return (
        <section className="m:gap-12 flex max-w-[80rem] flex-col items-center gap-8 m:px-8 mx-auto px-4">
            <h3 className="text-h2 text-midnight m:text-h0 mx-auto max-w-3xl text-center font-bold">
                Join 31+ million people growing with Blinkist
                <button 
                    type="button" 
                    aria-haspopup="dialog" 
                    aria-expanded="false" 
                    aria-controls="radix-:r8R2:" 
                    data-state="closed" 
                    className="ml-2 inline-block align-text-top outline-hidden"
                >
                    <span aria-hidden="true" className="text-base">ⓘ</span>
                </button>
            </h3>
            <div className="m:grid m:grid-cols-2 m:gap-16 l:grid-cols-3 flex flex-col gap-8">
                {userReviews.map((review, index) => (
                    <UserReviewCard key={index} {...review} />
                ))}
            </div>
            <Statistics stats={statistics} />
        </section>
    );
}

export default JoinPart;
