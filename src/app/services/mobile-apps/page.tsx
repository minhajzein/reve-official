'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaMobile, FaApple, FaAndroid, FaBell, FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import { MdOutlineArrowOutward } from 'react-icons/md'

const features = [
    {
        icon: FaMobile,
        title: 'Cross-Platform Development',
        description: 'Build once, deploy everywhere. Save time and costs with unified codebase for iOS and Android.'
    },
    {
        icon: FaApple,
        title: 'Native Performance',
        description: 'Deliver smooth, responsive experiences that feel native to each platform.'
    },
    {
        icon: FaBell,
        title: 'Push Notifications',
        description: 'Keep users engaged with real-time updates and personalized notifications.'
    },
    {
        icon: FaAndroid,
        title: 'Intuitive UI/UX',
        description: 'Beautiful interfaces designed following platform-specific guidelines for optimal user experience.'
    }
]

const technologies = [
    { name: 'Flutter', category: 'Framework' },
    { name: 'React Native', category: 'Framework' },
    { name: 'Firebase', category: 'Backend' },
    { name: 'iOS SDK', category: 'Native' },
    { name: 'Android SDK', category: 'Native' },
    { name: 'Redux', category: 'State Management' },
    { name: 'GraphQL', category: 'API' },
    { name: 'SQLite', category: 'Database' }
]

const process = [
    {
        step: '01',
        title: 'Ideation & Strategy',
        description: 'We collaborate with you to refine your app concept, define target users, and create a strategic roadmap.'
    },
    {
        step: '02',
        title: 'UI/UX Design',
        description: 'Our designers craft intuitive, beautiful interfaces that users love, with interactive prototypes for testing.'
    },
    {
        step: '03',
        title: 'Development',
        description: 'Expert developers build your app using best practices, ensuring quality code and smooth performance.'
    },
    {
        step: '04',
        title: 'Testing & QA',
        description: 'Comprehensive testing on real devices ensures your app works flawlessly across all platforms and scenarios.'
    },
    {
        step: '05',
        title: 'Launch & Support',
        description: 'We handle app store submission and provide ongoing updates, maintenance, and feature enhancements.'
    }
]

const faqs = [
    {
        question: 'Should I build native or cross-platform mobile apps?',
        answer: 'It depends on your requirements. Cross-platform (Flutter/React Native) is cost-effective and faster for most cases. Native is best for apps needing platform-specific features or maximum performance. We help you choose the right approach.'
    },
    {
        question: 'How long does mobile app development take?',
        answer: 'A typical mobile app takes 8-16 weeks from concept to launch, depending on complexity and features. We provide detailed timelines during the planning phase and keep you updated throughout development.'
    },
    {
        question: 'Do you handle app store submission?',
        answer: 'Yes! We manage the entire submission process for both Apple App Store and Google Play Store, including preparing all required assets, descriptions, and handling the review process.'
    },
    {
        question: 'Can you add features to an existing app?',
        answer: 'Absolutely. We can enhance existing apps with new features, improve performance, fix bugs, or completely redesign the UI/UX. We work with apps built in any technology stack.'
    },
    {
        question: 'What about app maintenance and updates?',
        answer: 'We offer comprehensive maintenance packages including OS compatibility updates, security patches, bug fixes, performance optimization, and new feature development to keep your app competitive.'
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

function MobileAppsPage() {
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
                                Native & Cross-Platform <span className='text-primary'>Mobile Excellence</span>
                            </h1>
                            <p className='text-base md:text-lg text-muted-foreground leading-relaxed mb-8'>
                                We create engaging mobile experiences for iOS and Android using Flutter and React Native.
                                Our apps combine beautiful design with powerful functionality to keep users coming back.
                            </p>
                            <div className='flex flex-wrap gap-4'>
                                <Link href='/contact' className='px-8 h-12 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all flex items-center gap-2 text-base'>
                                    Get Started
                                    <MdOutlineArrowOutward className='size-5' />
                                </Link>
                                <button className='px-8 h-12 border border-border/40 rounded-2xl font-semibold hover:bg-secondary transition-all text-base'>
                                    View App Portfolio
                                </button>
                            </div>
                        </div>
                        <div className='relative h-[400px] lg:h-[500px]'>
                            <Image
                                src='/images/service-mobile-apps.png'
                                alt='Mobile App Development'
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
                            Why Choose Our <span className='text-primary'>Mobile Apps</span>
                        </h2>
                        <p className='text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
                            We build mobile applications that users love, combining stunning design with seamless performance.
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
                            Our <span className='text-primary'>Tech Stack</span>
                        </h2>
                        <p className='text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
                            We leverage the best mobile development technologies to build robust, scalable applications.
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
                            Our <span className='text-primary'>Development Process</span>
                        </h2>
                        <p className='text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
                            From concept to app store, we follow a proven process that delivers exceptional results.
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
                            Get answers to common questions about our mobile app development services.
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
                            Ready to Launch Your <span className='text-primary'>Mobile App</span>?
                        </h2>
                        <p className='text-base text-muted-foreground leading-relaxed mb-8'>
                            Let's turn your app idea into reality. Get a free consultation and project estimate today.
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

export default MobileAppsPage
