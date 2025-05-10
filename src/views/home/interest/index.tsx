import * as React from 'react';
import { 
    StarIcon, 
    ChartBarIcon, 
    BeakerIcon,
    HeartIcon,
    UserGroupIcon,
    CurrencyDollarIcon,
    ClockIcon,
    ChatBubbleLeftRightIcon,
    BuildingOfficeIcon,
    UserIcon,
    SparklesIcon,
    BanknotesIcon,
    CpuChipIcon,
    BoltIcon,
    HeartIcon as HeartIcon2,
    ComputerDesktopIcon,
    FaceSmileIcon,
    UserIcon as UserIcon2,
    GlobeAltIcon,
    CloudIcon,
    BriefcaseIcon,
    AcademicCapIcon,
    SparklesIcon as SparklesIcon2,
    PaintBrushIcon,
    BookOpenIcon
} from '@heroicons/react/24/outline';
import InterestSelector from './components/InterestSelector';

export interface Interest {
    id: string;
    label: string;
    icon: React.ReactNode;
}

export const interests: Interest[] = [
    {
        id: 'popular',
        label: 'Popular',
        icon: <StarIcon className="w-5 h-5" />
    },
    {
        id: 'marketing',
        label: 'Marketing & Sales',
        icon: <ChartBarIcon className="w-5 h-5" />
    },
    {
        id: 'science',
        label: 'Science',
        icon: <BeakerIcon className="w-5 h-5" />
    },
    {
        id: 'health',
        label: 'Health & Nutrition',
        icon: <HeartIcon className="w-5 h-5" />
    },
    {
        id: 'personal',
        label: 'Personal Development',
        icon: <UserGroupIcon className="w-5 h-5" />
    },
    {
        id: 'economics',
        label: 'Economics',
        icon: <CurrencyDollarIcon className="w-5 h-5" />
    },
    {
        id: 'history',
        label: 'History',
        icon: <ClockIcon className="w-5 h-5" />
    },
    {
        id: 'communication',
        label: 'Communication Skills',
        icon: <ChatBubbleLeftRightIcon className="w-5 h-5" />
    },
    {
        id: 'corporate',
        label: 'Corporate Culture',
        icon: <BuildingOfficeIcon className="w-5 h-5" />
    },
    {
        id: 'management',
        label: 'Management & Leadership',
        icon: <UserIcon className="w-5 h-5" />
    },
    {
        id: 'motivation',
        label: 'Motivation & Inspiration',
        icon: <SparklesIcon className="w-5 h-5" />
    },
    {
        id: 'money',
        label: 'Money & Investments',
        icon: <BanknotesIcon className="w-5 h-5" />
    },
    {
        id: 'psychology',
        label: 'Psychology',
        icon: <CpuChipIcon className="w-5 h-5" />
    },
    {
        id: 'productivity',
        label: 'Productivity',
        icon: <BoltIcon className="w-5 h-5" />
    },
    {
        id: 'relationships',
        label: 'Sex & Relationships',
        icon: <HeartIcon2 className="w-5 h-5" />
    },
    {
        id: 'technology',
        label: 'Technology & the Future',
        icon: <ComputerDesktopIcon className="w-5 h-5" />
    },
    {
        id: 'mindfulness',
        label: 'Mindfulness & Happiness',
        icon: <FaceSmileIcon className="w-5 h-5" />
    },
    {
        id: 'parenting',
        label: 'Parenting',
        icon: <UserIcon2 className="w-5 h-5" />
    },
    {
        id: 'society',
        label: 'Society & Culture',
        icon: <GlobeAltIcon className="w-5 h-5" />
    },
    {
        id: 'nature',
        label: 'Nature & the Environment',
        icon: <CloudIcon className="w-5 h-5" />
    },
    {
        id: 'career',
        label: 'Career & Success',
        icon: <BriefcaseIcon className="w-5 h-5" />
    },
    {
        id: 'education',
        label: 'Education',
        icon: <AcademicCapIcon className="w-5 h-5" />
    },
    {
        id: 'religion',
        label: 'Religion & Spirituality',
        icon: <SparklesIcon2 className="w-5 h-5" />
    },
    {
        id: 'creativity',
        label: 'Creativity',
        icon: <PaintBrushIcon className="w-5 h-5" />
    },
    {
        id: 'philosophy',
        label: 'Philosophy',
        icon: <BookOpenIcon className="w-5 h-5" />
    }
]; 
function Interest() {
    const [selectedInterest, setSelectedInterest] = React.useState('popular');
    return ( 
        <InterestSelector 
                selectedInterest={selectedInterest}
                onInterestChange={setSelectedInterest}
                interests={interests}
            />
     );
}

export default Interest;