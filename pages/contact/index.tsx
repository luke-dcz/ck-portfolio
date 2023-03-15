import { NextPage } from "next";

const Contact: NextPage = () => {
	return (
		<>
			<main>
				<div className="bg-white-transparent flex mt-[90px] px-16 flex-wrap py-8 justify-center">
					<img src="/cv-4.png" />
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

export default Contact;