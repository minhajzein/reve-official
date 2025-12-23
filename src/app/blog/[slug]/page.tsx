'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { FaCalendar, FaUser, FaTag } from 'react-icons/fa6'
import { MdOutlineArrowBack } from 'react-icons/md'

import { postsContent } from '@/lib/blog-data'


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
        <main className='w-full bg-background pt-8 pb-12'>
            <div className='max-w-[1000px] mx-auto px-[20px] md:px-0'>
                <Link href='/blog' className='inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-all mb-12 group cursor-pointer'>
                    <MdOutlineArrowBack className='size-5 transition-transform group-hover:-translate-x-1' />
                    Back to all insights
                </Link>

                <div className='relative h-[400px] w-full rounded-[40px] overflow-hidden border border-border/40 mb-12'>
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
                        <h1 className='text-3xl md:text-5xl font-bold text-white mb-6 leading-tight'>
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
