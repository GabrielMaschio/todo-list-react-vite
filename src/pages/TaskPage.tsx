import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function TaskPage() {
	const [searchParams] = useSearchParams();

	const title = searchParams.get("title");
	const description = searchParams.get("description");

	const navigate = useNavigate();

	return (
		<div className="h-full w-full bg-slate-500 flex justify-center p-6">
			<div className="w-[500px] space-y-4">
				<div className="flex justify-center relative mb-6">
					{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
					<button
						onClick={() => navigate(-1)}
						className="absolute top-0 left-0 bottom-0 text-slate-100"
					>
						<ChevronLeftIcon />
					</button>

					<h1 className="text-slate-100 text-3xl font-bold text-center">
						Detalhes de Tarefas
					</h1>
				</div>

				<div className="bg-slate-200 p-4 rounded-md">
					<h2 className="text-xl text-slate-600 font-bold">{title}</h2>
					<p className="text-slate-600">{description}</p>
				</div>
			</div>
		</div>
	);
}
