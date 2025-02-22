import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Oxanium } from 'next/font/google'

export const metadata: Metadata = {
	title: 'devstage',
}

const oxanium = Oxanium({
	//        bold/semibold
	weight: ['500', '600'],
	//fonte simplificada (otimiza carregamento da página)
	subsets: ['latin'],
	variable: '--font-oxanium',
})

const montserrat = Montserrat({
	//        regular/semibold
	weight: ['400', '600'],
	subsets: ['latin'],
	variable: '--font-montserrat',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
			<body className="bg-gray-900 antialiased bg-[url(/background.png)] bg-no-repeat bg-top md:bg-right-top text-gray-100">
				<main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
					{children}
				</main>
			</body>
		</html>
	)
}
