import FeaturesAppStoreCTA from '@/sections/FeaturesAppStoreCTA'
import FeaturesFeatureSection from '@/sections/FeaturesFeatureSection'
import FeaturesHeroSection from '@/sections/FeaturesHeroSection'
import React from 'react'

export default function FeaturesPage() {
  return (
    <div className="bg-gray-900 py-16">
   <FeaturesHeroSection /> 
    <FeaturesFeatureSection />
    <FeaturesAppStoreCTA/>
    </div>
  )
}
