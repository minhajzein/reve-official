'use client'

import React from 'react'
import { FaEnvelope, FaPhone, FaLocationDot, FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa6'
import { MdOutlineArrowOutward } from 'react-icons/md'

const contactInfo = [
    {
        icon: FaEnvelope,
        label: 'Email Us',
        value: 'hello@reveinfotech.com',
        description: 'Our friendly team is here to help.'
    },
    {
        icon: FaPhone,
        label: 'Call Us',
        value: '+91 73569 86777',
        description: 'Mon-Fri from 9am to 6pm.'
    },
    {
        icon: FaLocationDot,
        label: 'Office',
        value: 'Calicut, Kerala, India',
        description: 'Visit our innovation hub.'
    }
]

function ContactPage() {
    return (
        <main className='w-full min-h-screen bg-background relative overflow-hidden'>
            {/* Background Decorations */}
            <div className='absolute top-0 right-0 size-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none' />
            <div className='absolute bottom-0 left-0 size-[500px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none' />

            <div className='max-w-[1440px] mx-auto px-[20px] md:px-[80px] pt-32 pb-24 relative z-10'>
                {/* Header Section */}
                <div className='max-w-3xl mb-12'>
                    <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[12px] font-bold mb-5'>
                        <span className='size-1.5 rounded-full bg-primary animate-pulse' />
                        GET IN TOUCH
                    </div>
                    <h1 className='text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight'>
                        Let's Built Something <span className='text-primary'>Great</span> Together
                    </h1>
                    <p className='text-muted-foreground text-lg leading-relaxed max-w-2xl'>
                        Whether you have a specific project in mind or just want to explore possibilities, our team is ready to help you navigate your digital transformation.
                    </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-12 gap-16'>
                    {/* Left Column: Form */}
                    <div className='lg:col-span-7'>
                        <div className='bg-card border border-border/40 rounded-[32px] p-6 md:p-8 shadow-2xl relative overflow-hidden group'>
                            <div className='absolute top-0 right-0 size-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors' />

                            <form className='space-y-6 relative z-10'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    <div className='space-y-2'>
                                        <label className='text-[13px] font-bold text-foreground/70 ml-1 uppercase tracking-wider'>First Name</label>
                                        <input
                                            type='text'
                                            className='w-full bg-background/50 border border-border/40 rounded-xl px-5 py-3.5 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-foreground text-sm'
                                            placeholder='John'
                                        />
                                    </div>
                                    <div className='space-y-2'>
                                        <label className='text-[13px] font-bold text-foreground/70 ml-1 uppercase tracking-wider'>Last Name</label>
                                        <input
                                            type='text'
                                            className='w-full bg-background/50 border border-border/40 rounded-xl px-5 py-3.5 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-foreground text-sm'
                                            placeholder='Doe'
                                        />
                                    </div>
                                </div>
                                <div className='space-y-2'>
                                    <label className='text-[13px] font-bold text-foreground/70 ml-1 uppercase tracking-wider'>Email Address</label>
                                    <input
                                        type='email'
                                        className='w-full bg-background/50 border border-border/40 rounded-xl px-5 py-3.5 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-foreground text-sm'
                                        placeholder='john@reveinfotech.com'
                                    />
                                </div>
                                <div className='space-y-2'>
                                    <label className='text-[13px] font-bold text-foreground/70 ml-1 uppercase tracking-wider'>How can we help?</label>
                                    <textarea
                                        className='w-full bg-background/50 border border-border/40 rounded-xl px-5 py-3.5 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-foreground text-sm h-36 resize-none'
                                        placeholder='Tell us about your project, goals, and timeline...'
                                    />
                                </div>
                                <button className='w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 cursor-pointer text-base'>
                                    Send Message
                                    <MdOutlineArrowOutward className='size-4' />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Column: Info & Map */}
                    <div className='lg:col-span-5 flex flex-col gap-10'>
                        {/* Info Blocks */}
                        <div className='grid grid-cols-1 gap-4'>
                            {contactInfo.map((info, i) => (
                                <div key={i} className='bg-card/50 border border-border/40 p-5 rounded-2xl flex items-start gap-4 hover:border-primary/40 transition-all group'>
                                    <div className='size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all'>
                                        <info.icon className='size-5' />
                                    </div>
                                    <div>
                                        <h3 className='font-bold text-base mb-0.5'>{info.label}</h3>
                                        <p className='text-foreground font-semibold text-sm mb-0.5'>{info.value}</p>
                                        <p className='text-muted-foreground text-[12px]'>{info.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Map Section */}
                        <div className='flex-grow min-h-[300px] bg-card border border-border/40 rounded-[32px] overflow-hidden relative group'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125218.42838497645!2d75.72756857418641!3d11.2587531!2m3!1f0!2f0!3f0!3m2!1i1024!2i1024!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x321a5a4692751f5e!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1703140000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className='grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700'
                            />
                            {/* Overlay for aesthetic */}
                            <div className='absolute inset-0 pointer-events-none border-[8px] border-card rounded-[32px]' />
                        </div>

                        {/* Social Links */}
                        <div className='bg-primary/5 border border-primary/20 p-6 rounded-[24px] flex items-center justify-between'>
                            <p className='font-bold text-base tracking-tight'>Follow our journey</p>
                            <div className='flex gap-2.5'>
                                {[FaLinkedin, FaTwitter, FaGithub, FaInstagram].map((Icon, i) => (
                                    <button key={i} className='size-10 rounded-lg bg-background border border-border/40 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all cursor-pointer'>
                                        <Icon className='size-4' />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ContactPage
