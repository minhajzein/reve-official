import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'
import ScrollToTop from '../hooks/ScrollToTop'
import { ThemeProvider } from '../contexts/ThemeContext'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import { Analytics } from '@vercel/analytics/next'

const notoSans = Noto_Sans({
	subsets: ['latin'],
	variable: '--font-noto-sans',
	weight: ['400', '500', '700'], // choose weights you need
})

export const metadata: Metadata = {
	metadataBase: new URL('https://reveinfotech.com'),
	title: {
		default: 'Reve Infotech | Enterprise Tech Solutions',
		template: '%s | Reve Infotech',
	},
	description: 'Reve Infotech offers cutting-edge AI, cloud, and mobile solutions for businesses worldwide. Transform your enterprise with our expert development services.',
	keywords: ['Reve Infotech', 'AI Solutions', 'Cloud Security', 'Mobile App Development', 'Flutter', 'Enterprise Tech'],
	authors: [{ name: 'Reve Infotech' }],
	creator: 'Reve Infotech',
	publisher: 'Reve Infotech',
	alternates: {
		canonical: '/',
	},
	openGraph: {
		title: 'Reve Infotech | Enterprise Tech Solutions',
		description: 'Transform your business with AI, Cloud, and Mobile solutions from Reve Infotech.',
		url: 'https://reveinfotech.com',
		siteName: 'Reve Infotech',
		locale: 'en_US',
		type: 'website',
		images: [
			{
				url: '/images/og-image.png', // Ensure you have an OG image at this path
				width: 1200,
				height: 630,
				alt: 'Reve Infotech',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Reve Infotech | Enterprise Tech Solutions',
		description: 'Transform your business with AI, Cloud, and Mobile solutions from Reve Infotech.',
		images: ['/images/og-image.png'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${notoSans.variable} antialiased`}>
				<ThemeProvider>
					<ScrollToTop />
					<Header />
					<div className='pt-[72px]'>{children}</div>
					<Footer />
				</ThemeProvider>
				<Analytics />
			</body>
		</html>
	)
}
