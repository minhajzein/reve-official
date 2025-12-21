'use client'

import React, { useCallback } from 'react'
import Link from 'next/link'
import BlogCard from './BlogCard'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import useEmblaCarousel from 'embla-carousel-react'

const latestBlogs = [
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
    }
]

function BlogSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        containScroll: 'trimSnaps',
        dragFree: true
    })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <section className='py-24 bg-background overflow-hidden border-t border-border/10'>
            <div className='max-w-[1440px] mx-auto px-[20px] md:px-[80px]'>
                <div className='flex flex-col md:flex-row justify-between items-end gap-6 mb-16'>
                    <div className='max-w-2xl'>
                        <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                            Insights & <span className='text-primary'>Innovation</span>
                        </h2>
                        <p className='text-muted-foreground text-lg'>
                            Stay updated with the latest trends in technology, design, and business growth from the Reve Infotech team.
                        </p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='flex gap-2 mr-4'>
                            <button
                                onClick={scrollPrev}
                                className='size-12 rounded-full border border-border/40 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer'
                            >
                                <FaChevronLeft className='size-5' />
                            </button>
                            <button
                                onClick={scrollNext}
                                className='size-12 rounded-full border border-border/40 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer'
                            >
                                <FaChevronRight className='size-5' />
                            </button>
                        </div>
                        <Link href='/blog' className='flex items-center gap-2 px-6 py-3 border border-border/40 rounded-xl hover:bg-card transition-all font-medium cursor-pointer'>
                            View All Articles
                            <MdOutlineArrowOutward className='size-5' />
                        </Link>
                    </div>
                </div>

                <div className='embla overflow-hidden' ref={emblaRef}>
                    <div className='flex gap-8'>
                        {latestBlogs.map((blog, i) => (
                            <div key={i} className='flex-[0_0_100%] md:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.33%-22px)] min-w-0'>
                                <BlogCard {...blog} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogSection
