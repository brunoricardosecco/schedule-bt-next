import React from "react";

export const App = () => {
	return (
		<div className="text-slate-500">
			<h1>O Beach venceu</h1>
			<button
				className="bg-sky-500 hover:bg-sky-700 text-white p-2 rounded-md"
				onClick={() => alert("Money")}
			>
				Clique para fazer uma aplicação
			</button>
		</div>
	);
};
