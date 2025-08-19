"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "flowbite";



const items = [
  {
    position: 0,
    el: document.getElementById("carousel-item-1"),
  },
  {
    position: 1,
    el: document.getElementById("carousel-item-2"),
  },
  {
    position: 2,
    el: document.getElementById("carousel-item-3"),
  },
  {
    position: 3,
    el: document.getElementById("carousel-item-4"),
  },
];

// options with default values
const options = {
  defaultPosition: 1,
  interval: 3000,

  indicators: {
    activeClasses: "bg-white dark:bg-gray-800",
    inactiveClasses:
      "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
    items: [
      {
        position: 0,
        el: document.getElementById("carousel-indicator-1"),
      },
      {
        position: 1,
        el: document.getElementById("carousel-indicator-2"),
      },
      {
        position: 2,
        el: document.getElementById("carousel-indicator-3"),
      },
      {
        position: 3,
        el: document.getElementById("carousel-indicator-4"),
      },
    ],
  },

  // callback functions
  onNext: () => {
    console.log("next slider item is shown");
  },
  onPrev: () => {
    console.log("previous slider item is shown");
  },
  onChange: () => {
    console.log("new slider item has been shown");
  },
};

// instance options object
const instanceOptions = {
  id: "carousel-item-1",
  override: true,
};

const AboutHeroSection = () => {
  return (
    <div className=" mt-15 bg-white dark:bg-gray-900">
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
              Foreplay is your all-in-one golf caddy companion.
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Foreplay makes golf more fun, on and off the course. From tracking
              your scores and stats to challenging friends and celebrating every
              birdie, our caddie companion keeps the game lighthearted while
              guiding you to play smarter. As you grow as a golfer, Foreplay
              grows with you—helping you improve round after round.
            </p>

            <div className="grid gap-6 mt-8 sm:grid-cols-2">
              {[
                "Premium selection",
                "Insurance",
                "All legal documents",
                "From US glasses dealers",
                "Payment Security",
                "Fast shipping (+ Express)",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-center text-gray-800 px-3 dark:text-gray-200"
                >
                  <svg
                    className="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="mx-1">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          id="indicators-carousel"
          className="relative w-full"
          data-carousel="slide"
        >
          {/*<!-- Carousel wrapper -->*/}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {/*<!-- ITEM #1 -->*/}
            <div
              id="carousel-item-1"
              className="hidden duration-700 ease-in-out"
              data-carousel-item="active"
            >
              <Image
                src="/images/carousel/carousel_1.jpg"
                width={700}
                height={600}
                className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/*<!-- ITEM #2 -->*/}
            <div
              id="carousel-item-2"
              className="hidden duration-700 ease-in-out"
              data-carousel-item=""
            >
              <Image
                src="/images/carousel/carousel_2.jpg"
                width={700}
                height={600}
                className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/*<!-- ITEM #3 -->*/}
            <div
              id="carousel-item-3"
              className="hidden duration-700 ease-in-out"
              data-carousel-item=""
            >
              <Image
                src="/images/carousel/carousel_3.jpg"
                width={700}
                height={600}
                className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/*<!-- ITEM #4 -->*/}
            <div
              id="carousel-item-4"
              className="hidden duration-700 ease-in-out"
              data-carousel-item=""
            >
              <Image
                src="/images/carousel/carousel_4.jpg"
                width={700}
                height={600}
                className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/*<!-- ITEM #5 -->*/}
            <div
              id="carousel-item-5"
              className="hidden duration-700 ease-in-out"
              data-carousel-item=""
            >
              <Image
                src="/images/carousel/carousel_5.jpg"
                width={700}
                height={600}
                className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
          {/*<!-- Slider indicators -->*/}
        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
         </div>

          {/*<!-- Slider controls -->*/}
          <button
            type="button"
            className="absolute top-1/2 left-4 z-30 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-gray-700/60 hover:bg-green-600 text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            data-carousel-prev
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </button>
          <button
            type="button"
            className="absolute top-1/2 right-4 z-30 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-gray-700/60 hover:bg-green-600 text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            data-carousel-next
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
