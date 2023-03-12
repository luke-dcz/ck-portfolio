import { NextPage } from 'next'

const Voyages: NextPage = () => {
	return (
		<main className='mt-[90px] p-16'>
			<div className="flex w-full justify-between items-start pb-28">
				<h1>Les Voyages</h1>
				<div className='flex flex-col gap-4'>
					<p className="text-xl">« Rien ne développe l’intelligence comme les voyages. » – Émile Zola</p>
					<p className='text-xl'>« Parler une langue c’est adopter un monde, une culture. » – Frantz Fanon</p>
				</div>
			</div>
			<img className="w-[1360px] object-cover h-[720px]" src="/clouds.png" />
			<div className="mt-16 flex justify-between w-full gap-x-10">
				<div className="flex flex-col gap-10 w-[50%]">
					<img src="/shard.png" />
					<img src="/copenhagen1.png" />
				</div>
				<div className="flex flex-col gap-10 w-[50%]">
					<img src="/nottingHill.png" />
					<img src="/copenhagen2.png" />
				</div>
			</div>
		</main>
	)
}

export default Voyages;