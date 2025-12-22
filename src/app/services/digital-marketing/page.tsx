'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaChartLine, FaMagnifyingGlassChart, FaBullhorn, FaRectangleAd, FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import { MdOutlineArrowOutward } from 'react-icons/md'

const features = [
    {
        icon: FaMagnifyingGlassChart,
        title: 'SEO Optimization',
        description: 'Boost your search rankings with technical SEO, content optimization, and link building strategies.'
    },
    {
        icon: FaBullhorn,
        title: 'Social Media Marketing',
        description: 'Engage your audience on Facebook, Instagram, LinkedIn, and other platforms with compelling content.'
    },
    {
        icon: FaRectangleAd,
        title: 'PPC Campaigns',
        description: 'Maximize ROI with targeted Google Ads and social media advertising campaigns.'
    },
    {
        icon: FaChartLine,
        title: 'Analytics & Reporting',
        description: 'Track performance with detailed analytics and actionable insights to optimize your campaigns.'
    }
]

const technologies = [
    { name: 'Google Analytics', category: 'Analytics' },
    { name: 'Google Ads', category: 'Advertising' },
    { name: 'SEMrush', category: 'SEO' },
    { name: 'Meta Ads', category: 'Social' },
    { name: 'Ahrefs', category: 'SEO' },
    { name: 'Mailchimp', category: 'Email' },
    { name: 'Hootsuite', category: 'Management' },
    { name: 'HubSpot', category: 'Automation' }
]

const process = [
    {
        step: '01',
        title: 'Market Research',
        description: 'Deep analysis of your industry, competitors, and target audience to identify opportunities.'
    },
    {
        step: '02',
        title: 'Strategy Development',
        description: 'Create comprehensive marketing plans with clear goals, KPIs, and channel strategies.'
    },
    {
        step: '03',
        title: 'Campaign Execution',
        description: 'Launch multi-channel campaigns with compelling content, precise targeting, and A/B testing.'
    },
    {
        step: '04',
        title: 'Performance Analysis',
        description: 'Monitor metrics, track conversions, and analyze campaign performance in real-time.'
    },
    {
        step: '05',
        title: 'Optimization',
        description: 'Continuously refine strategies based on data insights to maximize ROI and growth.'
    }
]

const faqs = [
    {
        question: 'What\'s the expected ROI from digital marketing?',
        answer: 'ROI varies by industry, budget, and campaign type, but our clients typically see 300-500% ROI. SEO delivers long-term organic growth, while PPC provides immediate results. We set realistic expectations during planning and provide monthly reports tracking your ROI and key metrics.'
    },
    {
        question: 'How long does it take to see results from SEO?',
        answer: 'SEO is a long-term strategy. You\'ll typically see initial improvements in 3-4 months, with significant results in 6-12 months. Quick wins come from technical SEO fixes, while content and link building compound over time. PPC campaigns show immediate results if you need faster visibility.'
    },
    {
        question: 'Which platforms should I advertise on?',
        answer: 'It depends on your audience and goals. B2B companies excel on LinkedIn and Google. E-commerce thrives on Facebook, Instagram, and Google Shopping. We analyze your target audience demographics and behavior to recommend the most effective platforms for your budget.'
    },
    {
        question: 'Do you handle content creation?',
        answer: 'Yes! We provide end-to-end content services including blog posts, social media content, ad copy, email campaigns, infographics, and video scripts. All content is optimized for SEO and tailored to your brand voice and audience.'
    },
    {
        question: 'How do you measure campaign success?',
        answer: 'We track KPIs aligned with your goals: website traffic, conversion rates, cost per acquisition, engagement rates, search rankings, and revenue attribution. You\'ll receive detailed monthly reports with actionable insights and recommendations for optimization.'
    }
]

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

function DigitalMarketingPage() {
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
                                Data-Driven <span className='text-primary'>Digital Marketing</span>
                            </h1>
                            <p className='text-base md:text-lg text-muted-foreground leading-relaxed mb-8'>
                                Accelerate your growth with targeted marketing strategies. We specialize in SEO, PPC,
                                social media, and content marketing to drive traffic and convert leads into customers.
                            </p>
                            <div className='flex flex-wrap gap-4'>
                                <Link href='/contact' className='px-8 h-12 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all flex items-center gap-2 text-base'>
                                    Get Started
                                    <MdOutlineArrowOutward className='size-5' />
                                </Link>
                                <button className='px-8 h-12 border border-border/40 rounded-2xl font-semibold hover:bg-secondary transition-all text-base'>
                                    Marketing Audit
                                </button>
                            </div>
                        </div>
                        <div className='relative h-[400px] lg:h-[500px]'>
                            <Image
                                src='/images/why-choose-us.png'
                                alt='Digital Marketing'
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
                            Our <span className='text-primary'>Marketing Services</span>
                        </h2>
                        <p className='text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
                            Comprehensive digital marketing solutions to grow your brand and drive measurable results.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {features.map((feature, index) => (
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
                            Our <span className='text-primary'>Marketing Stack</span>
                        </h2>
                        <p className='text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
                            We use powerful analytics and marketing tools to track performance and optimize campaigns.
                        </p>
                    </div>
                    <div className='flex flex-wrap gap-4 justify-center'>
                        {technologies.map((tech, index) => (
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
                            Our <span className='text-primary'>Marketing Process</span>
                        </h2>
                        <p className='text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
                            From strategy to execution, we follow a data-driven approach to deliver measurable results.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'>
                        {process.map((item, index) => (
                            <div key={index} className='relative'>
                                <div className='p-6 bg-card border border-border/40 rounded-3xl hover:shadow-xl hover:shadow-primary/5 transition-all h-full'>
                                    <div className='text-4xl md:text-5xl font-bold text-primary/20 mb-4'>{item.step}</div>
                                    <h3 className='text-lg font-bold mb-3'>{item.title}</h3>
                                    <p className='text-sm text-muted-foreground leading-relaxed'>{item.description}</p>
                                </div>
                                {index < process.length - 1 && (
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
                            Frequently Asked <span className='text-primary'>Questions</span>
                        </h2>
                        <p className='text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
                            Get answers to common questions about our digital marketing services.
                        </p>
                    </div>
                    <div className='max-w-3xl mx-auto space-y-4'>
                        {faqs.map((faq, index) => (
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
                            Ready to Grow Your <span className='text-primary'>Business</span>?
                        </h2>
                        <p className='text-base text-muted-foreground leading-relaxed mb-8'>
                            Let's create a marketing strategy that drives traffic, leads, and revenue.
                        </p>
                        <div className='flex flex-wrap gap-4 justify-center'>
                            <Link href='/contact' className='px-8 h-12 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all flex items-center gap-2 text-base'>
                                Get a Free Consultation
                                <MdOutlineArrowOutward className='size-5' />
                            </Link>
                            <Link href='/services' className='px-8 h-12 border border-border/40 rounded-2xl font-bold hover:bg-secondary transition-all text-base flex items-center'>
                                View All Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DigitalMarketingPage
