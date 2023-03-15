import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<>
			<main>
				<div>
					<img src={'cv-bg.png'} />
				</div>
				<div className="w-full bg-black h-[780px] flex p-12">
					<div className="h-[620px] w-full flex">
						<img src={'/onStreet.png'} className='h-full w-[50%] object-cover' />
						<div className="bg-cover w-[50%] flex items-center justify-center" style={{ backgroundImage: "url('whoAmI.png')" }}>
							<div className="flex mx-20 mt-24 flex-wrap justify-center">
								<p className="text-center ">
									Actuellement étudiante en BTS Communication, je souhaite effectuer ma deuxième année en alternance au sein d&apos;une entreprise. Forte de mon expérience professionnelle et de mes notions de communication acquises lors de ma première année de BTS, je saurai m&apos;adapter facilement dans votre entreprise et répondre au mieux à vos attentes.
								</p>
								<Link href='/lettre-de-motivation' className="pt-8 text-s">En savoir plus</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-center items-center my-20">
					<img src={'ckLogo.png'} className='rounded-[50%] w-[80px] h-[80px] mb-8' />
					<h1 className='text-[48px] pb-2 font-[Cormorant-Garamond] font-light'>EXPÉRIENCE</h1>
					<p>Parcours professionnel</p>
				</div>
				<div className="flex flex-row gap-x-10 justify-center items-start w-full px-[180px] pb-16">
					<div className="flex w-[25%]">
						<h3><strong>Au pair</strong>, LONDRES</h3>
					</div>
					<div className="flex w-[25%]">
						<h4>Septembre 2021 - Juin 2022</h4>
					</div>
					<div className="w-[50%]">
						<ul className="list-disc list-inside">
							<p>Être au pair est un rôle qui nécessite un grand sens des responsabilités, de l&apos;organisation et de la créativité.</p>
						</ul>
					</div>
				</div>
				<div className="flex flex-row gap-x-10 justify-center items-start w-full px-[180px] pb-32">
					<div className="flex w-[25%]">
						<h3><strong>Barista</strong>, LONDRES</h3>
					</div>
					<div className="flex w-[25%]">
						<h4>Octobre 2022 - Juillet 2023</h4>
					</div>
					<div className="flex w-[50%]">
						<ul className="list-disc list-inside">
							<p>Joe and the Juice est une chaine de café danoise. Le travail de barista nécessite de l&apos;autonomie et de la persévérance. Il permet de développer les capacités de travail en équipe et de service client.</p>
						</ul>
					</div>
				</div>
				<div className="flex flex-col justify-center items-center my-8">
					<img src={'ckLogo.png'} className='rounded-[50%] w-[80px] h-[80px] mb-8' />
					<h1 className='text-[48px] pb-2 font-[Cormorant-Garamond]'>ÉDUCATION</h1>
					<p>Vivre et apprendre</p>
				</div>
				<div className="flex flex-row gap-x-10 justify-center items-start w-full px-[180px] pb-16 mt-24">
					<div className="flex w-[30%]">
						<h3><strong>Baccalauréat scientifique</strong>, LYCÉE CAMILLE VERNET</h3>
					</div>
					<div className="flex w-[20%]">
						<h4>Juin 2020</h4>
					</div>
					<div className="flex w-[50%]">
						<p>Spécialité Physique-Chimie</p>
					</div>
				</div>
				<div className="flex flex-row gap-x-10 justify-center items-start w-full px-[180px] pb-16">
					<div className="flex w-[30%]">
						<h3><strong>L1 Langues étrangères appliquées</strong>,<br /> UNIVERSITÉ TOULOUSE<br /> JEAN JAURES</h3>
					</div>
					<div className="flex w-[20%]">
						<h4>Septembre 2020 - Juin 2021</h4>
					</div>
					<div className="flex w-[50%]">
						<p>Cette première année de licence langues étrangères appliquées  m&apos;a permis d&apos;acquérir de nombreuses connaissances en langues (anglais, espagnol et russe) mais également en droit, marketing et communication.</p>
					</div>
				</div>
				<div className="flex flex-row gap-x-10 justify-center items-start w-full px-[180px] pb-24">
					<div className="flex w-[30%]">
						<h3><strong>1ère année BTS Communication,</strong><br />CNED</h3>
					</div>
					<div className="flex w-[20%]">
						<h4>Septembre 2022 - Juin 2023</h4>
					</div>
					<div className="flex w-[50%]">
						<p>Étudier via le CNED, permet de développer son autonomie, sa rigueur et sa détermination.</p>
					</div>
				</div>
				<div className="w-full bg-black p-12 h-[100vh]">
					<div className="flex justify-center mt-8">
						<h1 className="text-white font-[Cormorant-Garamond]"> MES CENTRES D&apos;INTERET</h1>
					</div>
					<div className="flex items-center gap-x-10 my-20 w-full">
						<Link className="bg-cover bg-[center_top_22em] flex justify-center w-[33%] h-[262px] group hover:opacity-70 " style={{ backgroundImage: "url('boo.png')" }} href="./portfolio/pNv">
							<button className="hidden group-hover:block text-[#ffffff] font-bold text-lg ">La Photo et la Vidéo</button>
						</Link>
						<Link className="bg-cover bg-[center_top_150em] flex justify-center w-[33%] h-[262px] group hover:opacity-80" style={{ backgroundImage: "url('clouds.png')" }} href='./portfolio/ce'>
							<button className=" text-[#ffffff] hidden group-hover:block font-bold text-lg">Les Voyages</button>
						</Link>
						<Link className="bg-cover bg-[center_top_22em] flex justify-center w-[33%] h-[262px] group hover:opacity-80" style={{ backgroundImage: "url('dance.png')" }} href="./portfolio/danse">
							<button className="text-[#ffffff] hidden group-hover:block font-bold text-lg">La danse</button>
						</Link>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center mt-24">
					<h1 className="font-[Cormorant-Garamond]">MES COMPÉTENCES</h1>
				</div>
				<div className="flex justify-center items-center w-full mt-24 px-52 mb-16">
					<div className="flex flex-col justify-center w-[33%] items-center px-16">
						<img
							src={'towerBridge.png'}
							className='w-[121px] h-[121px] rounded-[50%]'
						/>
						<h4 className="mt-8">Langues étrangères</h4>
					</div>
					<div className="flex flex-col justify-center w-[33%] items-center px-16">
						<img
							src={'fireworks.png'}
							className='w-[121px] h-[121px] rounded-[50%]'
						/>
						<h4 className="mt-8">Événementiel</h4>
					</div>
					<div className="flex flex-col justify-center w-[33%] items-center px-16">
						<img
							src={'spotify.png'}
							className='w-[121px] h-[121px] rounded-[50%]'
						/>
						<h4 className="mt-8">Informatique</h4>
					</div>
				</div>
				<div className="flex items-start px-36">
					<div className="flex flex-col justify-center w-[33%] items-center mb-8 gap-2 pl-24">
						<div className="flex flex-col gap-2">
							<p>L&apos;anglais: Niveau C1</p>
							<p>Espagnol: Nivea A2 (Diplôme DELE 2018)</p>
						</div>
					</div>
					<div className="flex flex-col justify-center w-[33%] items-center mb-8">
						<div className="flex flex-col gap-2 ">
							<p className="text-center">Organisation d&apos;événements : mariages,<br /> anniversaires, évènements sportifs<br /> et culturels...</p>
						</div>
					</div>
					<div className="flex flex-col justify-center w-[33%] items-center mb-8">
						<div className="flex flex-col gap-2">
							<p>iMovie, Resolve DaVinci: <strong>avancé</strong></p>
							<p>Résaux sociaux: <strong>avancé</strong></p>
							<p>PackOffice, Canva: <strong>avancé</strong></p>
							<p>Photoshop, Lightroom, Snapseed: <strong>intermédiaire</strong></p>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center my-24 w-full gap-8">
					<h1 className="font-[Carmorant-Garmorand]">Pourquoi moi?</h1>
					<Link href='./lettre-de-motivation' className="w-[142px] h-[40px] bg-black text-white hover:bg-white hover:text-black rounded border-[1px] border-black items-center flex justify-center">Découvrir</Link>
				</div>
			</main>
			<footer>
				<div className='bg-cover bg-center h-[318px] flex items-center justify-center' style={{ backgroundImage: "url('footerBg.png')" }}>
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
									<img src={'linkedin.png'} className='h-[24px] w-[24px]' />
								</a>
								<a href='https://www.instagram.com/celestine_kr/' target='_blank' rel="noreferrer">
									<img src={'facebook.png'} className='h-[24px] w-[24px]' />
								</a>
							</div>
						</div>
						<div className='absolute pt-40 text-xs'>
							<p>© 2023 créé par Luke Da Cruz</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Home;