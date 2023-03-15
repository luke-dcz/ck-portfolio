import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'

const NavBar = (
	<nav className='top-0 w-full fixed h-[90px] flex justify-between items-center p-4 z-50 bg-white'
	>
		<div className='ml-12'>
			<img src={'logo.png'} className='h-[60px] w-[61px]' />
		</div>
		<div className="flex items-center justify-between gap-4 text-black text-sm mr-12">
			<Link href="/home">Accueil</Link>
			<Link href="/lettre-de-motivation">Lettre de motivation</Link>
			<Link href="/contact">Contact</Link>
		</div>
	</nav>
)

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>CK Curriculum Vitae</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{NavBar}
			<Component {...pageProps} />
		</>
	)
}
