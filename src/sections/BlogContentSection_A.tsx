import React from 'react'
import Image from 'next/image'

const BlogContentSection_A
 = () => {
  return (
    
        <section className="bg-white dark:bg-gray-900">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Check Out Our Latest Posts</h2>
            <p className="mb-4">Foreplay is more than just a golf app — it’s your personal caddie, scorekeeper, and performance coach all in one. 
                <br  />
                <br  />
                Whether you’re tracking rounds with friends, analyzing your swing stats, or finding new ways to lower your handicap, Foreplay makes it easy to improve your game while having fun.
                <br  />
                <br  />
                In our latest posts, we’ll share tips, stories, and insights from the world of golf to help you get the most out of both the app and your time on the course.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
                src="/images/blog-golfhole.jpg" alt="office content 1" 
                width={500}
                height={500}
                className="w-full rounded-lg" 
                />
            
            <Image 
            src="/images/blog-bunkershot.jpg" alt="office content 2" 
            width={500}
            height={500}
            className="mt-4 w-full lg:mt-10 rounded-lg" 
            />
        </div>
    </div>
</section>
  )
}

export default BlogContentSection_A
