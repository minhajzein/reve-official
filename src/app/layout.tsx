import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'
import ScrollToTop from './hooks/ScrollToTop'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import { Analytics } from '@vercel/analytics/next'

const notoSans = Noto_Sans({
	subsets: ['latin'],
	variable: '--font-noto-sans',
	weight: ['400', '500', '700'], // choose weights you need
})

export const metadata: Metadata = {
	title: 'Reve Infotech',
	description: 'A complete tech solutions for your bussiness',
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
					{children}
					<Footer />
				</ThemeProvider>
				<Analytics />
			</body>
		</html>
	)
}
