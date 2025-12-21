'use client'

import React from 'react'

const steps = [
    {
        number: '01',
        title: 'Discovery & Strategy',
        description: 'We dive deep into your business goals, target audience, and technical requirements to create a comprehensive project roadmap.'
    },
    {
        number: '02',
        title: 'Architecture & Design',
        description: 'Our team designs intuitive user interfaces and scales technical architectures that ensure long-term stability and performance.'
    },
    {
        number: '03',
        title: 'Development & Testing',
        description: 'We build your solution using modern tech stacks, following agile methodologies and rigorous quality assurance standards.'
    },
    {
        number: '04',
        title: 'Launch & Optimization',
        description: 'After a successful deployment, we continuously monitor and optimize your product to ensure it stays ahead of the curve.'
    }
]

function ProcessRoadmap() {
    return (
        <section className='w-full py-24 bg-card'>
            <div className='max-w-[1440px] mx-auto px-[20px] md:px-[80px]'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                        Our <span className='text-primary'>Process</span>
                    </h2>
                    <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
                        A streamlined, transparent approach to bringing your digital vision to life with precision and efficiency.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative'>
                    {/* Desktop Connecting Line */}
                    <div className='hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-border to-transparent' />

                    {steps.map((step, index) => (
                        <div key={index} className='relative flex flex-col items-center text-center group'>
                            <div className='size-[80px] rounded-full bg-background border-2 border-primary flex items-center justify-center text-2xl font-bold text-primary mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white z-10'>
                                {step.number}
                            </div>
                            <h3 className='text-xl font-bold mb-3'>{step.title}</h3>
                            <p className='text-muted-foreground text-sm leading-relaxed'>
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProcessRoadmap
