import * as React from 'react';

interface ChapterContentProps {
    activeChapter: number;
}

const ChapterContent: React.FC<ChapterContentProps> = ({ activeChapter }) => {
    return (
        <>
            <section data-test-id="chapter-preview" className="font-tisa-pro lg:col-span-2" style={{ display: activeChapter === -1 ? 'block' : 'none' }}>
                <h2 className="text-midnight mb-6 font-bold text-h3">
                    What's in it for me? Learn how to take charge of your morning and enhance your life.
                </h2>
                <div className="text-dark-grey">
                    <p>Once upon a time there was a billionaire. This guy had reached the true elite; he'd achieved epic results in both his professional and personal spheres. He became the kind of person you can't help but admire. Someone who you knew would leave a positive legacy for the world.&nbsp;</p>
                    <p>So, what was his secret? Did he have a natural talent that helped him succeed? Nope – it wasn't natural talent. Were his accomplishments the result of hard work and grit. No, not that either.</p>
                    <p>As you may have gathered form the title of these blinks, this billionaire attributed all his success to a simple, yet revolutionary morning routine.</p>
                    <p>Every day, our billionaire would rise at 5:00 a.m. And after waking, he'd follow a little known formula designed to turbocharge his mental focus, build his physical fitness and encourage him to be his best self day in and day out.</p>
                    <p>Would you like to know this morning routine? It's time to take you through the main ideas of Robin Sharma's The 5 AM Club.&nbsp;</p>
                    <p><strong>A note to readers: this Blink was redone especially for audio. This is the reason why the text version might differ from the audio version. If you're trying to decide whether to listen or to read, we highly recommend listening!</strong></p>
                </div>
            </section>
            <section data-test-id="chapter-preview" className="font-tisa-pro lg:col-span-2" style={{ display: activeChapter === 0 ? 'block' : 'none' }}>
                <h2 className="text-midnight mb-6 font-bold text-h3">
                    A chance meeting drew a disillusioned entrepreneur and a frustrated artist to the secrets of the 5 AM club.
                </h2>
                <div className="text-dark-grey">
                    <p>In these blinks, we'll follow the fictitious tale of a curious group of people: A depressed entrepreneur, in need of revitalization; a frustrated artist, trying to refuel his creativity and develop a legacy; and a billionaire with a string of successes behind him and a desire to pass on the knowledge of how to live an extraordinary life.</p>
                    <p>The three met at a personal optimization conference addressed by a legendary business guru, the Spellbinder, someone renowned for his ability to weave magic and captivate his audience with the power of his insights. The billionaire approached the entrepreneur and the artist after the Spellbinder's speech had finished but they didn't know that he was a billionaire. The billionaire was disguised as a poor man, a habit he had developed to remind himself that money isn't everything. The only clue to his actual wealth was his expensive watch. The impoverished-looking billionaire told the two that he'd made a fortune thanks to the Spellbinder, who'd taught him that while many people wish that extraordinary things will happen to them, truly elite performers learn that they can make extraordinary things happen themselves.</p>
                    <p>The entrepreneur and the artist became more and more curious about this mysterious man who talked like he was a guru himself. They listened as the billionaire explained how the Spellbinder –&nbsp;who, in fact, was the billionaire's personal mentor –&nbsp;had taught him one thing that was more important than anything else.</p>
                    <p>What was it? That the most reliable way to generate the best results in your personal and professional life is to build a world-beating morning routine. Being a generous man, the billionaire made an incredible offer. If the entrepreneur and artist wanted to come hang with him at his beach house in Mauritius, he would teach them the secrets of a world-class morning routine. All they needed to do was meet the next morning at 5:00 a.m.</p>
                    <p>The entrepreneur asked the chauffeur what the logo meant, and he explained that it stood for "The 5 AM Club." And so began their journey toward understanding a revolutionary morning routine and a whole new outlook on life with the potential to transform everything for the better.</p>
                    <p>Early the next morning, the billionaire told the entrepreneur and artist how getting up at 5:00 a.m. was the way he had learned to escape mediocrity and achieve greatness. Getting up at 5:00 a.m. had promoted his creativity, doubled his energy, and tripled his productivity. How?</p>
                    <p>Well, the billionaire told them, many true greats throughout history, from novelist John Grisham to composer Wolfgang Amadeus Mozart, have understood that the isolation that comes from getting up at 5:00 a.m. has a multiplying effect.</p>
                </div>
            </section>
            <section data-test-id="chapter-preview" className="font-tisa-pro lg:col-span-2" style={{ display: activeChapter === 1 ? 'block' : 'none' }}>
                <h2 className="text-midnight mb-6 font-bold text-h3">
                    The solitude and enhanced brain state that you'll experience at 5:00 a.m. will help you perform like the elite.
                </h2>
                <div className="text-dark-grey">
                    <p>All of us have limited mental capacity or <em>cognitive bandwidth</em>. And throughout the day, our attention is given to more and more things: work, the news, interaction with others and social media. Our bandwidth gets used up by all of these so, by lunchtime, we can't really concentrate on anything at all. By constantly shifting our focus from one thing to another, we give nothing enough attention. But if you get up at 5:00 a.m., you have a golden opportunity to focus on one high-value activity without your brain getting distracted.</p>
                    <p>This focus is further enhanced by the concept of<em> transient hypofrontality</em>, which means, in a nutshell, that at 5:00 a.m., you are well placed to achieve a state of <em>flow</em> in your thinking.</p>
                </div>
                <button className="text-blue font-cera-pro">Read more</button>
            </section>
            <section data-test-id="chapter-preview" className="font-tisa-pro lg:col-span-2" style={{ display: activeChapter === 2 ? 'block' : 'none' }}>
                <h2 className="text-midnight mb-6 font-bold text-h3">
                    Historymakers capitalize on their talents, avoid distraction, achieve every day and master themselves.
                </h2>
                <div className="text-dark-grey">
                    <p>On a dazzling morning in Mauritius, the entrepreneur, the artist, and the billionaire gathered by the sea. A school of squirrelfish swam through the crystal clear waters. In this beautiful setting, the billionaire recounted the four focuses of the great historymakers.</p>
                    <p>Firstly, he said, the greatest people are defined not by their natural talent, but by the extent to which they <em>capitalize</em>. According to the billionaire, self-discipline and perseverance always trump talent and giftedness. So rather than thinking you don't have what it takes, capitalize on the gifts you've got to make a difference.</p>
                </div>
                <button className="text-blue font-cera-pro">Read more</button>
            </section>
            <section data-test-id="chapter-preview" className="font-tisa-pro lg:col-span-2" style={{ display: activeChapter === 3 ? 'block' : 'none' }}>
                <h2 className="text-midnight mb-6 font-bold text-h3">
                    Giving attention to each of the four interior empires will allow you to master yourself and your chosen field.
                </h2>
                <div className="text-dark-grey">
                    <p>How often, asked the billionaire, have you heard a guru talk about improving your mindset? We hear it all the time – think optimistic thoughts, and you'll improve your life.</p>
                    <p>But, said the billionaire, strolling along a white sand beach with his pupils, what these gurus don't tell you is that your <em>Mindset</em> is just one of four "interior empires." If you're only working on your Mindset, you're ignoring your <em>Healthset</em>, your <em>Heartset</em>, and your <em>Soulset</em>. That's like only polishing 25 percent of a picture!</p>
                </div>
                <button className="text-blue font-cera-pro">Read more</button>
            </section>
            <section data-test-id="chapter-preview" className="font-tisa-pro lg:col-span-2" style={{ display: activeChapter === 4 ? 'block' : 'none' }}>
                <h2 className="text-midnight mb-6 font-bold text-h3">
                    The 20/20/20 formula ensures that waking up at 5:00 a.m. generates incredible results.
                </h2>
                <div className="text-dark-grey">
                    <p>Standing in the square at the bottom of Rome's famous Spanish Steps, the billionaire, the entrepreneur and the artist took in their surroundings.</p>
                    <p>It's time, the billionaire said, to learn how you can transform your creativity, performance, utility, wealth and productivity. Just rising at 5:00 a.m. alone won't do it. You could rise at 5:00 a.m. and waste an hour scanning social media and checking messages, but that won't optimize your day. What <em>will</em> is the 20/20/20 formula that says you use 20 minutes to move, 20 minutes to reflect and 20 minutes to grow.</p>
                </div>
                <button className="text-blue font-cera-pro">Read more</button>
            </section>
            <section data-test-id="chapter-preview" className="font-tisa-pro lg:col-span-2" style={{ display: activeChapter === 5 ? 'block' : 'none' }}>
                <h2 className="text-midnight mb-6 font-bold text-h3">
                    Embracing sleep and the "twin-cycle of elite performance" is essential to maximizing the potential of the 5 AM club.
                </h2>
                <div className="text-dark-grey">
                    <p>As the city of Rome slowly came to life, the billionaire, entrepreneur and artist ventured down into the depths of the city. As they descended down a dark and dusty tunnel, the billionaire announced that they were in the catacombs&nbsp;– underground passages used as burial grounds by the ancient Romans.</p>
                    <p>The artist asked why they were there and the billionaire explained that they were surrounded by people in a centuries-old-slumber, so it was an appropriate place to discuss the importance of deep sleep.</p>
                </div>
                <button className="text-blue font-cera-pro">Read more</button>
            </section>
        </>
    );
};

export default ChapterContent; 