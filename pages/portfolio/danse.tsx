import { NextPage } from "next";

const Danse: NextPage = () => {
	return (
		<>
			<main className="mt-[90px] p-16">
				<div className="flex w-full justify-between items-start">
					<div className="flex flex-col gap-y-4">
						<h1>La Danse</h1>
						<h4>Durée: 15 ans</h4>
					</div>
					<div className="flex flex-col w-[45%] pb-28">
						<p className="text-xl">Passionnée par la danse depuis mon plus jeune âge, j&apos;ai pratiqué de la danse modern jazz et contemporaine durant 15 ans.</p>
						<p className="text-xl">La danse permet de transmettre ses émotions et des messages par le mouvement. Une fois dans notre bulle, nous nous libérons du regard de l&apos;autre pour laisser place à la connexion à soi.</p>
					</div>
				</div>
				<img className="w-[1360px] h-[720px]" src="/hold.png" />
				<div className="mt-16 flex justify-between w-full gap-x-10">
					<div className="flex flex-col gap-10 w-[50%]">
						<img src="/headInHands.png" />
						<img src="/smile.png" />
					</div>
					<div className="flex flex-col gap-10 w-[50%]">
						<img src="/gala.png" />
						<img src="/jump.png" />
						<img src="/onFloor.png" />
					</div>
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

export default Danse;