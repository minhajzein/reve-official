'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineArrowOutward } from 'react-icons/md'

export interface BlogCardProps {
    title: string
    excerpt: string
    date: string
    image: string
    slug: string
}

const BlogCard = ({ title, excerpt, date, image, slug }: BlogCardProps) => {
    return (
        <div className='group bg-card border border-border/40 rounded-[28px] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5'>
            {/* Image Wrapper */}
            <div className='relative h-[220px] w-full overflow-hidden'>
                <Image
                    src={image}
                    alt={title}
                    fill
                    className='object-cover transition-transform duration-700 group-hover:scale-105'
                />
                <div className='absolute top-4 right-4'>
                    <span className='px-4 py-2 bg-black/60 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/10'>
                        {date}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className='p-8 space-y-4'>
                <h3 className='text-2xl font-bold line-clamp-2 group-hover:text-primary transition-colors'>
                    {title}
                </h3>
                <p className='text-muted-foreground text-sm line-clamp-3 leading-relaxed'>
                    {excerpt}
                </p>
                <Link
                    href={`/blog/${slug}`}
                    className='inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all cursor-pointer pt-2 group/link'
                >
                    Read Full Story
                    <MdOutlineArrowOutward className='size-5 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1' />
                </Link>
            </div>
        </div>
    )
}

export default BlogCard
