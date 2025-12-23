import { MetadataRoute } from 'next'
import { postsContent } from '@/lib/blog-data'
import { servicesData } from '@/lib/services-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://reveinfotech.com'

    // Static pages
    const routes = [
        '',
        '/about-us',
        '/services',
        '/contact',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic blog posts
    const blogRoutes = Object.keys(postsContent).map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(postsContent[slug].date),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    // Dynamic service pages
    const serviceRoutes = Object.keys(servicesData).map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }))

    return [...routes, ...serviceRoutes, ...blogRoutes]
}
