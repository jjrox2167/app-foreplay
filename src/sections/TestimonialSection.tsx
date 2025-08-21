import React from 'react'
import Image from 'next/image'


const TestimonialSection = () => {
  return (
    <div>
        <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            What our <span className="text-blue-500 ">players</span> think about us
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error
            alias, adipisci rem similique, at omnis eligendi optio eos harum.
        </p>

        <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 border rounded-lg dark:border-gray-700">
                <p className="leading-loose text-gray-500 dark:text-gray-400">
                    &ldquo;Foreplay completely changed how I approach my rounds. Tracking my stats showed me exactly where I was losing strokes — now I&apos;m finally breaking 90!&ldquo;
                </p>

                <div className="flex items-center mt-8 -mx-2">
                    <Image
                        src="/images/TestimonialHeadshot-1.jpg" 
                        width={56}
                        height={56}
                        className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                        alt="">  
                    </Image>
                    <div className="mx-2">
                        <h1 className="font-semibold text-gray-800 dark:text-white">Jake T.</h1>
                        <span className="text-sm text-gray-500">Weekend Golfer</span>
                    </div>
                </div>
            </div>

            <div className="p-8 border rounded-lg dark:border-gray-700">
                <p className="leading-loose text-gray-500 dark:text-gray-400">
                    &ldquo;I love how easy it is to book tee times and manage my schedule. No more group text chaos — Foreplay keeps everything in one place.&ldquo;
                </p>

                <div className="flex items-center mt-8 -mx-2">
                   <Image
                        src="/images/TestimonialHeadshot-1.jpg" 
                        width={5}
                        height={5}
                        className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                        alt="">  
                    </Image>
                    <div className="mx-2">
                        <h1 className="font-semibold text-gray-800 dark:text-white">Allison M.</h1>
                        <span className="text-sm text-gray-500">League Player</span>
                    </div>
                </div>
            </div>

            <div className="p-8 border rounded-lg dark:border-gray-700">
                <p className="leading-loose text-gray-500 dark:text-gray-400">
                    &ldquo;The app makes it so simple to find friends to play with. I’ve connected with golfers in my area I never would’ve met otherwise.&ldquo;
                </p>

                <div className="flex items-center mt-8 -mx-2">
                    <Image
                        src="/images/TestimonialHeadshot-1.jpg" 
                        width={56}
                        height={56}
                        className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                        alt="">  
                    </Image>
                    <div className="mx-2">
                        <h1 className="font-semibold text-gray-800 dark:text-white">Beckham S. </h1>
                        <span className="text-sm text-gray-500">Social/Casual Golfer</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</section>
    </div>
  )
}

export default TestimonialSection