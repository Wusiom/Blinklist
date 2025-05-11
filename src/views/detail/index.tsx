import Introduce from './introduce'
import Article from './article'
import DetailIntroduce from './detail-introduce'
import SimiliarBook from './similiar-book'
import Comment from './comment'
import StatsSection from '../../components/StatsSection'
import TrialButton from '../../components/TrialButton'
import GoalsSection from './goals-section'
import Question from './question'
import TrainExplain from './train-explain'
import FeatureTitle from './feature-title'
import * as motion from "motion/react-client"
function Detail() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, transform: "translateY(-200px)" }}
                whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                transition={{ duration: 1 }}>
                <Introduce />
            </motion.div>
            <motion.div initial={{ opacity: 0, transform: "translateX(-100px)" }}
                whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                transition={{ type: "spring" }}>
                <Article />
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, transform: "translateX(200px)" }} whileInView={{ opacity: 1, transform: "translateX(0px)" }} transition={{ type: "spring", duration: 1 }}>
                <DetailIntroduce />
            </motion.div>
            <motion.div initial={{ opacity: 0, transform: "translateY(200px)" }} whileInView={{ opacity: 1, transform: "translateY(0px)" }} transition={{ type: "spring", duration: 1 }}>
                <SimiliarBook />
            </motion.div>
            <motion.div initial={{ opacity: 0, transform: "translateX(200px)" }} whileInView={{ opacity: 1, transform: "translateX(0px)" }} transition={{ type: "spring", duration: 1 }}>
                <Comment />
            </motion.div>
            <motion.div initial={{ opacity: 0, transform: "translateX(200px)" }} whileInView={{ opacity: 1, transform: "translateX(0px)" }} transition={{ type: "spring", duration: 1 }}>
                <SimiliarBook />
            </motion.div>
            <motion.div initial={{ opacity: 0, transform: "translateX(200px)" }} whileInView={{ opacity: 1, transform: "translateX(0px)" }} transition={{ type: "spring", duration: 1 }}>
                <StatsSection />
            </motion.div>
            <motion.div initial={{ opacity: 0, transform: "translateX(200px)" }} whileInView={{ opacity: 1, transform: "translateX(0px)" }} transition={{ type: "spring", duration: 1 }}>
                <div className="flex justify-center">
                    <TrialButton />
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, transform: "translateX(200px)" }} whileInView={{ opacity: 1, transform: "translateX(0px)" }} transition={{ type: "spring", duration: 1 }}>
                <GoalsSection />
            </motion.div>
            <motion.div initial={{ opacity: 0, transform: "translateX(200px)" }} whileInView={{ opacity: 1, transform: "translateX(0px)" }} transition={{ type: "spring", duration: 1 }}>
                <Question />
            </motion.div>
            <motion.div initial={{ opacity: 0, transform: "translateX(200px)" }} whileInView={{ opacity: 1, transform: "translateX(0px)" }} transition={{ type: "spring", duration: 1 }}>
                <TrainExplain />
            </motion.div>
            <motion.div initial={{ opacity: 0, transform: "translateX(200px)" }} whileInView={{ opacity: 1, transform: "translateX(0px)" }} transition={{ type: "spring", duration: 1 }}>
                <FeatureTitle />
            </motion.div>
        </>
    );
}

export default Detail;