'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, notFound } from 'next/navigation'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import { servicesData } from '@/lib/services-data'

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='border border-border/40 rounded-2xl overflow-hidden bg-card'>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='w-full p-6 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors'
            >
                <h3 className='text-lg font-semibold pr-4'>{question}</h3>
                {isOpen ? (
                    <FaChevronUp className='size-5 text-primary flex-shrink-0' />
                ) : (
                    <FaChevronDown className='size-5 text-muted-foreground flex-shrink-0' />
                )}
            </button>
            {isOpen && (
                <div className='px-6 pb-6'>
                    <p className='text-muted-foreground leading-relaxed'>{answer}</p>
                </div>
            )}
        </div>
    )
}

function ServiceDetail() {
    const { slug } = useParams()
    const service = servicesData[slug as keyof typeof servicesData]

    if (!service) {
        return notFound()
    }

    return (
        <main className='w-full bg-background'>
            {/* Hero Section */}
            <section className='relative pt-20 pb-24 overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent' />
                <div className='max-w-[1440px] mx-auto px-[20px] md:px-[80px] relative z-10'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <div>
                            <Link href='/services' className='inline-flex items-center gap-2 text-primary hover:underline mb-6'>
                                ← Back to Services
                            </Link>
                            <h1 className='text-3xl md:text-5xl font-extrabold tracking-tight mb-6'>
                                {service.hero.titlePart1} <span className='text-primary'>{service.hero.titlePart2}</span> {service.hero.titlePart3}
                            </h1>
                            <p className='text-base md:text-lg text-muted-foreground leading-relaxed mb-8'>
                                {service.hero.subtitle}
                            </p>
                            <div className='flex flex-wrap gap-4'>
                                <Link href='/contact' className='px-8 h-12 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all flex items-center gap-2 text-base'>
                                    {service.hero.ctaPrimary}
                                    <MdOutlineArrowOutward className='size-5' />
                                </Link>
                                <button className='px-8 h-12 border border-border/40 rounded-2xl font-semibold hover:bg-secondary transition-all text-base'>
                                    {service.hero.ctaSecondary}
                                </button>
                            </div>
                        </div>
                        <div className='relative h-[400px] lg:h-[500px]'>
                            <Image
                                src={service.hero.image}
                                alt={service.title}
                                fill
                                className='object-contain [mask-image:radial-gradient(circle_at_center,black_30%,transparent_70%)]'
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className='py-24 bg-secondary/30'>
                <div className='max-w-[1440px] mx-auto px-[20px] md:px-[80px]'>
                    <div className='text-center mb-16'>
                        <h2 className='text-2xl md:text-4xl font-bold mb-4'>
                            {service.features.titlePart1} <span className='text-primary'>{service.features.titlePart2}</span>
                        </h2>
                        <p className='text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
                            {service.features.subtitle}
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {service.features.items.map((feature, index) => (
                            <div key={index} className='p-8 bg-card border border-border/40 rounded-3xl hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group'>
                                <div className='size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all'>
                                    <feature.icon className='size-8 text-primary group-hover:text-white transition-colors' />
                                </div>
                                <h3 className='text-lg font-bold mb-3'>{feature.title}</h3>
                                <p className='text-sm text-muted-foreground leading-relaxed'>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className='py-24'>
                <div className='max-w-[1440px] mx-auto px-[20px] md:px-[80px]'>
                    <div className='text-center mb-16'>
                        <h2 className='text-2xl md:text-4xl font-bold mb-4'>
                            {service.technologies.titlePart1} <span className='text-primary'>{service.technologies.titlePart2}</span>
                        </h2>
                        <p className='text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
                            {service.technologies.subtitle}
                        </p>
                    </div>
                    <div className='flex flex-wrap gap-4 justify-center'>
                        {service.technologies.items.map((tech, index) => (
                            <div key={index} className='px-6 py-3 bg-card border border-border/40 rounded-full hover:border-primary hover:bg-primary/5 transition-all'>
                                <span className='font-semibold'>{tech.name}</span>
                                <span className='text-muted-foreground text-sm ml-2'>• {tech.category}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className='py-24 bg-secondary/30'>
                <div className='max-w-[1440px] mx-auto px-[20px] md:px-[80px]'>
                    <div className='text-center mb-16'>
                        <h2 className='text-2xl md:text-4xl font-bold mb-4'>
                            {service.process.titlePart1} <span className='text-primary'>{service.process.titlePart2}</span>
                        </h2>
                        <p className='text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
                            {service.process.subtitle}
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'>
                        {service.process.steps.map((item, index) => (
                            <div key={index} className='relative'>
                                <div className='p-6 bg-card border border-border/40 rounded-3xl hover:shadow-xl hover:shadow-primary/5 transition-all h-full'>
                                    <div className='text-4xl md:text-5xl font-bold text-primary/20 mb-4'>{item.step}</div>
                                    <h3 className='text-lg font-bold mb-3'>{item.title}</h3>
                                    <p className='text-sm text-muted-foreground leading-relaxed'>{item.description}</p>
                                </div>
                                {index < service.process.steps.length - 1 && (
                                    <div className='hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30' />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className='py-24'>
                <div className='max-w-[1440px] mx-auto px-[20px] md:px-[80px]'>
                    <div className='text-center mb-16'>
                        <h2 className='text-2xl md:text-4xl font-bold mb-4'>
                            {service.faqs.titlePart1} <span className='text-primary'>{service.faqs.titlePart2}</span>
                        </h2>
                        <p className='text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
                            {service.faqs.subtitle}
                        </p>
                    </div>
                    <div className='max-w-3xl mx-auto space-y-4'>
                        {service.faqs.items.map((faq, index) => (
                            <FAQItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent'>
                <div className='max-w-[1440px] mx-auto px-[20px] md:px-[80px]'>
                    <div className='text-center max-w-3xl mx-auto'>
                        <h2 className='text-2xl md:text-4xl font-bold mb-6'>
                            {service.cta.titlePart1} <span className='text-primary'>{service.cta.titlePart2}</span>?
                        </h2>
                        <p className='text-base text-muted-foreground leading-relaxed mb-8'>
                            {service.cta.subtitle}
                        </p>
                        <div className='flex flex-wrap gap-4 justify-center'>
                            <Link href='/contact' className='px-8 h-12 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all flex items-center gap-2 text-base'>
                                {service.cta.primaryText}
                                <MdOutlineArrowOutward className='size-5' />
                            </Link>
                            <Link href='/services' className='px-8 h-12 border border-border/40 rounded-2xl font-bold hover:bg-secondary transition-all text-base flex items-center'>
                                {service.cta.secondaryText}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ServiceDetail
