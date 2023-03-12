import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'

const NavBar = (
	<nav className='top-0 w-full fixed h-[90px] flex justify-between items-center p-4 z-50 bg-white'
	>
		<div className='ml-12'>
			<img src={'logo.png'} className='h-[60px] w-[61px]'/>
		</div>
		<div className="flex items-center justify-between gap-[20px] text-black text-sm mr-12">
			<Link href="/home">Accueil</Link>
			<Link href="/lettre-de-motivation">Lettre de motivation</Link>
			<Link href="/contact">Contact</Link>
		</div>
	</nav>
)

const Footer = (
	<div className='bg-cover bg-center h-[318px] flex items-center justify-center' style={{backgroundImage: "url('footerBg.png')"}}>
		<div className='bg-white w-[980px] h-[180px] flex justify-center flex-wrap'>
			<div className='flex flex-col justify-center items-center gap-4 w-[33%]'>
				<p>Téléphone</p>
				<a href='tel:+33652022272' target='_blank' rel="noreferrer">+33 6 52 02 22 72</a>
			</div>
			<div className='flex flex-col justify-center items-center gap-4 w-[33%]'>
				<p>Email</p>
				<a href='mailto:celestinekrencker24@gmail.com' target='_blank' rel="noreferrer">celestinekrencker24@gmail.com</a>
			</div>
			<div className='flex flex-col justify-center items-center gap-4 w-[33%]'>
				<p>Follow</p>
				<div className="flex items-center gap-4">
					<a href='https://www.linkedin.com/in/c%C3%A9lestine-krencker-702650207/' target='_blank' rel="noreferrer">
						<img src={'linkedin.png'} className='h-[24px] w-[24px]'/>
					</a>
					<a href='https://www.instagram.com/celestine_kr/' target='_blank' rel="noreferrer">
						<img src={'facebook.png'} className='h-[24px] w-[24px]'/>
					</a>
				</div>
			</div>
			<div className='absolute pt-40 text-xs'>
				<p>© 2023 créé par Luke Da Cruz</p>
			</div>
		</div>
	</div>
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
	{Footer}
    </>
  )
}
