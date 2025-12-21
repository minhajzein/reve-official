'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { FaCalendar, FaUser, FaTag } from 'react-icons/fa6'
import { MdOutlineArrowBack } from 'react-icons/md'

const postsContent: Record<string, any> = {
    'future-of-ai': {
        title: 'The Future of AI in Enterprise Solutions',
        date: 'Dec 21, 2023',
        author: 'Elena Vance',
        category: 'Artificial Intelligence',
        image: '/images/ai-ml.png',
        content: `
            Artificial Intelligence is no longer just a buzzword; it's the core engine of modern enterprise efficiency. At Reve Infotech, we're seeing a massive shift towards autonomous systems that handle everything from customer service to complex logistical planning.

            The integration of Large Language Models (LLMs) into internal business workflows is just the beginning. The real value lies in predictive analytics—using historical data to forecast trends and make informed decisions before the market even moves.

            Key takeaways for 2024-2025:
            - **Hyper-automation**: AI taking over repetitive cognitive tasks.
            - **Personalized CX**: AI-driven customer journeys that feel human.
            - **Data Security**: Using AI to detect and neutralize threats in real-time.
        `
    },
    'cloud-security': {
        title: 'Cloud Security Best Practices for 2025',
        date: 'Dec 18, 2023',
        author: 'Mark S.',
        category: 'Cloud Engineering',
        image: '/images/cloud.png',
        content: `
            As businesses migrate more of their mission-critical infrastructure to the cloud, the attack surface grows exponentially. Modern cloud security requires a multi-layered approach that goes beyond simple firewall rules.

            Zero Trust Architecture (ZTA) is the foundation of our security strategy at Reve Infotech. "Never trust, always verify" ensures that every request, whether internal or external, is authenticated, authorized, and continuously validated.

            Essential Security Measures:
            - **End-to-End Encryption**: Data must be protected at rest and in transit.
            - **Identity & Access Management (IAM)**: Fine-grained control over who can see what.
            - **Continuous Monitoring**: AI-powered systems that flag anomalies in seconds.
        `
    },
    'scalable-mobile-apps': {
        title: 'Building Scalable Mobile Apps with Flutter',
        date: 'Dec 15, 2023',
        author: 'Minhaj Zein',
        category: 'Mobile Development',
        image: '/images/software-dev.png',
        content: `
            Scalability is the biggest challenge for growing startups. A mobile app that works for 1,000 users can easily crumble under the weight of 1,000,000. This is why our development team leans heavily into Flutter for cross-platform excellence.

            Flutter allows us to maintain a single codebase while delivering native performance on both iOS and Android. Its reactive framework and powerful state management tools (like Bloc or Riverpod) make it easy to scale features without compromising stability.

            Why Flutter wins for global scale:
            - **Unified Codebase**: Faster updates and fewer bugs.
            - **Native Performance**: 60fps smooth interactions.
            - **Rich Ecosystem**: Extensive libraries for every business need.
        `
    }
}

function BlogPost() {
    const { slug } = useParams()
    const post = postsContent[slug as string]

    if (!post) return (
        <div className='h-[60vh] flex items-center justify-center'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold mb-4'>Post Not Found</h1>
                <Link href='/blog' className='text-primary hover:underline'>Back to Blog</Link>
            </div>
        </div>
    )

    return (
        <main className='w-full bg-background pt-32 pb-24'>
            <div className='max-w-[1000px] mx-auto px-[20px] md:px-0'>
                <Link href='/blog' className='inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-all mb-12 group cursor-pointer'>
                    <MdOutlineArrowBack className='size-5 transition-transform group-hover:-translate-x-1' />
                    Back to all insights
                </Link>

                <div className='relative h-[400px] md:h-[600px] w-full rounded-[40px] overflow-hidden border border-border/40 mb-12'>
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className='object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                    <div className='absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-2xl'>
                        <div className='flex flex-wrap gap-4 mb-6'>
                            <span className='px-4 py-2 bg-primary/20 backdrop-blur-md text-primary rounded-full text-xs font-bold border border-primary/30 flex items-center gap-2'>
                                <FaTag className='size-3' />
                                {post.category}
                            </span>
                        </div>
                        <h1 className='text-4xl md:text-6xl font-bold text-white mb-6 leading-tight'>
                            {post.title}
                        </h1>
                        <div className='flex items-center gap-8 text-white/80 text-sm'>
                            <div className='flex items-center gap-2'>
                                <FaUser className='size-3 text-primary' />
                                {post.author}
                            </div>
                            <div className='flex items-center gap-2'>
                                <FaCalendar className='size-3 text-primary' />
                                {post.date}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='prose prose-invert prose-lg max-w-none'>
                    {post.content.split('\n').map((para: string, i: number) => (
                        para.trim() && <p key={i} className='text-muted-foreground mb-6 leading-relaxed'>{para.trim()}</p>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default BlogPost
