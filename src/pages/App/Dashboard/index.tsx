import { useState } from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div className="text-slate-500">
      <h1>O Beach venceu</h1>
      <h1>{value}</h1>
      <Link
        className="bg-sky-500 hover:bg-sky-700 text-white p-2 rounded-md"
        to="inventário"
      >
        Clique para fazer uma aplicação
      </Link>
      <input
        type="text"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="NAME HERE NOW!!!"
        required
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
