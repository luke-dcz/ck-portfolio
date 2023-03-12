import { NextPage } from "next";

const Danse: NextPage = () => {
	return (
		<main className="mt-[90px] p-16">
			<div className="flex w-full justify-between items-start">
				<div className="flex flex-col gap-y-4">
					<h1>La Danse</h1>
					<h4>Durée: 15 ans</h4>
				</div>
				<div className="flex flex-col w-[45%] pb-28">
					<p className="text-xl">Passionnée par la danse depuis mon plus jeune âge, j'ai pratiqué de la danse modern jazz et contemporaine durant 15 ans.</p>
					<p className="text-xl">La danse permet de transmettre ses émotions et des messages par le mouvement. Une fois dans notre bulle, nous nous libérons du regard de l'autre pour laisser place à la connexion à soi.</p>
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
	)
}

export default Danse;