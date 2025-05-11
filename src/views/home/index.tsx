import HomePart1 from './home-part1';
import HomePart2 from './home-part2';
import Interest from './interest';
import ScrollListening from './scroll-listening';
import ScrollCard from './scroll-card';
import JoinPart from './join-part';
import QuestionPart from './question-part';
import * as motion from "motion/react-client"
function Home() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, transform: "translateY(-120px)" }}
                whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                transition={{ duration: 1.2 }}>
                <HomePart1 />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, transform: "translateY(-120px)" }}
                whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                transition={{ duration: 1.2 }}>
                <HomePart2 />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: [700, 0], transition: { ease: ["easeIn", "easeOut"] } }}
                transition={{ duration: 2.2 }}>
                <Interest />
            </motion.div>
            <motion.div initial={{ opacity: 0, transform: "translateY(-120px)" }} whileInView={{ opacity: 1, transform: "translateX(0px)" }} transition={{ duration: 1.2 }}>
                <ScrollListening />
            </motion.div>
            <motion.div initial={{ opacity: 0, transform: "translateY(-120px)" }} whileInView={{ opacity: 1, transform: "translateX(0px)" }} transition={{ duration: 1.2 }}>
                <ScrollCard />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: [400, 0], transition: { ease: "easeInOut" } }}
                transition={{ duration: 2.5 }}>
                <JoinPart />
            </motion.div>
            <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { ease: ["easeIn", "easeOut"] } }}
                transition={{ duration: 2.2 }}
            >
                <QuestionPart />
            </motion.div>
        </>
    );
}

export default Home;