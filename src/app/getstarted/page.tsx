import AboutHeroSection from '@/sections/AboutHeroSection'
import React from 'react'

export default function GetStartedPage() {
  return (
    <div className='flex flex-col bg-gray-900 mt-16'>
        <section className="bg-white dark:bg-gray-900">
        <AboutHeroSection />
        </section>
        <section>
            <h1>Hello!</h1>
        </section>
    </div>
  )
}
