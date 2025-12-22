'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaShieldHalved, FaUserShield, FaLock, FaBug, FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import { MdOutlineArrowOutward } from 'react-icons/md'

const features = [
    {
        icon: FaUserShield,
        title: 'Security Audits',
        description: 'Comprehensive security assessments to identify vulnerabilities and compliance gaps.'
    },
    {
        icon: FaBug,
        title: 'Penetration Testing',
        description: 'Ethical hacking to discover and fix security weaknesses before attackers do.'
    },
    {
        icon: FaLock,
        title: 'Data Encryption',
        description: 'Enterprise-grade encryption for data at rest and in transit to protect sensitive information.'
    },
    {
        icon: FaShieldHalved,
        title: '24/7 Monitoring',
        description: 'Continuous threat detection and rapid incident response to minimize security risks.'
    }
]

const technologies = [
    { name: 'SIEM Tools', category: 'Monitoring' },
    { name: 'Splunk', category: 'Analytics' },
    { name: 'Firewall Systems', category: 'Protection' },
    { name: 'EDR Solutions', category: 'Endpoint' },
    { name: 'AES-256', category: 'Encryption' },
    { name: 'Metasploit', category: 'Pen Testing' },
    { name: 'Wireshark', category: 'Analysis' },
    { name: 'OWASP ZAP', category: 'Security' }
]

const process = [
    {
        step: '01',
        title: 'Security Assessment',
        description: 'Comprehensive evaluation of your current security posture, infrastructure, and potential vulnerabilities.'
    },
    {
        step: '02',
        title: 'Implementation',
        description: 'Deploy security solutions including firewalls, encryption, access controls, and monitoring systems.'
    },
    {
        step: '03',
        title: 'Monitoring & Detection',
        description: '24/7 surveillance of your systems to detect and alert on potential security threats in real-time.'
    },
    {
        step: '04',
        title: 'Incident Response',
        description: 'Rapid response protocols to contain, investigate, and remediate security incidents.'
    },
    {
        step: '05',
        title: 'Continuous Improvement',
        description: 'Regular updates, patches, and audits to maintain robust security against evolving threats.'
    }
]

const faqs = [
    {
        question: 'What is penetration testing and why do I need it?',
        answer: 'Penetration testing (pen testing) simulates real-world cyberattacks to identify security weaknesses before malicious hackers exploit them. It\'s essential for validating your security measures, meeting compliance requirements, and protecting sensitive data. We recommend annual pen tests or after major infrastructure changes.'
    },
    {
        question: 'Are you certified for security compliance (SOC 2, HIPAA, GDPR)?',
        answer: 'Yes, our team includes certified security professionals (CISSP, CEH, OSCP) with expertise in compliance frameworks like SOC 2, HIPAA, GDPR, PCI-DSS, and ISO 27001. We help you achieve and maintain compliance through proper security controls and documentation.'
    },
    {
        question: 'How do you handle security incidents?',
        answer: 'We have a structured incident response process: immediate containment to stop the threat, forensic analysis to understand the breach, remediation to fix vulnerabilities, and recovery to restore normal operations. We also provide detailed post-incident reports and recommendations.'
    },
    {
        question: 'What\'s the difference between a security audit and penetration testing?',
        answer: 'A security audit is a comprehensive review of your security policies, configurations, and controls against best practices and compliance requirements. Penetration testing actively attempts to exploit vulnerabilities like an attacker would. Both are important - audits find policy gaps, pen tests find exploitable weaknesses.'
    },
    {
        question: 'How much does cyber security implementation cost?',
        answer: 'Costs vary based on organization size, industry requirements, and current security posture. Basic security audits start at a few thousand dollars, while comprehensive security programs can range significantly. We provide transparent pricing after an initial assessment of your needs.'
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

function CyberSecurityPage() {
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
                                Cybersecurity & <span className='text-primary'>Data Protection</span>
                            </h1>
                            <p className='text-base md:text-lg text-muted-foreground leading-relaxed mb-8'>
                                Protect your business from evolving cyber threats with our comprehensive security solutions.
                                We offer penetration testing, security audits, and real-time monitoring to safeguard your data.
                            </p>
                            <div className='flex flex-wrap gap-4'>
                                <Link href='/contact' className='px-8 h-12 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all flex items-center gap-2 text-base'>
                                    Get Started
                                    <MdOutlineArrowOutward className='size-5' />
                                </Link>
                                <button className='px-8 h-12 border border-border/40 rounded-2xl font-semibold hover:bg-secondary transition-all text-base'>
                                    Security Audit
                                </button>
                            </div>
                        </div>
                        <div className='relative h-[400px] lg:h-[500px]'>
                            <Image
                                src='/images/service-security.png'
                                alt='Cyber Security'
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
                            Our <span className='text-primary'>Security Services</span>
                        </h2>
                        <p className='text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
                            Multi-layered security approach to protect your organization from evolving cyber threats.
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
                            Our <span className='text-primary'>Security Stack</span>
                        </h2>
                        <p className='text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
                            We use advanced security tools and protocols to defend against sophisticated attacks.
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
                            Our <span className='text-primary'>Security Process</span>
                        </h2>
                        <p className='text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
                            A comprehensive approach to identifying, assessing, and mitigating security risks.
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
                            Get answers to common questions about our cyber security services.
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
                            Ready to Secure Your <span className='text-primary'>Business</span>?
                        </h2>
                        <p className='text-base text-muted-foreground leading-relaxed mb-8'>
                            Don't wait for a breach to happen. Contact us today for a comprehensive security assessment.
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

export default CyberSecurityPage
