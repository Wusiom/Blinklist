import HomePart1 from './home-part1';
import HomePart2 from './home-part2';
import Interest from './interest';
import ScrollListening from './scroll-listening';
import ScrollCard from './scroll-card';
import JoinPart from './join-part';
import QuestionPart from './question-part';
function Home() {
    return (
        <>
            <HomePart1 />
            <HomePart2 />
            <Interest />
            <ScrollListening/>
            <ScrollCard/>
            <JoinPart/>
            <QuestionPart/>
        </>
    );
}

export default Home;