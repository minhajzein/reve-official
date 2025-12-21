'use client'

import React from 'react'
import Image from 'next/image'
import { FaCircleCheck, FaRocket, FaShieldHalved, FaGlobe } from 'react-icons/fa6'

const features = [
    {
        title: 'Scalable Solutions',
        description: 'We build systems that grow with your business, ensuring seamless performance at any scale.',
        icon: FaRocket
    },
    {
        title: 'Enterprise Security',
        description: 'Your data is protected with industry-leading security protocols and best practices.',
        icon: FaShieldHalved
    },
    {
        title: 'Global Support',
        description: 'Our dedicated team provides round-the-clock support to keep your services running smoothly.',
        icon: FaGlobe
    },
    {
        title: 'Proven Excellence',
        description: 'We have a track record of delivering successful digital transformations across various industries.',
        icon: FaCircleCheck
    }
]

function WhyChooseUs() {
    return (
        <section className='w-full py-24 bg-background'>
            <div className='max-w-[1440px] mx-auto px-[20px] md:px-[80px]'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                    {/* Text Content */}
                    <div>
                        <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                            Why Partner with <span className='text-primary'>Reve Infotech</span>
                        </h2>
                        <p className='text-muted-foreground text-lg mb-10'>
                            We don't just build software; we build the future of your business. Our expertise in cutting-edge tech ensures you stay ahead.
                        </p>

                        <div className='space-y-8'>
                            {features.map((feature, index) => (
                                <div key={index} className='flex gap-4 group'>
                                    <div className='mt-1 shrink-0'>
                                        <div className='p-3 rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white'>
                                            <feature.icon className='size-5' />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-bold mb-1'>{feature.title}</h3>
                                        <p className='text-muted-foreground text-sm leading-relaxed'>
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className='relative h-[600px] rounded-[32px] overflow-hidden border border-border/40 group'>
                        <Image
                            src='/images/why-choose-us.png'
                            alt='Why Partner with Reve Infotech'
                            fill
                            className='object-cover transition-transform duration-700 group-hover:scale-105'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                        <div className='absolute bottom-8 left-8 right-8 p-8 bg-background/60 backdrop-blur-xl rounded-2xl border border-white/10'>
                            <p className='text-2xl font-bold text-white mb-2'>Empowering Innovation</p>
                            <p className='text-white/80 text-sm'>We provide the technical backbone for the world's most ambitious companies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs
