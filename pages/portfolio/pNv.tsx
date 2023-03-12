import { NextPage } from "next";

const pNv: NextPage = () => {
	return (
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
	)
}

export default pNv;