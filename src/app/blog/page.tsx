import BlogContentSection_A from '@/sections/BlogContentSection_A'
import BlogHeroSection from '@/sections/BlogHeroSection'
import BlogSectionCard from '@/sections/BlogSectionCard'
import ComingSoonSection from '@/sections/ComingSoonSection'
import React from 'react'


export default function BlogPage() {
  return (
    <div className=" mx-auto bg-gray-900 py-12">
        <BlogContentSection_A />
        <BlogSectionCard />
        <ComingSoonSection />
        
    </div>
    
  )
}
