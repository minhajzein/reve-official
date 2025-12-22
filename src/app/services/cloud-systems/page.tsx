'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCloud, FaServer, FaShield, FaGaugeHigh, FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import { MdOutlineArrowOutward } from 'react-icons/md'

const features = [
    {
        icon: FaGaugeHigh,
        title: 'Auto-Scaling',
        description: 'Automatically scale resources up or down based on demand to optimize performance and costs.'
    },
    {
        icon: FaServer,
        title: 'High Availability',
        description: 'Built for 99.99% uptime with redundancy, failover, and disaster recovery solutions.'
    },
    {
        icon: FaCloud,
        title: 'Cost Optimization',
        description: 'Reduce cloud spending with right-sizing, reserved instances, and smart resource management.'
    },
    {
        icon: FaShield,
        title: 'Enterprise Security',
        description: 'Multi-layer security with encryption, IAM policies, and compliance with industry standards.'
    }
]

const technologies = [
    { name: 'AWS', category: 'Cloud Platform' },
    { name: 'Azure', category: 'Cloud Platform' },
    { name: 'Docker', category: 'Container' },
    { name: 'Kubernetes', category: 'Orchestration' },
    { name: 'Terraform', category: 'IaC' },
    { name: 'Jenkins', category: 'CI/CD' },
    { name: 'GitHub Actions', category: 'CI/CD' },
    { name: 'Prometheus', category: 'Monitoring' }
]

const process = [
    {
        step: '01',
        title: 'Assessment & Planning',
        description: 'Evaluate your current infrastructure, workloads, and requirements to design the optimal cloud strategy.'
    },
    {
        step: '02',
        title: 'Architecture Design',
        description: 'Design scalable, secure cloud architecture with best practices for your specific use case.'
    },
    {
        step: '03',
        title: 'Migration & Implementation',
        description: 'Seamlessly migrate applications and data to the cloud with minimal downtime and risk.'
    },
    {
        step: '04',
        title: 'Optimization',
        description: 'Fine-tune performance, security, and costs to maximize your cloud investment.'
    },
    {
        step: '05',
        title: 'Monitoring & Support',
        description: 'Continuous monitoring, updates, and 24/7 support to ensure optimal cloud operations.'
    }
]

const faqs = [
    {
        question: 'Should I choose AWS or Azure for my cloud infrastructure?',
        answer: 'Both are excellent choices. AWS offers broader service options and maturity, while Azure integrates seamlessly with Microsoft products. We analyze your specific needs, existing tools, and team expertise to recommend the best platform. We can also design multi-cloud solutions if needed.'
    },
    {
        question: 'How long does cloud migration take?',
        answer: 'Migration timeline depends on application complexity, data volume, and current infrastructure. Simple migrations can take 2-4 weeks, while enterprise migrations might need 3-6 months. We create detailed migration plans with phased approaches to minimize risk and downtime.'
    },
    {
        question: 'How much can I save by moving to the cloud?',
        answer: 'Most organizations save 20-40% on infrastructure costs after optimization. Savings come from eliminating hardware maintenance, right-sizing resources, using reserved instances, and auto-scaling. We provide detailed cost analysis during the assessment phase.'
    },
    {
        question: 'Is cloud infrastructure secure?',
        answer: 'Yes, when properly configured. Cloud providers offer enterprise-grade security, but implementation matters. We implement security best practices including encryption, IAM policies, network segmentation, logging, and compliance with standards like SOC 2, HIPAA, and GDPR.'
    },
    {
        question: 'Do you provide DevOps and CI/CD implementation?',
        answer: 'Absolutely. We implement complete DevOps pipelines with automated testing, continuous integration/deployment, infrastructure as code, and monitoring. This accelerates development, improves quality, and reduces deployment risks.'
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

function CloudSystemsPage() {
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
                                Scalable <span className='text-primary'>Cloud Infrastructure</span> & DevOps
                            </h1>
                            <p className='text-base md:text-lg text-muted-foreground leading-relaxed mb-8'>
                                Build resilient, scalable cloud systems on AWS or Azure. We design, implement, and manage
                                cloud infrastructure with DevOps best practices to ensure high availability, security, and cost efficiency.
                            </p>
                            <div className='flex flex-wrap gap-4'>
                                <Link href='/contact' className='px-8 h-12 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all flex items-center gap-2 text-base'>
                                    Get Started
                                    <MdOutlineArrowOutward className='size-5' />
                                </Link>
                                <button className='px-8 h-12 border border-border/40 rounded-2xl font-semibold hover:bg-secondary transition-all text-base'>
                                    Cloud Assessment
                                </button>
                            </div>
                        </div>
                        <div className='relative h-[400px] lg:h-[500px]'>
                            <Image
                                src='/images/service-cloud.png'
                                alt='Cloud Systems'
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
                            Why Choose Our <span className='text-primary'>Cloud Solutions</span>
                        </h2>
                        <p className='text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
                            We build cloud infrastructure that's reliable, secure, and optimized for your business needs.
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
                            Our <span className='text-primary'>Cloud Tech Stack</span>
                        </h2>
                        <p className='text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
                            We leverage industry-leading cloud and DevOps technologies to build robust infrastructure.
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
                            Our <span className='text-primary'>Cloud Implementation Process</span>
                        </h2>
                        <p className='text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
                            From assessment to ongoing support, we ensure successful cloud adoption and optimization.
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
                            Get answers to common questions about our cloud and DevOps services.
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
                            Ready to Move to the <span className='text-primary'>Cloud</span>?
                        </h2>
                        <p className='text-base text-muted-foreground leading-relaxed mb-8'>
                            Let's design and implement a cloud strategy that scales with your business and optimizes costs.
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

export default CloudSystemsPage
