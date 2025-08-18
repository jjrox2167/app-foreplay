'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function AboutHeroSection() {
  return (
    

    <div className=" mt-15 bg-white dark:bg-gray-900">
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
              Foreplay is your all-in-one golf caddy companion.
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Foreplay makes golf more fun, on and off the course. From tracking your scores and stats to challenging friends and celebrating every birdie, our caddie companion keeps the game lighthearted while guiding you to play smarter. As you grow as a golfer, Foreplay grows with you—helping you improve round after round.
            </p>

            <div className="grid gap-6 mt-8 sm:grid-cols-2">
              {[
                'Premium selection',
                'Insurance',
                'All legal documents',
                'From US glasses dealers',
                'Payment Security',
                'Fast shipping (+ Express)',
              ].map((text) => (
                <div key={text} className="flex items-center text-gray-800 px-3 dark:text-gray-200">
                  <svg
                    className="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="mx-1">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-100 lg:w-1/2">
          <img
            className=" border-2 border-gray-700 object-cover w-full h-full max-w-2xl rounded-md"
            src="/images/aboutpage-putshot.jpg"
            alt="golfswing"
          />
        </div>
        </div>
    </div>

  );
}
