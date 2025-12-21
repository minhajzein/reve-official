'use client'

import React from 'react'
import BlogCard from '../components/blog/BlogCard'

const allPosts = [
    {
        title: 'The Future of AI in Enterprise Solutions',
        excerpt: 'Explore how artificial intelligence is resizing the business landscape, from automated workflows to predictive analytics.',
        date: 'Dec 21, 2023',
        image: '/images/ai-ml.png',
        slug: 'future-of-ai'
    },
    {
        title: 'Cloud Security Best Practices for 2025',
        excerpt: 'As cyber threats evolve, staying ahead with robust cloud security is non-negotiable. Here are our top strategies.',
        date: 'Dec 18, 2023',
        image: '/images/cloud.png',
        slug: 'cloud-security'
    },
    {
        title: 'Building Scalable Mobile Apps with Flutter',
        excerpt: 'Why we choose Flutter for cross-platform excellence and how it helps scale mobile products globally.',
        date: 'Dec 15, 2023',
        image: '/images/software-dev.png',
        slug: 'scalable-mobile-apps'
    },
    {
        title: 'Cyber Security: The Front Line of Defense',
        excerpt: 'Protecting your data in an increasingly connected world. Why encryption and EDR are the new standard.',
        date: 'Dec 12, 2023',
        image: '/images/vision.png',
        slug: 'cyber-security-defense'
    }
]

function BlogArchive() {
    return (
        <main className='w-full bg-background pt-32 pb-24'>
            <div className='max-w-[1440px] mx-auto px-[20px] md:px-[80px]'>
                <div className='text-center mb-20 max-w-3xl mx-auto'>
                    <h1 className='text-5xl md:text-7xl font-bold mb-6'>
                        Inside <span className='text-primary'>Reve</span> Insights
                    </h1>
                    <p className='text-muted-foreground text-xl leading-relaxed'>
                        Deep dives into technology, strategy, and the future of digital innovation.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {allPosts.map((blog, i) => (
                        <BlogCard key={i} {...blog} />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default BlogArchive
