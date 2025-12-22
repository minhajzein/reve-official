'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaComputer, FaRocket, FaMobile, FaChartLine, FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import { MdOutlineArrowOutward } from 'react-icons/md'

const features = [
    {
        icon: FaMobile,
        title: 'Responsive Design',
        description: 'Pixel-perfect interfaces that work seamlessly across all devices and screen sizes.'
    },
    {
        icon: FaChartLine,
        title: 'SEO Optimized',
        description: 'Built-in SEO best practices to ensure your website ranks high on search engines.'
    },
    {
        icon: FaRocket,
        title: 'High Performance',
        description: 'Lightning-fast load times with optimized code and modern web technologies.'
    },
    {
        icon: FaComputer,
        title: 'Scalable Architecture',
        description: 'Future-proof solutions that grow with your business needs.'
    }
]

const technologies = [
    { name: 'Next.js', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Express', category: 'Backend' }
]

const process = [
    {
        step: '01',
        title: 'Discovery & Planning',
        description: 'We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap.'
    },
    {
        step: '02',
        title: 'Design & Prototyping',
        description: 'Our designers create stunning UI/UX mockups and interactive prototypes for your approval.'
    },
    {
        step: '03',
        title: 'Development',
        description: 'Our expert developers build your application using cutting-edge technologies and best practices.'
    },
    {
        step: '04',
        title: 'Testing & QA',
        description: 'Rigorous testing ensures your application is bug-free, secure, and performs flawlessly.'
    },
    {
        step: '05',
        title: 'Deployment & Support',
        description: 'We deploy your application and provide ongoing support and maintenance to keep it running smoothly.'
    }
]

const faqs = [
    {
        question: 'How long does it take to build a custom web application?',
        answer: 'The timeline varies based on complexity and requirements. A typical web application takes 6-12 weeks from discovery to deployment. We provide detailed timeline estimates during the planning phase.'
    },
    {
        question: 'What technologies do you use for web development?',
        answer: 'We specialize in modern frameworks like Next.js, React, and Node.js. Our tech stack is chosen based on your specific requirements, ensuring optimal performance and scalability.'
    },
    {
        question: 'Do you provide ongoing maintenance and support?',
        answer: 'Yes! We offer comprehensive maintenance packages including security updates, bug fixes, feature enhancements, and 24/7 technical support to keep your application running smoothly.'
    },
    {
        question: 'Can you integrate with existing systems and APIs?',
        answer: 'Absolutely. We have extensive experience integrating web applications with various third-party services, APIs, payment gateways, CRMs, and legacy systems.'
    },
    {
        question: 'What is your pricing structure?',
        answer: 'Our pricing is project-based and depends on scope, complexity, and timeline. We provide transparent, detailed quotes after the initial consultation and requirements analysis.'
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

function WebSolutionsPage() {
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
                                Custom Web <span className='text-primary'>Applications</span> That Scale
                            </h1>
                            <p className='text-base md:text-lg text-muted-foreground leading-relaxed mb-8'>
                                We build high-performance web applications using modern frameworks like Next.js and React.
                                Our solutions are designed for scalability, optimized for SEO, and crafted to deliver flawless user experiences.
                            </p>
                            <div className='flex flex-wrap gap-4'>
                                <Link href='/contact' className='px-8 h-12 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all flex items-center gap-2 text-base'>
                                    Get Started
                                    <MdOutlineArrowOutward className='size-5' />
                                </Link>
                                <button className='px-8 h-12 border border-border/40 rounded-2xl font-semibold hover:bg-secondary transition-all text-base'>
                                    View Portfolio
                                </button>
                            </div>
                        </div>
                        <div className='relative h-[400px] lg:h-[500px]'>
                            <Image
                                src='/images/service-web-solutions.png'
                                alt='Web Development'
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
                            Why Choose Our <span className='text-primary'>Web Solutions</span>
                        </h2>
                        <p className='text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
                            We combine technical expertise with creative design to deliver web applications that drive results.
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
                            We use cutting-edge technologies to build robust, scalable web applications.
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
                            A proven methodology that ensures quality, efficiency, and successful project delivery.
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
                            Get answers to common questions about our web development services.
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
                            Ready to Build Something <span className='text-primary'>Amazing</span>?
                        </h2>
                        <p className='text-base text-muted-foreground leading-relaxed mb-8'>
                            Let's discuss your project and create a custom web solution that exceeds your expectations.
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

export default WebSolutionsPage
