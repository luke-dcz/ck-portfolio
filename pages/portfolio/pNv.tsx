import { NextPage } from "next";

const pNv: NextPage = () => {
	return (
		<>
			<main className="mt-[90px] p-16">
				<div className="flex w-full justify-between items-start pb-28">
					<h1>La Photo et la Vidéo</h1>
					<p className="text-xl">Photographier est le meilleur moyen de partager <br />des souvenirs et des moments de vie.</p>
				</div>
				<img className="w-[1360px] object-cover h-[720px]" src="/boo.png" />
				<div className="mt-16 flex justify-between w-full gap-x-10">
					<div className="flex flex-col gap-10 w-[50%]">
						<img src="/thorntons.png" />
						<img src="/sunset.png" />
						<img src="/beach.png" />
					</div>
					<div className="flex flex-col gap-10 w-[50%]">
						<img src="/ilo.png" />
						<img src="/building.png" />
						<img src="/romane.png" />
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

export default pNv;