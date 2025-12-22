'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaBrain, FaRobot, FaChartLine, FaEye, FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import { MdOutlineArrowOutward } from 'react-icons/md'

const features = [
    {
        icon: FaRobot,
        title: 'LLM Integration',
        description: 'Integrate powerful language models like GPT-4, Claude, and custom LLMs into your applications.'
    },
    {
        icon: FaChartLine,
        title: 'Predictive Analytics',
        description: 'Make data-driven decisions with AI-powered forecasting and trend analysis.'
    },
    {
        icon: FaEye,
        title: 'Computer Vision',
        description: 'Automate visual tasks with image recognition, object detection, and video analysis.'
    },
    {
        icon: FaBrain,
        title: 'Natural Language Processing',
        description: 'Build intelligent chatbots, sentiment analysis, and text processing systems.'
    }
]

const technologies = [
    { name: 'Python', category: 'Language' },
    { name: 'TensorFlow', category: 'Framework' },
    { name: 'PyTorch', category: 'Framework' },
    { name: 'OpenAI API', category: 'LLM' },
    { name: 'Azure AI', category: 'Cloud AI' },
    { name: 'scikit-learn', category: 'ML Library' },
    { name: 'Hugging Face', category: 'Models' },
    { name: 'LangChain', category: 'Framework' }
]

const process = [
    {
        step: '01',
        title: 'Data Analysis',
        description: 'We analyze your data, business goals, and AI use cases to identify opportunities for automation and insights.'
    },
    {
        step: '02',
        title: 'Model Selection',
        description: 'Choose the right AI models and algorithms based on your specific requirements and data characteristics.'
    },
    {
        step: '03',
        title: 'Training & Fine-tuning',
        description: 'Train custom models or fine-tune pre-trained models to achieve optimal performance for your use case.'
    },
    {
        step: '04',
        title: 'Testing & Validation',
        description: 'Rigorous testing ensures accuracy, reliability, and ethical AI implementation.'
    },
    {
        step: '05',
        title: 'Deployment & Monitoring',
        description: 'Deploy AI solutions and continuously monitor performance to maintain high accuracy and efficiency.'
    }
]

const faqs = [
    {
        question: 'What are the practical use cases for AI in my business?',
        answer: 'AI can automate customer support with chatbots, improve decision-making with predictive analytics, enhance products with recommendation systems, automate document processing, detect fraud, optimize pricing, and much more. We help identify the best AI applications for your specific industry and business needs.'
    },
    {
        question: 'How much data do I need for AI/ML projects?',
        answer: 'It varies by use case. Some pre-trained models work with minimal data via fine-tuning. Custom models typically need more data, but we can use techniques like transfer learning and data augmentation to maximize results even with limited datasets. We assess your data during the discovery phase.'
    },
    {
        question: 'How long does it take to implement AI solutions?',
        answer: 'Timeline depends on complexity. Simple LLM integrations can take 2-4 weeks, while custom ML models might need 8-16 weeks. We provide detailed timelines after analyzing your requirements and available data.'
    },
    {
        question: 'Is my data secure when using AI services?',
        answer: 'Absolutely. We implement enterprise-grade security measures, including data encryption, secure APIs, and compliance with regulations like GDPR. For sensitive data, we can deploy models on-premises or in your private cloud.'
    },
    {
        question: 'Can you integrate AI into our existing systems?',
        answer: 'Yes! We specialize in seamlessly integrating AI capabilities into existing applications via APIs, SDKs, or custom integrations. We work with your current tech stack to minimize disruption while maximizing value.'
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

function AIMLPage() {
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
                                Harness the Power of <span className='text-primary'>Artificial Intelligence</span>
                            </h1>
                            <p className='text-base md:text-lg text-muted-foreground leading-relaxed mb-8'>
                                Transform your business with AI and machine learning solutions. From LLM integration and predictive
                                analytics to computer vision and NLP, we build intelligent systems that drive growth and efficiency.
                            </p>
                            <div className='flex flex-wrap gap-4'>
                                <Link href='/contact' className='px-8 h-12 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all flex items-center gap-2 text-base'>
                                    Get Started
                                    <MdOutlineArrowOutward className='size-5' />
                                </Link>
                                <button className='px-8 h-12 border border-border/40 rounded-2xl font-semibold hover:bg-secondary transition-all text-base'>
                                    View AI Projects
                                </button>
                            </div>
                        </div>
                        <div className='relative h-[400px] lg:h-[500px]'>
                            <Image
                                src='/images/service-ai-ml.png'
                                alt='AI & Machine Learning'
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
                            Our <span className='text-primary'>AI Capabilities</span>
                        </h2>
                        <p className='text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
                            We leverage cutting-edge AI technologies to solve complex business challenges and create intelligent solutions.
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
                            Our <span className='text-primary'>AI Tech Stack</span>
                        </h2>
                        <p className='text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
                            We use industry-leading AI frameworks and tools to build powerful, scalable solutions.
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
                            Our <span className='text-primary'>AI Development Process</span>
                        </h2>
                        <p className='text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
                            From data analysis to deployment, we follow a systematic approach to deliver accurate, reliable AI solutions.
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
                            Get answers to common questions about our AI and machine learning services.
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
                            Ready to Transform Your Business with <span className='text-primary'>AI</span>?
                        </h2>
                        <p className='text-base text-muted-foreground leading-relaxed mb-8'>
                            Let's explore how AI can solve your business challenges and unlock new opportunities.
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

export default AIMLPage
