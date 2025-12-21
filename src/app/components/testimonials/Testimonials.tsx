'use client'

import React, { useCallback } from 'react'
import Image from 'next/image'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const testimonials = [
    {
        name: 'Alexander Chen',
        position: 'CTO, TechFlow Systems',
        comment: 'Reve transformed our legacy architecture into a high-scale cloud system. Their expertise in AI integration was a game-changer for our data processing.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'
    },
    {
        name: 'Sarah Jenkins',
        position: 'Product Head, Innovately',
        comment: 'The mobile app developed by Reve exceeded our expectations. The UI is stunning, and the performance is flawless across all devices. Highly recommended!',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    },
    {
        name: 'Michael Rodriguez',
        position: 'Founder, CloudScale',
        comment: 'Working with Reve was a seamless experience. Their agile approach and transparent communication made the development of our platform efficient and robust.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike'
    },
    {
        name: 'Priya Sharma',
        position: 'Operations Director, GlobalLogistics',
        comment: 'Reve Infotech built a custom CRM that streamlined our operations globally. Their ability to understand business needs is unmatched.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya'
    }
]

function Testimonials() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <section className='w-full py-24 bg-card overflow-hidden'>
            <div className='max-w-[1440px] mx-auto px-[20px] md:px-[80px]'>
                <div className='flex flex-col md:flex-row justify-between items-end mb-16 gap-6'>
                    <div className='text-left max-w-2xl'>
                        <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                            Client <span className='text-primary'>Success</span> Stories
                        </h2>
                        <p className='text-muted-foreground text-lg'>
                            Don't just take our word for it. Here's what industry leaders have to say about partnering with Reve Infotech.
                        </p>
                    </div>
                    <div className='flex gap-2'>
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
                </div>

                <div className='embla overflow-hidden' ref={emblaRef}>
                    <div className='flex gap-8'>
                        {testimonials.map((t, i) => (
                            <div key={i} className='flex-[0_0_100%] md:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.33%-22px)] min-w-0'>
                                <div className='p-8 h-full rounded-[32px] bg-background border border-border/40 relative group hover:border-primary/40 transition-all duration-300'>
                                    <FaQuoteLeft className='text-primary/20 size-12 absolute top-8 right-8' />
                                    <p className='text-foreground/90 text-[16px] leading-relaxed mb-8 relative z-10'>
                                        "{t.comment}"
                                    </p>
                                    <div className='flex items-center gap-4'>
                                        <div className='relative size-12 rounded-full overflow-hidden border-2 border-primary/20'>
                                            <Image
                                                src={t.image}
                                                alt={t.name}
                                                fill
                                                className='object-cover'
                                            />
                                        </div>
                                        <div>
                                            <p className='font-bold text-foreground'>{t.name}</p>
                                            <p className='text-xs text-muted-foreground'>{t.position}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
