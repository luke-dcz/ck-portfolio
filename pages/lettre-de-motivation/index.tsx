import { NextPage } from "next";
import wedPic from './images/weddingPic.png'

const LettreDeMotivation: NextPage = () => {
	return (
		<main>
			<div className="bg-pink flex p-16 mt-[90px]">
				<div className="flex h-[398px]">
					<img className="w-[417px]" src='weddingPic.png' />
					<img className="w-[895px] object-cover " src="coverLetterBg.png"/>
				</div>
			</div>
			<div className="bg-pink flex px-16 pb-16">
				<div className="bg-white flex items-center w-full py-20 px-64 flex-wrap gap-y-8">
					<p className="text-[18px]">
						Madame, monsieur,					
					</p>
					<p className="text-[18px]">
						Actuellement étudiante en première année de BTS Communication au CNED, je souhaiterais effectuer ma deuxième année en alternance pour être mieux préparé au métier de wedding planner. Je suis disponible dès le mois d&apos;août 2023.</p>
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
	)
}

export default LettreDeMotivation;