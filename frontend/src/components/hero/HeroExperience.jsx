import React from 'react';
import HeroContent from './HeroContent';
import TitledImage from './TitledImage';
import OwnerImage from './OwnerImage';
import ActiveMember from './ActiveMember';

const HeroExperience = () => {
    return (
        <section className="section tw-w-full tw-h-[775px] tw-relative tw-overflow-hidden"
            style={{
                backgroundColor: 'rgba(191, 234, 121, 1)'
            }}
        >
            {/* Hero Content */}
            <HeroContent />

            {/* Tilted Image */}
            <TitledImage />

            {/* Owner Image and Thread Line */}
            <OwnerImage />

            {/* Active Members */}
            <ActiveMember />
        </section>
    );
};

export default HeroExperience;