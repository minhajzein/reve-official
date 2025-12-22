'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { IconType } from 'react-icons'

interface ServiceCardProps {
    title: string
    description: string
    image: string
    icon: IconType
    tags: string[]
    stats: { label: string; value: string }[]
    slug: string
}

const ServiceCard = ({ title, description, image, icon: Icon, tags, stats, slug }: ServiceCardProps) => {
    return (
        <Link href={`/services/${slug}`} className='block group relative bg-card border border-border/40 rounded-[32px] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2'>
            {/* Image Section */}
            <div className='relative h-[240px] w-full overflow-hidden'>
                <Image
                    src={image}
                    alt={title}
                    fill
                    className='object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />

                {/* Category Tags */}
                <div className='absolute top-4 left-4 flex gap-2'>
                    {tags.map((tag, i) => (
                        <span key={i} className='px-3 py-1 text-[12px] font-medium bg-primary/20 backdrop-blur-md text-primary rounded-full border border-primary/30'>
                            {tag}
                        </span>
                    ))}
                </div>

                <div className='absolute bottom-4 left-4'>
                    <div className='flex items-center gap-2 text-white'>
                        <div className='p-2 bg-primary rounded-lg'>
                            <Icon className='size-5' />
                        </div>
                        <h3 className='text-xl font-bold'>{title}</h3>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className='p-6 space-y-4'>
                <p className='text-muted-foreground text-sm line-clamp-2 leading-relaxed'>
                    {description}
                </p>

                {/* Tech Specs/Stats */}
                <div className='grid grid-cols-2 gap-4 py-4 border-y border-border/40'>
                    {stats.map((stat, i) => (
                        <div key={i} className='space-y-1'>
                            <p className='text-[10px] uppercase tracking-wider text-muted-foreground font-bold'>{stat.label}</p>
                            <p className='text-sm font-semibold text-foreground'>{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <button className='w-full py-3 rounded-xl bg-secondary hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn font-medium cursor-pointer'>
                    Learn More
                    <MdOutlineArrowOutward className='size-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1' />
                </button>
            </div>
        </Link>
    )
}

export default ServiceCard
