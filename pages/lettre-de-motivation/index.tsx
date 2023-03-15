import { NextPage } from "next";

const LettreDeMotivation: NextPage = () => {
	return (
		<>
			<main>
				<div className="bg-pink flex p-16 mt-[90px]">
					<div className="flex h-[398px]">
						<img className="w-[417px] object-cover" src='shardSmile.png' />
						<img className="w-[895px] object-cover " src="coverLetterBg.png" />
					</div>
				</div>
				<div className="bg-pink flex px-16 pb-16">
					<div className="bg-white flex items-center w-full py-20 px-64 flex-wrap gap-y-8">
						<p className="text-[18px]">
							Madame, monsieur,
						</p>
						<p className="text-[18px]">
							Actuellement étudiante en première année de BTS Communication au CNED, je souhaite effectuer ma deuxième année en alternance pour être mieux préparé au métier de wedding planner. Je suis disponible dès le mois d&apos;août 2023.</p>
						<p className="text-[18px]">
							La renommée de votre entreprise dans le secteur de l&apos;événementiel a rapidement attiré mon attention. Une année d&apos;alternance me permettrait de mettre en pratique les notions étudiées et de proposer à mes futurs employeurs une solide expérience professionnelle.
						</p>
						<p className="text-[18px]">
							Sérieuse et organisée, je possède les qualités d&apos;adaptation et d&apos;intégration indispensables à la réussite d&apos;une formation en alternance. Passionnée par la communication et l&apos;événementiel, j&apos;ai appris à maitriser quelques aspects techniques de ces domaines grâce à mon expérience personnelle. En effet, j&apos;ai eu l&apos;occasion d&apos;organiser des mariages, des anniversaires au sein de mon entourage mais aussi des événements sportifs et culturels (galas de danse, spectacles de théâtre, expositions, etc...). De plus, ma première année de BTS m&apos;a permis d&apos;acquérir de solides bases de communication et de marketing.
						</p>
						<p className="text-[18px]">
							Mes qualités relationnelles et ma grande motivation me poussent aujourd&apos;hui à vous proposer ma candidature. Je me tiens à votre disposition pour tout complément d&apos;information ou pour convenir d&apos;un entretien.
						</p>
						<p className="w-full text-[18px]">
							Dans l&apos;attente d&apos;une réponse de votre part, je vous prie d&apos;agréer Madame, messieurs, mes sincères salutations.
						</p>
						<div className="flex w-full justify-between">
							<p>
								Célestine Krencker
							</p>
							<img className="w-[200px] mr-24 mt-8" src="/signature.png" />
						</div>
					</div>
				</div>
			</main>
			<footer>
				<div className='bg-cover bg-center h-[318px] flex items-center justify-center' style={{ backgroundImage: "url('cv-bg-pink.png')" }}>
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

export default LettreDeMotivation;