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
function Detail() {
    return ( 
        <>
            <Introduce />
            <Article />
            <DetailIntroduce />
            <SimiliarBook />
            <Comment />
            <SimiliarBook />
            <StatsSection />
            <div className="flex justify-center">
                <TrialButton/>
            </div>
            <GoalsSection />
            <Question/>\
            <TrainExplain/>
            <FeatureTitle/>
        </>
    );
}

export default Detail;